import { Body, Req, Controller, Post, HttpException, HttpStatus, Res, Put, UsePipes, Param, Delete, UnauthorizedException, ValidationPipe, Logger, Get, Query } from '@nestjs/common';
import { HrInterServices } from '../services/hr_inter.services';
import { HrInter } from '../entity/hr_inter.entity';


@Controller('api/sv4/hr-inter-data')
export class HrInerController {
    private readonly logger = new Logger(HrInerController.name);

    constructor(private readonly hrInterService: HrInterServices) { }
    @Get()
    async findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10000,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ): Promise<{ data: any[]; total: number; totalPages: number }> {
        const startDateObj = startDate ? new Date(startDate) : undefined;
        const endDateObj = endDate ? new Date(endDate) : undefined;
        return this.hrInterService.findAllPageLimit({}, page, limit, startDateObj, endDateObj);
    }


    @Get('filter')
    async getAllFilterPersonnel(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 500,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
        @Query('nameTags') nameTags?: string,
        @Query('phoneNumberTags') phoneNumberTags?: string,
        @Query('citizenshipIdTags') citizenshipIdTags?: string,
        @Query('cid') cid?: string,
        @Query('syn') syn?: boolean,
        @Query('interViewDateFilter') interViewDateFilter?: boolean,
    ): Promise<{ data: HrInter[]; total: number; totalPages: number }> {
        const filter: Record<string, any> = {
            nameTags: nameTags ? nameTags.split(',') : [],
            phoneNumberTags: phoneNumberTags ? phoneNumberTags.split(',') : [],
            citizenshipIdTags: citizenshipIdTags ? citizenshipIdTags.split(',') : [],
            cid: cid ? cid.split(',') : [],
            syn: syn !== undefined ? syn : undefined,
            interViewDateFilter: interViewDateFilter !== undefined ? interViewDateFilter : undefined,
        };

        const start = startDate ? new Date(startDate) : undefined;
        const end = endDate ? new Date(endDate) : undefined;

        return await this.hrInterService.findAllPageLimitFilter(filter, page, limit, start, end);
    }






    @Post('new')
    async create(
        @Req() req: Request,
        @Body() createHrInterDto: Partial<HrInter>,
    ): Promise<{ success: boolean; message: string; data?: HrInter }> {
        try {
            const result = await this.hrInterService.create(createHrInterDto);
            return result;
        } catch (error) {
            return {
                success: false,
                message: 'Error creating hrInter: ' + error.message,
            };
        }
    }


    @Delete('delete')
    async delete(@Body('ids') ids: number[]): Promise<{ success: boolean; message: string }> {
        try {
            await this.hrInterService.remove(ids);
            return { success: true, message: 'Deleted successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to delete records' };
        }
    }


}