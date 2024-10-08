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

        const data = this.hrInterRepository.create(createHrInterDto);
        await this.hrInterRepository.save(data);
        return {
            success: true,
            message: 'Group created succFessfully',
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
                'hr_inter.applicant_type'
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

        if (filter.nameTags && filter.nameTags.length > 0) {
            const nameConditions = filter.nameTags.map((name: any, index: any) => `hr_inter.full_name ILIKE :name${index}`);
            filter.nameTags.forEach((name: any, index: any) => {
                query.setParameter(`name${index}`, `%${name}%`);
            });
            query.andWhere(`(${nameConditions.join(' OR ')})`);
        }

        if (filter.phoneNumberTags && filter.phoneNumberTags.length > 0) {
            const phoneConditions = filter.phoneNumberTags.map((phone: any, index: any) => `hr_inter.phone_number ILIKE :phone${index}`);
            filter.phoneNumberTags.forEach((phone: any, index: any) => {
                query.setParameter(`phone${index}`, `%${phone}%`);
            });
            query.andWhere(`(${phoneConditions.join(' OR ')})`);
        }

        if (filter.citizenshipIdTags && filter.citizenshipIdTags.length > 0) {
            const idConditions = filter.citizenshipIdTags.map((id: any, index: any) => `hr_inter.id_number ILIKE :id${index}`);
            filter.citizenshipIdTags.forEach((id: any, index: any) => {
                query.setParameter(`id${index}`, `%${id}%`);
            });
            query.andWhere(`(${idConditions.join(' OR ')})`);
        }

        if (filter.cid && filter.cid.length > 0) {
            const idConditions = filter.cid.map((id: any, index: any) => `hr_inter.employee_code ILIKE :id${index}`);
            filter.cid.forEach((id: any, index: any) => {
                query.setParameter(`id${index}`, `%${id}%`);
            });
            query.andWhere(`(${idConditions.join(' OR ')})`);
        }

        if (filter.interViewDateFilter) {
            const interViewDate = filter.interViewDateFilter; 

            query.setParameter('interViewDate', interViewDate);

            query.andWhere(`DATE(hr_inter.interview_date) = :interViewDate`);
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

        query.select([
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
            'hr_inter.applicant_type'
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


}
