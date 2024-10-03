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
            // Tạo JSON array cho các bản ghi Family
            'COALESCE(json_agg(json_build_object(' +
                "'id', fam.id, " +
                "'full_name', fam.full_name, " +
                "'relationship', fam.relationship, " +
                "'birth_year', fam.birth_year, " +
                "'workplace', fam.workplace, " +
                "'job', fam.job, " +
                "'phone_number', fam.phone_number, " +
                "'living_together', fam.living_together, " +
                "'create_date', fam.create_date, " +
                "'write_date', fam.write_date" +
            ')) FILTER (WHERE fam.id IS NOT NULL), \'[]\') AS family_members'
            
        ])
        .groupBy('p.id')
        .orderBy('p.id')
        .getRawMany();

    // Kiểm tra nếu không tìm thấy bản ghi nào
    if (!personnels || personnels.length === 0) {
        console.warn("No personnel found for the given IDs:", ids);
        return; // Hoặc xử lý theo cách bạn muốn
    }
    console.log("personnel" , personnels)
    for (const personnel of personnels) {
        // Tạo mới bản ghi trong bảng hr
        const hrErpRecord = this.hrErpRepository.create({
            full_name: personnel.p_full_name,
            gender: personnel.p_gender,
            birth_date: personnel.p_birth_date,
            phone_number: personnel.p_phone_number,
            email: personnel.p_email,
            families_json: personnel.p_family_members,
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
        });

        await this.hrErpRepository.save(hrErpRecord);
    }
}
























}
