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
import { OfficeSkills } from '../entity/office_skills.entity';
import { Projects } from '../entity/project.entity';
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
    query.andWhere('personnel.type_personnel = :type_personnel', { type_personnel: true });

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
        'interview.employee_code',
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
    query.andWhere('personnel.type_personnel = :type_personnel', { type_personnel: true });

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

      return await this.personnelRepository.manager.transaction(async (entityManager: EntityManager) => {
        const {
          families = [],
          educations = [],
          languages = [],
          experiences = [],
          projects = [],
          office_skills = [],
          ...personnelData
        } = updatePersonnelWithDetailsDto;

        // Update Personnel entity
        await entityManager.update(Personnel, { id }, personnelData);

        // Update Families
        await Promise.all(
          families.map(async (family) => {
            if (family.id) {
              await entityManager.update(Family, { id: family.id }, family);
            } else {
              const newFamily = entityManager.create(Family, { ...family, personnel: existingPersonnel });
              await entityManager.save(Family, newFamily);
            }
          }),
        );

        // Update Educations
        await Promise.all(
          educations.map(async (education) => {
            if (education.id) {
              await entityManager.update(Education, { id: education.id }, education);
            } else {
              const newEducation = entityManager.create(Education, { ...education, personnel: existingPersonnel });
              await entityManager.save(Education, newEducation);
            }
          }),
        );

        // Update Languages
        await Promise.all(
          languages.map(async (language) => {
            if (language.id) {
              await entityManager.update(Language, { id: language.id }, language);
            } else {
              const newLanguage = entityManager.create(Language, { ...language, personnel: existingPersonnel });
              await entityManager.save(Language, newLanguage);
            }
          }),
        );

        // Update Experiences
        await Promise.all(
          experiences.map(async (experience) => {
            if (experience.id) {
              await entityManager.update(Experience, { id: experience.id }, experience);
            } else {
              const newExperience = entityManager.create(Experience, { ...experience, personnel: existingPersonnel });
              await entityManager.save(Experience, newExperience);
            }
          }),
        );

        // Update OfficeSkills
        await Promise.all(
          office_skills.map(async (office_skill) => {
            if (office_skill.id) {
              await entityManager.update(OfficeSkills, { id: office_skill.id }, office_skill);
            } else {
              const newOfficeSkills = entityManager.create(OfficeSkills, { ...office_skill, personnel: existingPersonnel });
              await entityManager.save(OfficeSkills, newOfficeSkills);
            }
          }),
        );

        // Update Projects
        await Promise.all(
          projects.map(async (project) => {
            if (project.id) {
              await entityManager.update(Projects, { id: project.id }, project);
            } else {
              const newProjects = entityManager.create(Projects, { ...project, personnel: existingPersonnel });
              await entityManager.save(Projects, newProjects);
            }
          }),
        );

        const updatedPersonnel = await entityManager.findOne(Personnel, {
          where: { id },
          relations: ['families', 'educations', 'languages', 'experiences', 'projects', 'office_skills'],
        });

        return {
          success: true,
          message: 'Personnel and related details updated successfully',
          data: updatedPersonnel,
        };
      });
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
        try {
          await entityManager.delete(Family, { personnel: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting Family for personnel IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete Family: ${error.message}`);
        }

        try {
          await entityManager.delete(Education, { personnel: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting Education for personnel IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete Education: ${error.message}`);
        }

        try {
          await entityManager.delete(Language, { personnel: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting Language for personnel IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete Language: ${error.message}`);
        }

        try {
          await entityManager.delete(Experience, { personnel: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting Experience for personnel IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete Experience: ${error.message}`);
        }

        try {
          await entityManager.delete(Projects, { personnel: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting Projects for personnel IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete Projects: ${error.message}`);
        }

        try {
          await entityManager.delete(OfficeSkills, { personnel: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting OfficeSkills for personnel IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete OfficeSkills: ${error.message}`);
        }

        try {
          await entityManager.delete(InterviewResult, { personnel: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting InterviewResult for personnel IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete InterviewResult: ${error.message}`);
        }

        try {
          await entityManager.delete(Personnel, { id: In(ids) });
        } catch (error) {
          this.logger.error(`Error deleting Personnel for IDs ${ids.join(', ')}: ${error.message}`, error.stack);
          throw new Error(`Failed to delete Personnel: ${error.message}`);
        }
      });

      return {
        success: true,
        message: 'Personnels and related details deleted successfully',
      };
    } catch (error) {
      this.logger.error(`Error deleting personnels: ${error.message}`, error.stack);
      return {
        success: false,
        message: `Failed to delete personnels: ${error.message}`,
      };
    }
  }



  async getPersonnelById(id: number): Promise<any> {
    // Lấy thông tin nhân sự dựa vào id
    const personnel = await this.personnelRepository.findOne({
      where: { id }
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
        // Thông tin cá nhân
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
        type_personnel: personnel.type_personnel,
        introducer_department: personnel.introducer_department,
        introducer_introducer_name: personnel.introducer_introducer_name,
        introducer_phone_number: personnel.introducer_phone_number,
        candidate_type: personnel.candidate_type,
        supplier_details: personnel.supplier_details,
        synchronize: personnel.synchronize,
        fac: personnel.fac,
        department: personnel.department,
        team: personnel.team,
        jop_position: personnel.jop_position,
        type_of_degree: personnel.type_of_degree,
        type_classify: personnel.type_classify,
        employee_code: personnel.employee_code,
        contract_term: personnel.contract_term,
        line_model: personnel.line_model,
        part: personnel.part,

        // Thông tin vị trí và hợp đồng
        erp_department_registration: personnel.erp_department_registration,
        production: personnel.production,
        section: personnel.section,
        job_field: personnel.job_field,
        position: personnel.position,
        entering_day: personnel.entering_day,
        leaving_day: personnel.leaving_day,
        probation_days: personnel.probation_days,
        official_date_first: personnel.official_date_first,
        official_date_second: personnel.official_date_second,
        age: personnel.age,
        month_count: personnel.month_count,
        number_of_children: personnel.number_of_children,

        // Thông tin con cái
        children: [
          {
            children_name: personnel.children_name_1,
            children_birth_date: personnel.children_birth_date_1,
            children_gender: personnel.children_gender_1,
          },
          {
            children_name: personnel.children_name_2,
            children_birth_date: personnel.children_birth_date_2,
            children_gender: personnel.children_gender_2,
          },
          {
            children_name: personnel.children_name_3,
            children_birth_date: personnel.children_birth_date_3,
            children_gender: personnel.children_gender_3,
          },
        ],

        families: [
          {
            relationship: "Bố",
            full_name: personnel.father_name,
            phone_number: personnel.father_phone_number,
          },
          {
            relationship: "Mẹ",
            full_name: personnel.mother_name,
            phone_number: personnel.mother_phone_number,
          },
          {
            relationship: "Vợ",
            full_name: personnel.partner_name,
            phone_number: personnel.partner_phone_number,
          },
        ],
        experiences: [
          {
            tasks: personnel.work_department_1,
            position: personnel.work_responsibility_1,
            company_name: personnel.company_name_1,
            start_date: personnel.entrance_day_1,
            end_date: personnel.leaving_day_1,
            salary: personnel.salary_1
          },
          {
            tasks: personnel.work_department_2,
            position: personnel.work_responsibility_2,
            company_name: personnel.company_name_2,
            start_date: personnel.entrance_day_2,
            end_date: personnel.leaving_day_2,
            salary: personnel.salary_2
          }
        ],
        educations:
          [
            {
              highest_education_level: personnel.highest_education_level,
              school: personnel.school_name,
              major: personnel.major,
              school_year: personnel.school_year,
              year_ended: personnel.year_ended,
              year_of_graduation: personnel.year_of_graduation,
              classification: personnel.classification,
            }
          ],
        languages:
          [
            {
              language: personnel.language_1,
              certificate_type: personnel.certificate_type_1,
              score: personnel.score_1,
              level: personnel.level_1,
            },
            {
              language: personnel.language_2,
              certificate_type: personnel.certificate_type_2,
              score: personnel.score_2,
              level: personnel.level_2,
            },
            {
              language: personnel.language_3,
              certificate_type: personnel.certificate_type_3,
              score: personnel.score_3,
              level: personnel.level_3,
            },

          ],
        distance_from_household_to_company: personnel.distance_from_household_to_company,
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

      return {
        success: true,
        message: 'Cập nhật thành công',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Có lỗi xảy ra trong quá trình cập nhật',
      };
    }
  }


  async findByPhoneNumber(phone_number: string): Promise<any> {
    const personnel = await this.personnelRepository.findOne({
      where: { phone_number },
      relations: ['families', 'educations', 'languages', 'experiences', 'interviews'],
    });

    if (!personnel) {
      return {
        success: false,
        message: 'Personnel not found with this phone number',
        redirectUrl: '/your-desired-url',
      };
    }
    const personnelStatus = personnel.status_form;
    if (personnelStatus) {
      return {
        success: false,
        message: 'Candidate found but no personnel associated with this candidate.',
        redirectUrl: '/your-desired-url',
      };
    }
    const combinedInfo = `${personnel.id}:${personnel.phone_number}:${personnel.full_name}:${personnel.email}`;
    const encodedRouter = Buffer.from(combinedInfo).toString('base64');

    return {
      success: true,
      data: {
        type_personnel: personnel.type_personnel,
        phoneNumber: personnel.phone_number,
        name: personnel.full_name,
        email: personnel.email,
        router: encodedRouter,
      },
    };
  }



}
