// src/hr-interview-candidates/hr-interview-candidates.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HrInterviewCandidate } from '../entity/hr_interview_candidates.entity';
import { Personnel } from '../entity/personnel.entity';

@Injectable()
export class HrInterviewCandidatesService {
    constructor(
        @InjectRepository(HrInterviewCandidate)
        private readonly candidateRepository: Repository<HrInterviewCandidate>,

        @InjectRepository(Personnel)
        private readonly personnelRepository: Repository<Personnel>,
    ) { }

    async getAllCandidates(): Promise<HrInterviewCandidate[]> {
        return await this.candidateRepository.find({ relations: ['personnel'] });
    }

    async findAllPageLimit(
        filter: Record<string, any> = {},
        page: number = 1,
        limit: number = 500,
        startDate?: Date,
        endDate?: Date,
    ): Promise<{ data: HrInterviewCandidate[]; total: number; totalPages: number }> {
        const query = this.candidateRepository.createQueryBuilder('candidate');

        if (filter) {
            Object.keys(filter).forEach((key) => {
                const value = filter[key];
                if (value !== undefined && value !== null) {
                    query.andWhere(`candidate.${key} = :${key}`, { [key]: value });
                }
            });
        }

        // Date range filtering
        if (startDate) {
            query.andWhere('candidate.create_date >= :startDate', { startDate });
        }

        if (endDate) {
            const endOfDay = new Date(endDate);
            endOfDay.setHours(23, 59, 59, 999);
            query.andWhere('candidate.create_date <= :endOfDay', { endOfDay });
        }

        // Select only necessary fields
        query.select([
            'candidate.id',
            'candidate.full_name',
            'candidate.gender',
            'candidate.phone_number',
            'candidate.email',
            'candidate.id_card_number',
            'candidate.interview_date',
            'candidate.create_date',
            'candidate.job_position',
            'candidate.form_status',
            'candidate.interview_status',
        ]);

        // Pagination and ordering
        query.skip((page - 1) * limit)
            .take(limit)
            .orderBy('candidate.create_date', 'DESC');

        // Execute query and fetch total count
        const [data, total] = await query.getManyAndCount();

        return {
            data,
            total,
            totalPages: Math.ceil(total / limit),
        };
    }


    async getCandidateById(id: number): Promise<HrInterviewCandidate> {
        const candidate = await this.candidateRepository.findOne({
            where: { id },
            relations: ['personnel'],
        });

        if (!candidate) {
            throw new NotFoundException(`Candidate with ID ${id} not found`);
        }

        return candidate;
    }

    async createCandidate(createData: Partial<HrInterviewCandidate>): Promise<HrInterviewCandidate> {
        let personnel: Personnel;

        if (createData.personnel) {
            personnel = await this.personnelRepository.save(createData.personnel);
        }

        const candidate = this.candidateRepository.create({
            ...createData,
            personnel,
        });

        return await this.candidateRepository.save(candidate);
    }

    async updateCandidate(id: number, updateData: Partial<HrInterviewCandidate>): Promise<HrInterviewCandidate> {
        const candidate = await this.candidateRepository.findOne({ where: { id } });

        if (!candidate) {
            throw new NotFoundException(`Candidate with ID ${id} not found`);
        }

        await this.candidateRepository.update({ id }, updateData);

        return this.getCandidateById(id);
    }

    async deleteCandidate(id: number): Promise<void> {
        const result = await this.candidateRepository.delete({ id });

        if (result.affected === 0) {
            throw new NotFoundException(`Candidate with ID ${id} not found`);
        }
    }
    async remove(ids: number[]): Promise<void> {
        await this.candidateRepository.delete(ids);
    }





    async findByPhoneNumber(phone_number: string): Promise<any> {
        const candidate = await this.candidateRepository.findOne({
            where: { phone_number }
        });

        if (!candidate) {
            return {
                success: false,
                message: 'candidate not found with this phone number',
                redirectUrl: '/your-desired-url',
            };
        }

        const combinedInfo = `${candidate.phone_number}:${candidate.full_name}`;
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
                id_card_number: candidate.id_card_number,
                interview_date: candidate.interview_date,
                job_position: candidate.job_position
            },
        };
    }

}
