// src/hr-interview-candidates/hr-interview-candidates.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager, In } from 'typeorm';
import { HrInterviewCandidate } from '../entity/hr_interview_candidates.entity';
import { Personnel } from '../entity/personnel.entity';
import { HrInter } from '../entity/hr_inter.entity';
@Injectable()
export class HrInterServices {
  constructor(
    @InjectRepository(HrInterviewCandidate)
    private readonly candidateRepository: Repository<HrInterviewCandidate>,
    @InjectRepository(HrInter)
    private readonly hrInterRepository: Repository<HrInter>,

  ) { }

  async create(
    createHrInterDto: Partial<HrInter>,
  ): Promise<{ success: boolean; message: string; data?: HrInter }> {

    const existingEntry = await this.hrInterRepository.findOne({
      where: { phone_number: createHrInterDto.phone_number }
    });

    if (existingEntry) {
      return {
        success: false,
        message: 'Số điện thoại đã tồn tại trong cơ sở dữ liệu',
      };
    }

    const data = this.hrInterRepository.create(createHrInterDto);
    await this.hrInterRepository.save(data);
    return {
      success: true,
      message: 'Nhóm đã được tạo thành công',
      data: data,
    };
  }



  async findAllPageLimit(
    filter: Record<string, any> = {},
    page: number = 1,
    limit: number = 10000,
    startDate?: Date,
    endDate?: Date,
  ): Promise<{ data: HrInter[]; total: number; totalPages: number }> {
    const query = this.hrInterRepository.createQueryBuilder('hr_inter');

    Object.entries(filter).forEach(([key, value]) => {
      if (value) {
        query.andWhere(`hr_inter.${key} = :${key}`, { [key]: value });
      }
    });

    if (startDate) {
      query.andWhere('hr_inter.create_date >= :startDate', { startDate });
    }

    if (endDate) {
      const endOfDay = new Date(endDate);
      endOfDay.setHours(23, 59, 59, 999);
      query.andWhere('hr_inter.create_date <= :endOfDay', { endOfDay });
    }

    query
      .select([
        'hr_inter.id',
        'hr_inter.full_name',
        'hr_inter.gender',
        'hr_inter.create_date',
        'hr_inter.interview_date',
        'hr_inter.birth_date',
        'hr_inter.id_number',
        'hr_inter.phone_number',
        'hr_inter.email',
        'hr_inter.tax_number',
        'hr_inter.synchronize',
        'hr_inter.employee_code',
        'hr_inter.applicant_status',
        'hr_inter.applicant_type',
        'hr_inter.team',
        'hr_inter.part',
        'hr_inter.production',
        'hr_inter.section',
        'hr_inter.job_field',
        'hr_inter.position'

      ])
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy('hr_inter.create_date', 'DESC');

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
  ): Promise<{ data: HrInter[]; total: number; totalPages: number }> {
    const query = this.hrInterRepository.createQueryBuilder('hr_inter');

    const addFilterCondition = (filterKey: string, dbField: string) => {
      if (filter[filterKey] && filter[filterKey].length > 0) {
        const conditions = filter[filterKey].map((value: any, index: any) => `${dbField} ILIKE :${filterKey}${index}`);
        filter[filterKey].forEach((value: any, index: any) => {
          query.setParameter(`${filterKey}${index}`, `%${value}%`);
        });
        query.andWhere(`(${conditions.join(' OR ')})`);
      }
    };

    addFilterCondition('nameTags', 'hr_inter.full_name');
    addFilterCondition('phoneNumberTags', 'hr_inter.phone_number');
    addFilterCondition('citizenshipIdTags', 'hr_inter.id_number');
    addFilterCondition('cid', 'hr_inter.employee_code');
    addFilterCondition('applicantType', 'hr_inter.applicant_type');
    addFilterCondition('applicantStatus', 'hr_inter.applicant_status');

    if (filter.interViewDateFilter) {
      query.andWhere('DATE(hr_inter.interview_date) = :interViewDate', { interViewDate: filter.interViewDateFilter });
    }
    if (startDate) {
      query.andWhere('hr_inter.create_date >= :startDate', { startDate });
    }
    if (endDate) {
      const endOfDay = new Date(endDate);
      endOfDay.setHours(23, 59, 59, 999);
      query.andWhere('hr_inter.create_date <= :endOfDay', { endOfDay });
    }

    if (filter.syn !== undefined) {
      query.andWhere('hr_inter.synchronize = :syn', { syn: filter.syn });
    }

    query
      .select([
        'hr_inter.id',
        'hr_inter.full_name',
        'hr_inter.gender',
        'hr_inter.create_date',
        'hr_inter.interview_date',
        'hr_inter.birth_date',
        'hr_inter.id_number',
        'hr_inter.phone_number',
        'hr_inter.email',
        'hr_inter.tax_number',
        'hr_inter.synchronize',
        'hr_inter.employee_code',
        'hr_inter.applicant_status',
        'hr_inter.applicant_type',
        'hr_inter.team',
        'hr_inter.part',
        'hr_inter.production',
        'hr_inter.section',
        'hr_inter.job_field',
        'hr_inter.position'
      ])
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy('hr_inter.create_date', 'DESC');

    const [data, total] = await query.getManyAndCount();

    return {
      data,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }


  async remove(ids: number[]): Promise<void> {
    const BATCH_SIZE = 1000;
    const idBatches = [];
    for (let i = 0; i < ids.length; i += BATCH_SIZE) {
      idBatches.push(ids.slice(i, i + BATCH_SIZE));
    }

    await this.hrInterRepository.manager.transaction(async (transactionalEntityManager) => {
      for (const batch of idBatches) {
        await transactionalEntityManager.delete(this.hrInterRepository.target, { id: In(batch) });
      }
    });
  }



  async getPersonnelInterById(id: number): Promise<any> {
    const inter = await this.hrInterRepository.findOne({
      where: { id }
    });

    if (!inter) {
      return {
        status: false,
        data: [],
      };
    }

    return {
      status: true,
      data: {
        // Thông tin cá nhân
        key: inter.id,
        full_name: inter.full_name,
        gender: inter.gender,
        interview_date: inter.interview_date,
        start_date: inter.start_date,
        birth_date: inter.birth_date,
        id_number: inter.id_number,
        id_issue_date: inter.id_issue_date,
        ethnicity: inter.ethnicity,
        id_issue_place: inter.id_issue_place,
        insurance_number: inter.insurance_number,
        tax_number: inter.tax_number,
        phone_number: inter.phone_number,
        email: inter.email,
        alternate_phone_number: inter.alternate_phone_number,
        alternate_name: inter.alternate_name,
        alternate_relationship: inter.alternate_relationship,
        birth_address: inter.birth_address,
        birth_province: inter.birth_province,
        birth_district: inter.birth_district,
        birth_ward: inter.birth_ward,
        current_address: inter.current_address,
        current_province: inter.current_province,
        current_district: inter.current_district,
        current_ward: inter.current_ward,
        type_personnel: inter.type_personnel,
        introducer_department: inter.introducer_department,
        introducer_introducer_name: inter.introducer_introducer_name,
        introducer_phone_number: inter.introducer_phone_number,
        candidate_type: inter.candidate_type,
        supplier_details: inter.supplier_details,
        synchronize: inter.synchronize,
        fac: inter.fac,
        department: inter.department,
        team: inter.team,
        jop_position: inter.jop_position,
        type_of_degree: inter.type_of_degree,
        type_classify: inter.type_classify,
        employee_code: inter.employee_code,
        contract_term: inter.contract_term,
        line_model: inter.line_model,
        part: inter.part,
        // Thông tin vị trí và hợp đồng
        erp_department_registration: inter.erp_department_registration,
        production: inter.production,
        section: inter.section,
        job_field: inter.job_field,
        position: inter.position,
        entering_day: inter.entering_day,
        leaving_day: inter.leaving_day,
        probation_days: inter.probation_days,
        official_date_first: inter.official_date_first,
        official_date_second: inter.official_date_second,
        age: inter.age,
        month_count: inter.month_count,
        number_of_children: inter.number_of_children,
        applicant_status: inter.applicant_status,
        applicant_type: inter.applicant_type,
        status_form: inter.status_form,

        // Thông tin con cái
        children: [
          {
            id: 1,
            children_name: inter.children_name_1,
            children_birth_date: inter.children_birth_date_1,
            children_gender: inter.children_gender_1,
          },
          {
            id: 2,
            children_name: inter.children_name_2,
            children_birth_date: inter.children_birth_date_2,
            children_gender: inter.children_gender_2,
          },
          {
            id: 3,
            children_name: inter.children_name_3,
            children_birth_date: inter.children_birth_date_3,
            children_gender: inter.children_gender_3,
          },
        ],
        families: [
          {
            id: 1,
            relationship: "Bố",
            full_name: inter.father_name,
            phone_number: inter.father_phone_number,
          },
          {
            id: 2,
            relationship: "Mẹ",
            full_name: inter.mother_name,
            phone_number: inter.mother_phone_number,
          },
          {
            id: 3,
            relationship: "Vợ",
            full_name: inter.partner_name,
            phone_number: inter.partner_phone_number,
          },
        ],
        experiences: [
          {
            id: 1,
            tasks: inter.work_department_1,
            position: inter.work_responsibility_1,
            company_name: inter.company_name_1,
            start_date: inter.entrance_day_1,
            end_date: inter.leaving_day_1,
            salary: inter.salary_1
          },
          {
            id: 2,
            tasks: inter.work_department_2,
            position: inter.work_responsibility_2,
            company_name: inter.company_name_2,
            start_date: inter.entrance_day_2,
            end_date: inter.leaving_day_2,
            salary: inter.salary_2
          }
        ],
        educations:
          [
            {
              highest_education_level: inter.highest_education_level,
              school: inter.school_name,
              major: inter.major,
              school_year: inter.school_year,
              year_ended: inter.year_ended,
              year_of_graduation: inter.year_of_graduation,
              classification: inter.classification,
            }
          ],
        languages:
          [
            {
              id: 1,
              language: inter.language_1,
              certificate_type: inter.certificate_type_1,
              score: inter.score_1,
              level: inter.level_1,
            },
            {
              id: 2,
              language: inter.language_2,
              certificate_type: inter.certificate_type_2,
              score: inter.score_2,
              level: inter.level_2,
            },
            {
              id: 3,
              language: inter.language_3,
              certificate_type: inter.certificate_type_3,
              score: inter.score_3,
              level: inter.level_3,
            },

          ],
        distance_from_household_to_company: inter.distance_from_household_to_company,
      },
    };
  }


  async updateUserInterviewId(
    id: number,
    updateDto: Partial<HrInter>,
  ): Promise<HrInter> {
    await this.hrInterRepository.update(id, updateDto);
    return this.hrInterRepository.findOneBy({ id });
  }


  async synchronizeHr(ids: number[]): Promise<void> {
    await this.hrInterRepository.update(
      { id: In(ids) },
      { synchronize: true }
    );
  }



  async findByPhoneNumber(phone_number: string): Promise<any> {
    const personnel = await this.hrInterRepository.findOne({
      where: { phone_number }
    });

    if (!personnel) {
      return {
        success: false,
        message: 'Personnel not found with this phone number',
        redirectUrl: '/your-desired-url',
      };
    }

    const combinedInfo = `${personnel.id}:${personnel.phone_number}:${personnel.full_name}:${personnel.email}`;
    let encodedRouter = Buffer.from(combinedInfo).toString('base64');

    encodedRouter = encodedRouter
      .replace(/\+/g, 'A')
      .replace(/\//g, 'B')
      .replace(/=+$/, '');
    return {
      success: true,
      data: {
        id: personnel.id,
        phoneNumber: personnel.phone_number,
        name: personnel.full_name,
        email: personnel.email,
        status_form: personnel.status_form,
        router: encodedRouter,
      },
    };
  }
}
