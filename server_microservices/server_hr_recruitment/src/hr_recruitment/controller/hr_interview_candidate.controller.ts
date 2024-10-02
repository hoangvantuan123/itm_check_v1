// src/hr-interview-candidates/hr-interview-candidates.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, Query, Req } from '@nestjs/common';
import { HrInterviewCandidatesService } from '../services/hr_interview_candidate.services';
import { HrInterviewCandidate } from '../entity/hr_interview_candidates.entity';
import { FindCandidatesDto } from '../dto/find-candidates.dto';

@Controller('api/sv4/hr-interview-candidates')
export class HrInterviewCandidatesController {
    constructor(private readonly candidatesService: HrInterviewCandidatesService) { }

    /*   @Get()
      getAllCandidates(): Promise<HrInterviewCandidate[]> {
          return this.candidatesService.getAllCandidates();
      }
   */
    @Get(':id')
    getCandidateById(@Param('id') id: number): Promise<HrInterviewCandidate> {
        return this.candidatesService.getCandidateById(id);
    }

    @Post()
    createCandidate(@Body() createData: Partial<HrInterviewCandidate>): Promise<HrInterviewCandidate> {
        return this.candidatesService.createCandidate(createData);
    }

    @Put(':id')
    updateCandidate(
        @Param('id') id: number,
        @Body() updateData: Partial<HrInterviewCandidate>,
    ): Promise<HrInterviewCandidate> {
        return this.candidatesService.updateCandidate(id, updateData);
    }

    @Delete()
    async remove(@Body('ids') ids: number[], @Req() req: Request): Promise<void> {
        await this.candidatesService.remove(ids);
    }

    @Get()
    async getAllFilterPersonnel(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 500,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ): Promise<{ data: HrInterviewCandidate[]; total: number; totalPages: number }> {

        const start = startDate ? new Date(startDate) : undefined;
        const end = endDate ? new Date(endDate) : undefined;

        return await this.candidatesService.findAllPageLimit({}, page, limit, start, end);
    }

    @Get('find-by-phone/:phone_number')
    async findByPhone(
      @Param('phone_number') phoneNumber: string,
    ) {
      return await this.candidatesService.findByPhoneNumber(phoneNumber);
    }
}
