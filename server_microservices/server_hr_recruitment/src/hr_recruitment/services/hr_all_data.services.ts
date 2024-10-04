// src/hr-interview-candidates/hr-interview-candidates.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager, In } from 'typeorm';
import { HrInterviewCandidate } from '../entity/hr_interview_candidates.entity';
import { Personnel } from '../entity/personnel.entity';
import { Family } from '../entity/family.entity';
import { Education } from '../entity/education.entity';
import { Language } from '../entity/language.entity';
import { Experience } from '../entity/experience.entity';
import { InterviewResult } from '../entity/interview_results.entity';
import { OfficeSkills } from '../entity/office_skills.entity';
import { Projects } from '../entity/project.entity';
import { CreatePersonnelWithDetailsDto } from '../dto/create_hr_internview_candidate.dto';
import jwt from 'jsonwebtoken';
import { HrErp } from '../entity/hr.entity';
@Injectable()
export class HrAllDataService {
  constructor(
    @InjectRepository(HrInterviewCandidate)
    private readonly candidateRepository: Repository<HrInterviewCandidate>,
    @InjectRepository(HrErp)
    private readonly hrErpRepository: Repository<HrErp>,

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
    @InjectRepository(OfficeSkills)
    private readonly officeSkillsRepository: Repository<OfficeSkills>,
    @InjectRepository(Projects)
    private readonly projectRepository: Repository<Projects>,
  ) { }


  async findAllPageLimit(
    filter: Record<string, any> = {},
    page: number = 1,
    limit: number = 10000,
    startDate?: Date,
    endDate?: Date,
  ): Promise<{ data: Personnel[]; total: number; totalPages: number }> {
    const query = this.personnelRepository.createQueryBuilder('personnel');

    query.leftJoinAndSelect('personnel.interviews', 'interview');
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
        'personnel.synchronize',
        'personnel.fac',
        'personnel.department',
        'personnel.team',
        'personnel.type_personnel',
        'personnel.jop_position',
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

    if (startDate) {
      query.andWhere('personnel.create_date >= :startDate', { startDate });
    }

    if (endDate) {
      const endOfDay = new Date(endDate);
      endOfDay.setHours(23, 59, 59, 999);
      query.andWhere('personnel.create_date <= :endOfDay', { endOfDay });
    }

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
      'personnel.synchronize',
      'personnel.fac',
      'personnel.department',
      'personnel.team',
      'personnel.type_personnel',
      'personnel.jop_position',
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
  async synchronizeHr(ids: number[]): Promise<void> {
    const personnels = await this.personnelRepository.createQueryBuilder('p')
      .leftJoinAndSelect('p.families', 'fam')
      .leftJoinAndSelect('p.educations', 'edu')
      .leftJoinAndSelect('p.languages', 'lang')
      .leftJoinAndSelect('p.experiences', 'exper')
      .leftJoinAndSelect('p.interviews', 'inter')
      .leftJoinAndSelect('p.projects', 'pro')
      .leftJoinAndSelect('p.office_skills', 'skill')
      .where('p.id IN (:...ids)', { ids })
      .andWhere('p.synchronize = false')
      .select([
        'p.id AS personnel_id',
        'p.full_name',
        'p.gender',
        'p.interview_date',
        'p.start_date',
        'p.birth_date',
        'p.id_number',
        'p.id_issue_date',
        'p.ethnicity',
        'p.id_issue_place',
        'p.insurance_number',
        'p.tax_number',
        'p.phone_number',
        'p.email',
        'p.alternate_phone_number',
        'p.alternate_name',
        'p.alternate_relationship',
        'p.birth_address',
        'p.birth_province',
        'p.birth_district',
        'p.birth_ward',
        'p.current_address',
        'p.current_province',
        'p.current_district',
        'p.current_ward',
        'p.type_personnel',
        'p.introducer_department',
        'p.introducer_introducer_name',
        'p.introducer_phone_number',
        'p.candidate_type',
        'p.supplier_details',
        'p.create_date',
        'p.write_date',
        // JSON cho các trường family
        'COALESCE(json_agg(DISTINCT jsonb_build_object(' +
        "'id', fam.id, " +
        "'full_name', fam.full_name, " +
        "'relationship', fam.relationship, " +
        "'birth_year', fam.birth_year, " +
        "'workplace', fam.workplace, " +
        "'job', fam.job, " +
        "'phone_number', fam.phone_number, " +
        "'living_together', fam.living_together " +
        ')) FILTER (WHERE fam.id IS NOT NULL), \'[]\') AS family_members',

        // JSON cho các trường education
        'COALESCE(json_agg(DISTINCT jsonb_build_object(' +
        "'id', edu.id, " +
        "'school', edu.school, " +
        "'major', edu.major, " +
        "'years', edu.years, " +
        "'start_year', edu.start_year, " +
        "'graduation_year', edu.graduation_year, " +
        "'grade', edu.grade " +
        ')) FILTER (WHERE edu.id IS NOT NULL), \'[]\') AS p_education_records',

        // JSON cho các trường language
        'COALESCE(json_agg(DISTINCT jsonb_build_object(' +
        "'id', lang.id, " +
        "'language', lang.language, " +
        "'certificate_type', lang.certificate_type, " +
        "'score', lang.score, " +
        "'level', lang.level, " +
        "'start_date', lang.start_date, " +
        "'end_date', lang.end_date, " +
        "'has_bonus', lang.has_bonus " +
        ')) FILTER (WHERE lang.id IS NOT NULL), \'[]\') AS p_lang_records',

        // JSON cho các trường experiences
        'COALESCE(json_agg(DISTINCT jsonb_build_object(' +
        "'id', exper.id, " +
        "'company_name', exper.company_name, " +
        "'position', exper.position, " +
        "'employee_scale', exper.employee_scale, " +
        "'tasks', exper.tasks, " +
        "'salary', exper.salary, " +
        "'start_date', exper.start_date, " +
        "'end_date', exper.end_date, " +
        "'description', exper.description " +
        ')) FILTER (WHERE exper.id IS NOT NULL), \'[]\') AS p_exper_records',

        // JSON cho các trường interviews
        'COALESCE(json_agg(DISTINCT jsonb_build_object(' +
        "'id', inter.id, " +
        "'interview_result', inter.interview_result, " +
        "'recruitment_department', inter.recruitment_department, " +
        "'position', inter.position, " +
        "'interviewer_name', inter.interviewer_name, " +
        "'appearance_criteria', inter.appearance_criteria, " +
        "'height', inter.height, " +
        "'criminal_record', inter.criminal_record, " +
        "'education_level', inter.education_level, " +
        "'reading_writing', inter.reading_writing, " +
        "'calculation_ability', inter.calculation_ability " +
        ')) FILTER (WHERE inter.id IS NOT NULL), \'[]\') AS p_inter_records',

        // JSON cho các trường projects
        'COALESCE(json_agg(DISTINCT jsonb_build_object(' +
        "'id', pro.id, " +
        "'project_name', pro.project_name, " +
        "'task', pro.task, " +
        "'duration', pro.duration, " +
        "'summary', pro.summary, " +
        "'start_date', pro.start_date, " +
        "'end_date', pro.end_date " +
        ')) FILTER (WHERE pro.id IS NOT NULL), \'[]\') AS p_project_records',

        // JSON cho các trường office skills
        'COALESCE(json_agg(DISTINCT jsonb_build_object(' +
        "'id', skill.id, " +
        "'skill_name', skill.skill_name, " +
        "'skill_level', skill.skill_level " +
        ')) FILTER (WHERE skill.id IS NOT NULL), \'[]\') AS p_skill_records'
      ])
      .groupBy('p.id')
      .orderBy('p.id')
      .getRawMany();

    if (!personnels || personnels.length === 0) {
      console.warn("No personnel found for the given IDs:", ids);
      return;
    }

    // Tạo danh sách bản ghi đồng thời để giảm số lần `save`
    const hrErpRecords = personnels.map((personnel) => ({
      full_name: personnel.p_full_name,
      gender: personnel.p_gender,
      birth_date: personnel.p_birth_date,
      phone_number: personnel.p_phone_number,
      email: personnel.p_email,
      families_json: personnel.family_members,
      educations_json: personnel.p_education_records,
      languages_json: personnel.p_lang_records,
      experiences_json: personnel.p_exper_records,
      interviews_json: personnel.p_inter_records,
      projects_json: personnel.p_project_records,
      office_skills_json: personnel.p_skill_records,
      interview_date: personnel.p_interview_date,
      start_date: personnel.p_start_date,
      id_number: personnel.p_id_number,
      id_issue_date: personnel.p_id_issue_date,
      ethnicity: personnel.p_ethnicity,
      id_issue_place: personnel.p_id_issue_place,
      insurance_number: personnel.p_insurance_number,
      tax_number: personnel.p_tax_number,
      alternate_phone_number: personnel.p_alternate_phone_number,
      alternate_name: personnel.p_alternate_name,
      alternate_relationship: personnel.p_alternate_relationship,
      birth_address: personnel.p_birth_address,
      birth_province: personnel.p_birth_province,
      birth_district: personnel.p_birth_district,
      birth_ward: personnel.p_birth_ward,
      current_address: personnel.p_current_address,
      current_province: personnel.p_current_province,
      current_district: personnel.p_current_district,
      current_ward: personnel.p_current_ward,
      type_personnel: personnel.p_type_personnel,
      introducer_department: personnel.p_introducer_department,
      introducer_introducer_name: personnel.p_introducer_introducer_name,
      introducer_phone_number: personnel.p_introducer_phone_number,
      candidate_type: personnel.p_candidate_type,
      supplier_details: personnel.p_supplier_details,
    }));

    await this.hrErpRepository.save(hrErpRecords);
    await this.personnelRepository.update(
      { id: In(ids) },
      { synchronize: true }
    );
  }




  async findByPhoneNumber(phone_number: string): Promise<any> {
    const candidate = await this.personnelRepository.findOne({
      where: { phone_number },
      relations: ['personnel'], 
    });

    if (!candidate) {
      return {
        success: false,
        message: 'Candidate not found with this phone number',
        redirectUrl: '/your-desired-url',
      };
    }


    const combinedInfo = `${candidate.id}:${candidate.phone_number}:${candidate.full_name}:${candidate.email}`;
    const encodedRouter = Buffer.from(combinedInfo).toString('base64');

    return {
      success: true,
      data: {
        idCadidate: candidate.id,
        phoneNumber: candidate.phone_number,
        name: candidate.full_name,
        email: candidate.email,
        router: encodedRouter,
        gender: candidate.gender,
      },
    };
  }










}
