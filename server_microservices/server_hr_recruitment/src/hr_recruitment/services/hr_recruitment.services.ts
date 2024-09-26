import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Personnel } from '../entity/personnel.entity';
import { Family } from '../entity/family.entity';
import { Education } from '../entity/education.entity';
import { Language } from '../entity/language.entity';
import { Experience } from '../entity/experience.entity';
import { CreatePersonnelWithDetailsDto } from '../dto/create-personnel-with-details.dto';

@Injectable()
export class HrRecruitmentServices {
  private readonly logger = new Logger(HrRecruitmentServices.name);

  constructor(
    @InjectRepository(Personnel)
    private readonly personnelRepository: Repository<Personnel>,
    @InjectRepository(Family)
    private readonly familyRepository: Repository<Family>,
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
    @InjectRepository(Experience)
    private readonly experienceRepository: Repository<Experience>,
  ) {}

  async create(
    createPersonnelWithDetailsDto: CreatePersonnelWithDetailsDto,
  ): Promise<{ success: boolean; message: string; data?: Personnel }> {
    try {
      return await this.personnelRepository.manager.transaction(
        async (entityManager: EntityManager) => {
          const { families = [], educations = [], languages = [], experiences = [], ...personnelData } = createPersonnelWithDetailsDto;

          // Create and save personnel
          const personnel = this.personnelRepository.create(personnelData);
          const savedPersonnel = await entityManager.save(Personnel, personnel);

          // Create related entities with personnel reference
          const familyEntities = families.map(family => ({ ...family, personnel: savedPersonnel }));
          const educationEntities = educations.map(education => ({ ...education, personnel: savedPersonnel }));
          const languageEntities = languages.map(language => ({ ...language, personnel: savedPersonnel }));
          const experienceEntities = experiences.map(experience => ({ ...experience, personnel: savedPersonnel }));

          // Bulk save related entities
          await Promise.all([
            familyEntities.length > 0 ? entityManager.save(Family, familyEntities) : Promise.resolve(),
            educationEntities.length > 0 ? entityManager.save(Education, educationEntities) : Promise.resolve(),
            languageEntities.length > 0 ? entityManager.save(Language, languageEntities) : Promise.resolve(),
            experienceEntities.length > 0 ? entityManager.save(Experience, experienceEntities) : Promise.resolve(),
          ]);

          return {
            success: true,
            message: 'Personnel and related details created successfully',
            data: savedPersonnel,
          };
        },
      );
    } catch (error) {
      this.logger.error('Error creating personnel with details', error.stack);
      return {
        success: false,
        message: 'Failed to create personnel with details',
      };
    }
  }

  async findAllPageLimit(
    filter: Record<string, any> = {},
    page: number = 1,
    limit: number = 50,
  ): Promise<{ data: Personnel[]; total: number; totalPages: number }> {
    const query = this.personnelRepository.createQueryBuilder('personnel');

    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        query.andWhere(`personnel.${key} = :${key}`, { [key]: value });
      }
    });

    query.select(['personnel.id', 'personnel.full_name', 'personnel.gender', 'personnel.create_date'])
         .skip((page - 1) * limit)
         .take(limit)
         .orderBy('personnel.create_date', 'DESC');

    const [data, total] = await query.getManyAndCount();

    return {
      data,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }


  async update(
    id: number,
    updatePersonnelWithDetailsDto: CreatePersonnelWithDetailsDto,
  ): Promise<{ success: boolean; message: string; data?: Personnel }> {
    try {
      return await this.personnelRepository.manager.transaction(
        async (entityManager: EntityManager) => {
          const personnel = await entityManager.findOne(Personnel, { where: { id } });
          if (!personnel) {
            throw new NotFoundException(`Personnel with id ${id} not found`);
          }
  
          const updatedPersonnel = Object.assign(personnel, updatePersonnelWithDetailsDto);
          await entityManager.save(Personnel, updatedPersonnel);
  
          const { families = [], educations = [], languages = [], experiences = [] } = updatePersonnelWithDetailsDto;
  
          await Promise.all([
            entityManager.delete(Family, { personnel: personnel }),
            entityManager.delete(Education, { personnel: personnel }),
            entityManager.delete(Language, { personnel: personnel }),
            entityManager.delete(Experience, { personnel: personnel }),
          ]);
  
          await Promise.all([
            families.map(family => {
              const familyEntity = this.familyRepository.create({ ...family, personnel });
              return entityManager.save(Family, familyEntity);
            }),
            educations.map(education => {
              const educationEntity = this.educationRepository.create({ ...education, personnel });
              return entityManager.save(Education, educationEntity);
            }),
            languages.map(language => {
              const languageEntity = this.languageRepository.create({ ...language, personnel });
              return entityManager.save(Language, languageEntity);
            }),
            experiences.map(experience => {
              const experienceEntity = this.experienceRepository.create({ ...experience, personnel });
              return entityManager.save(Experience, experienceEntity);
            }),
          ]);
  
          return {
            success: true,
            message: 'Personnel and related details updated successfully',
            data: updatedPersonnel,
          };
        },
      );
    } catch (error) {
      this.logger.error('Error updating personnel with details', error.stack);
      return {
        success: false,
        message: 'Failed to update personnel with details',
      };
    }
  }
  
  async delete(id: number): Promise<{ success: boolean; message: string }> {
    try {
      const personnel = await this.personnelRepository.findOne({ where: { id } });
      if (!personnel) {
        throw new NotFoundException(`Personnel with id ${id} not found`);
      }
  
      await this.personnelRepository.manager.transaction(async (entityManager: EntityManager) => {
        await entityManager.delete(Family, { personnel: personnel });
        await entityManager.delete(Education, { personnel: personnel });
        await entityManager.delete(Language, { personnel: personnel });
        await entityManager.delete(Experience, { personnel: personnel });
  
        await entityManager.remove(Personnel, personnel);
      });
  
      return {
        success: true,
        message: 'Personnel and related details deleted successfully',
      };
    } catch (error) {
      this.logger.error('Error deleting personnel', error.stack);
      return {
        success: false,
        message: 'Failed to delete personnel',
      };
    }
  }
  
}
