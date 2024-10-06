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
        'personnel.employee_code',
        'personnel.part',
        'personnel.erp_department_registration',
        'personnel.position',
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
      'personnel.employee_code',
      'personnel.part',
      'personnel.erp_department_registration',
      'personnel.position',
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
