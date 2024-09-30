import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager, In } from 'typeorm';
import { Personnel } from '../entity/personnel.entity';
import { Family } from '../entity/family.entity';
import { Education } from '../entity/education.entity';
import { Language } from '../entity/language.entity';
import { Experience } from '../entity/experience.entity';
import { InterviewResult } from '../entity/interview_results.entity';
import { UpdateInterviewResultDto } from '../dto/update_interview_result.dto';

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
    @InjectRepository(InterviewResult)
    private readonly interviewRepository: Repository<InterviewResult>,
  ) { }

  async create(
    createPersonnelWithDetailsDto: CreatePersonnelWithDetailsDto,
  ): Promise<{ success: boolean; message: string; data?: Personnel }> {
    try {
      return await this.personnelRepository.manager.transaction(
        async (entityManager: EntityManager) => {
          const {
            families = [],
            educations = [],
            languages = [],
            experiences = [],
            ...personnelData
          } = createPersonnelWithDetailsDto;

          const personnel = this.personnelRepository.create(personnelData);
          const savedPersonnel = await entityManager.save(Personnel, personnel);

          const interviewEntities = [{
            interview_result: false,
            recruitment_department: 'Default Department',
            position: 'Default Position',
            interviewer_name: 'Default Interviewer',
            appearance_criteria: 'Default Appearance',
            height: 'N/A',
            criminal_record: 'No',
            education_level: 'High School',
            reading_writing: 'Yes',
            calculation_ability: 'Yes',
            personnel: savedPersonnel,
          }];

          const familyEntities = families.map((family) => ({
            ...family,
            personnel: savedPersonnel,
          }));
          const educationEntities = educations.map((education) => ({
            ...education,
            personnel: savedPersonnel,
          }));
          const languageEntities = languages.map((language) => ({
            ...language,
            personnel: savedPersonnel,
          }));
          const experienceEntities = experiences.map((experience) => ({
            ...experience,
            personnel: savedPersonnel,
          }));

          // Lưu các đối tượng liên quan
          await Promise.all([
            familyEntities.length > 0
              ? entityManager.save(Family, familyEntities)
              : Promise.resolve(),
            educationEntities.length > 0
              ? entityManager.save(Education, educationEntities)
              : Promise.resolve(),
            languageEntities.length > 0
              ? entityManager.save(Language, languageEntities)
              : Promise.resolve(),
            experienceEntities.length > 0
              ? entityManager.save(Experience, experienceEntities)
              : Promise.resolve(),
            entityManager.save(InterviewResult, interviewEntities),
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
    limit: number = 10000,
    startDate?: Date,
    endDate?: Date,
  ): Promise<{ data: Personnel[]; total: number; totalPages: number }> {
    const query = this.personnelRepository.createQueryBuilder('personnel');

    query.leftJoinAndSelect('personnel.interviews', 'interview');
    query.andWhere('personnel.type = :type', { type: true });

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

    query
      .select([
        'personnel.id',
        'personnel.full_name',
        'personnel.gender',
        'personnel.create_date',
        'personnel.interview_date',
        'personnel.birth_date',
        'personnel.id_number',
        'personnel.phone_number',
        'personnel.email',
        'personnel.tax_number',
        'interview.id',
        'interview.interview_result',
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


  async findAllPageLimitFilter(
    filter: Record<string, any> = {},
    page: number = 1,
    limit: number = 1000,
    startDate?: Date,
    endDate?: Date,
  ): Promise<{ data: Personnel[]; total: number; totalPages: number }> {
    const query = this.personnelRepository.createQueryBuilder('personnel');

    if (filter.nameTags && filter.nameTags.length > 0) {
      const nameConditions = filter.nameTags.map((name: any, index: any) => `personnel.full_name ILIKE :name${index}`);
      filter.nameTags.forEach((name: any, index: any) => {
        query.setParameter(`name${index}`, `%${name}%`);
      });
      query.andWhere(`(${nameConditions.join(' OR ')})`);
    }

    if (filter.phoneNumberTags && filter.phoneNumberTags.length > 0) {
      const phoneConditions = filter.phoneNumberTags.map((phone: any, index: any) => `personnel.phone_number ILIKE :phone${index}`);
      filter.phoneNumberTags.forEach((phone: any, index: any) => {
        query.setParameter(`phone${index}`, `%${phone}%`);
      });
      query.andWhere(`(${phoneConditions.join(' OR ')})`);
    }

    if (filter.citizenshipIdTags && filter.citizenshipIdTags.length > 0) {
      const idConditions = filter.citizenshipIdTags.map((id: any, index: any) => `personnel.id_number ILIKE :id${index}`);
      filter.citizenshipIdTags.forEach((id: any, index: any) => {
        query.setParameter(`id${index}`, `%${id}%`);
      });
      query.andWhere(`(${idConditions.join(' OR ')})`);
    }


    query.leftJoinAndSelect('personnel.interviews', 'interview');
    query.andWhere('personnel.type = :type', { type: true });

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
      'personnel.tax_number',
      'interview.id',
      'interview.interview_result',
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
      const existingPersonnel = await this.personnelRepository.findOne({ where: { id } });
      if (!existingPersonnel) {
        return { success: false, message: 'Personnel not found' };
      }

      return await this.personnelRepository.manager.transaction(
        async (entityManager: EntityManager) => {
          const { families = [], educations = [], languages = [], experiences = [], ...personnelData } = updatePersonnelWithDetailsDto;

          await entityManager.update(Personnel, { id }, personnelData);

          for (const family of families) {
            if (family.id) {
              await entityManager.update(Family, { id: family.id }, family);
            } else {
              const newFamily = entityManager.create(Family, { ...family, personnel: existingPersonnel });
              await entityManager.save(Family, newFamily);
            }
          }

          // 2. Update Educations
          for (const education of educations) {
            if (education.id) {
              await entityManager.update(Education, { id: education.id }, education);
            } else {
              const newEducation = entityManager.create(Education, { ...education, personnel: existingPersonnel });
              await entityManager.save(Education, newEducation);
            }
          }

          // 3. Update Languages
          for (const language of languages) {
            if (language.id) {
              await entityManager.update(Language, { id: language.id }, language);
            } else {
              const newLanguage = entityManager.create(Language, { ...language, personnel: existingPersonnel });
              await entityManager.save(Language, newLanguage);
            }
          }

          // 4. Update Experiences
          for (const experience of experiences) {
            if (experience.id) {
              await entityManager.update(Experience, { id: experience.id }, experience);
            } else {
              const newExperience = entityManager.create(Experience, { ...experience, personnel: existingPersonnel });
              await entityManager.save(Experience, newExperience);
            }
          }

          const updatedPersonnel = await entityManager.findOne(Personnel, {
            where: { id },
            relations: ['families', 'educations', 'languages', 'experiences'],
          });

          return {
            success: true,
            message: 'Personnel and related details updated successfully',
            data: updatedPersonnel,
          };
        },
      );
    } catch (error) {
      this.logger.error(`Error updating personnel with id ${id}`, error.stack);
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
        await entityManager.delete(Family, { personnel: In(ids) });
        await entityManager.delete(Education, { personnel: In(ids) });
        await entityManager.delete(Language, { personnel: In(ids) });
        await entityManager.delete(Experience, { personnel: In(ids) });

        await entityManager.delete(Personnel, { id: In(ids) });
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
      relations: ['families', 'educations', 'languages', 'experiences', 'interviews'],
    });

    if (!personnel) {
      return {
        status: false,
        data: [],
      };
    }

    return {
      status: true,
      data: {
        key: personnel.id,
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
          key: family.id,
          relationship: family.relationship,
          full_name: family.full_name,
          birth_year: family.birth_year,
          workplace: family.workplace,
          job: family.job,
          phone_number: family.phone_number,
          living_together: family.living_together,
        })) ?? [], // Trả về mảng rỗng nếu không có `families`
        educations: personnel.educations?.map(education => ({
          key: education.id,
          school: education.school,
          major: education.major,
          years: education.years,
          start_year: education.start_year,
          graduation_year: education.graduation_year,
          grade: education.grade,
        })) ?? [], // Trả về mảng rỗng nếu không có `educations`
        languages: personnel.languages?.map(language => ({
          key: language.id,
          language: language.language,
          certificate_type: language.certificate_type,
          score: language.score,
          level: language.level,
          start_date: language.start_date,
          end_date: language.end_date,
          has_bonus: language.has_bonus,
        })) ?? [], // Trả về mảng rỗng nếu không có `languages`
        experiences: personnel.experiences?.map(experience => ({
          key: experience.id,
          company_name: experience.company_name,
          position: experience.position,
          start_date: experience.start_date,
          end_date: experience.end_date,
          employee_scale: experience.employee_scale,
          tasks: experience.tasks,
          salary: experience.salary,
          description: experience.description,
        })) ?? [],
        interviews: personnel.interviews?.map(interview => ({
          key: interview.id,
          interview_result: interview.interview_result,
          recruitment_department: interview.recruitment_department,
          position: interview.position,
          interviewer_name: interview.interviewer_name,
          appearance_criteria: interview.appearance_criteria,
          height: interview.height,
          criminal_record: interview.criminal_record,
          education_level: interview.education_level,
          reading_writing: interview.reading_writing,
          calculation_ability: interview.calculation_ability,
        })) ?? [],
      },
    };
  }



  async updateUserInterviewId(
    id: number,
    updateDto: Partial<InterviewResult>,
  ): Promise<InterviewResult> {
    await this.interviewRepository.update(id, updateDto);
    return this.interviewRepository.findOneBy({ id });
  }


  async updateInterviewResults(
    updateInterviewResultDto: Partial<UpdateInterviewResultDto>,
  ): Promise<{ success: boolean; message: string }> {
    const { personnelIds, interviewResult } = updateInterviewResultDto;

    try {
      // Thực hiện giao dịch
      await this.interviewRepository.manager.transaction(async (entityManager) => {
        const updatePromises = personnelIds.map(personnelId =>
          entityManager
            .createQueryBuilder()
            .update(InterviewResult)
            .set({ interview_result: interviewResult })
            .where('personnelId = :personnelId', { personnelId })
            .execute()
        );
        await Promise.all(updatePromises);
      });

      // Trả về phản hồi thành công
      return {
        success: true,
        message: 'Cập nhật thành công',
      };
    } catch (error) {
      console.error('Error updating interview results:', error);
      return {
        success: false,
        message: error.message || 'Có lỗi xảy ra trong quá trình cập nhật',
      };
    }
  }


}
