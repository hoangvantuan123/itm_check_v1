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
  ) { }

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
    startDate?: Date,
    endDate?: Date,
  ): Promise<{ data: Personnel[]; total: number; totalPages: number }> {
    const query = this.personnelRepository.createQueryBuilder('personnel');

    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        query.andWhere(`personnel.${key} = :${key}`, { [key]: value });
      }
    });

    if (startDate) {
      query.andWhere('personnel.create_date >= :startDate', { startDate });
    }

    if (endDate) {
      const endOfDay = new Date(endDate);
      endOfDay.setHours(23, 59, 59, 999); 
      query.andWhere('personnel.create_date <= :endOfDay', { endOfDay });
    }

    query.select(['personnel.id', 'personnel.full_name', 'personnel.gender', 'personnel.create_date', 'personnel.interview_date', 'personnel.birth_date', 'personnel.id_number', 'personnel.phone_number', 'personnel.email', 'personnel.tax_number'])
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

  async findAllPageLimitFilter(
    filter: Record<string, any> = {},
    page: number = 1,
    limit: number = 50,
    startDate?: Date,
    endDate?: Date,
  ): Promise<{ data: Personnel[]; total: number; totalPages: number }> {
    const query = this.personnelRepository.createQueryBuilder('personnel');

    // Lọc dữ liệu theo các mảng với LIKE để tìm kiếm gần đúng
    if (filter.nameTags && filter.nameTags.length > 0) {
      const nameConditions = filter.nameTags.map((name, index) => `personnel.full_name ILIKE :name${index}`);
      filter.nameTags.forEach((name, index) => {
        query.setParameter(`name${index}`, `%${name}%`);
      });
      query.andWhere(`(${nameConditions.join(' OR ')})`);
    }

    if (filter.phoneNumberTags && filter.phoneNumberTags.length > 0) {
      const phoneConditions = filter.phoneNumberTags.map((phone, index) => `personnel.phone_number ILIKE :phone${index}`);
      filter.phoneNumberTags.forEach((phone, index) => {
        query.setParameter(`phone${index}`, `%${phone}%`);
      });
      query.andWhere(`(${phoneConditions.join(' OR ')})`);
    }

    if (filter.citizenshipIdTags && filter.citizenshipIdTags.length > 0) {
      const idConditions = filter.citizenshipIdTags.map((id, index) => `personnel.id_number ILIKE :id${index}`);
      filter.citizenshipIdTags.forEach((id, index) => {
        query.setParameter(`id${index}`, `%${id}%`);
      });
      query.andWhere(`(${idConditions.join(' OR ')})`);
    }

    if (startDate) {
      query.andWhere('personnel.create_date >= :startDate', { startDate });
    }

    if (endDate) {
      const endOfDay = new Date(endDate);
      endOfDay.setHours(23, 59, 59, 999);
      query.andWhere('personnel.create_date <= :endOfDay', { endOfDay });
    }

    // Chỉ chọn các cột cần thiết
    query.select([
      'personnel.id',
      'personnel.full_name',
      'personnel.gender',
      'personnel.create_date',
      'personnel.interview_date',
      'personnel.birth_date',
      'personnel.id_number',
      'personnel.phone_number',
      'personnel.email',
      'personnel.tax_number'
    ])
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

  async delete(ids: number[]): Promise<{ success: boolean; message: string }> {
    
    try {
      const personnels = await this.personnelRepository.findByIds(ids);

      if (personnels.length === 0) {
        throw new NotFoundException(`Personnel with ids ${ids.join(', ')} not found`);
      }

      await this.personnelRepository.manager.transaction(async (entityManager: EntityManager) => {
        for (const personnel of personnels) {
          await entityManager.delete(Family, { personnel });
          await entityManager.delete(Education, { personnel });
          await entityManager.delete(Language, { personnel });
          await entityManager.delete(Experience, { personnel });
          await entityManager.remove(Personnel, personnel);
        }
      });

      return {
        success: true,
        message: 'Personnels and related details deleted successfully',
      };
    } catch (error) {
      this.logger.error('Error deleting personnels', error.stack);
      return {
        success: false,
        message: 'Failed to delete personnels',
      };
    }
  }

  async getPersonnelById(id: number): Promise<any> {
    const personnel = await this.personnelRepository.findOne({
      where: { id },
      relations: ['families', 'educations', 'languages', 'experiences'],
    });
  
    if (!personnel) {
      return {
        status: false, 
        data: [], // Mảng dữ liệu rỗng
      };
    }
  
    return {
      status: true,
      data: {
        full_name: personnel.full_name,
        gender: personnel.gender,
        interview_date: personnel.interview_date,
        start_date: personnel.start_date,
        birth_date: personnel.birth_date,
        id_number: personnel.id_number,
        id_issue_date: personnel.id_issue_date,
        ethnicity: personnel.ethnicity,
        id_issue_place: personnel.id_issue_place,
        insurance_number: personnel.insurance_number,
        tax_number: personnel.tax_number,
        phone_number: personnel.phone_number,
        email: personnel.email,
        alternate_phone_number: personnel.alternate_phone_number,
        alternate_name: personnel.alternate_name,
        alternate_relationship: personnel.alternate_relationship,
        birth_address: personnel.birth_address,
        birth_province: personnel.birth_province,
        birth_district: personnel.birth_district,
        birth_ward: personnel.birth_ward,
        current_address: personnel.current_address,
        current_province: personnel.current_province,
        current_district: personnel.current_district,
        current_ward: personnel.current_ward,
        families: personnel.families?.map(family => ({
          relationship: family.relationship,
          full_name: family.full_name,
          birth_year: family.birth_year,
          workplace: family.workplace,
          job: family.job,
          phone_number: family.phone_number,
          living_together: family.living_together,
        })) ?? [], // Trả về mảng rỗng nếu không có `families`
        educations: personnel.educations?.map(education => ({
          school: education.school,
          major: education.major,
          years: education.years,
          start_year: education.start_year,
          graduation_year: education.graduation_year,
          grade: education.grade,
        })) ?? [], // Trả về mảng rỗng nếu không có `educations`
        languages: personnel.languages?.map(language => ({
          language: language.language,
          certificate_type: language.certificate_type,
          score: language.score,
          level: language.level,
          start_date: language.start_date,
          end_date: language.end_date,
          has_bonus: language.has_bonus,
        })) ?? [], // Trả về mảng rỗng nếu không có `languages`
        experiences: personnel.experiences?.map(experience => ({
          company_name: experience.company_name,
          position: experience.position,
          start_date: experience.start_date,
          end_date: experience.end_date,
          employee_scale: experience.employee_scale,
          tasks: experience.tasks,
          salary: experience.salary,
          description: experience.description,
        })) ?? [], // Trả về mảng rỗng nếu không có `experiences`
      },
    };
  }
  
}
