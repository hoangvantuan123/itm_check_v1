import { Body, Controller, Post, HttpException, HttpStatus, Put, UsePipes, Param, Delete, ValidationPipe, Logger, Get, Query } from '@nestjs/common';
import { CreatePersonnelWithDetailsDto } from '../dto/create-personnel-with-details.dto';
import { HrRecruitmentServices } from '../services/hr_recruitment.services';
import { Personnel } from '../entity/personnel.entity';
@Controller('api/sv4/hr-information')
export class HrRecruitmentController {
  private readonly logger = new Logger(HrRecruitmentController.name);

  constructor(private readonly personnelService: HrRecruitmentServices) { }

  @Post('personnel')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))
  async create(@Body() createPersonnelWithDetailsDto: CreatePersonnelWithDetailsDto) {
    try {
      const result = await this.personnelService.create(createPersonnelWithDetailsDto);

      if (result.success) {
        return {
          statusCode: HttpStatus.CREATED,
          message: result.message,
          data: result.data,
        };
      } else {
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: result.message,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      this.logger.error('Failed to create personnel and related details', error.stack);

      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error: Could not create personnel with related details',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('personnel')
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10000,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ): Promise<{ data: any[]; total: number; totalPages: number }> {
    const startDateObj = startDate ? new Date(startDate) : undefined;
    const endDateObj = endDate ? new Date(endDate) : undefined;
    return this.personnelService.findAllPageLimit({}, page, limit, startDateObj, endDateObj);
  }


  @Get('personnel/filter')
  async getAllFilterPersonnel(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 500,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('nameTags') nameTags?: string,
    @Query('phoneNumberTags') phoneNumberTags?: string,
    @Query('citizenshipIdTags') citizenshipIdTags?: string,
  ): Promise<{ data: Personnel[]; total: number; totalPages: number }> {
    const filter: Record<string, any> = {
      nameTags: nameTags ? nameTags.split(',') : [],
      phoneNumberTags: phoneNumberTags ? phoneNumberTags.split(',') : [],
      citizenshipIdTags: citizenshipIdTags ? citizenshipIdTags.split(',') : [],
    };

    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;

    return await this.personnelService.findAllPageLimitFilter(filter, page, limit, start, end);
  }


  @Put('personnel/:id')
  async update(
    @Param('id') id: number,
    @Body() updatePersonnelWithDetailsDto: CreatePersonnelWithDetailsDto,
  ): Promise<{ success: boolean; message: string; data?: any }> {
    return await this.personnelService.update(id, updatePersonnelWithDetailsDto);
  }

  @Delete('personnel')
  async delete(@Body('ids') ids: number[]): Promise<{ success: boolean; message: string }> {
  
  
    return await this.personnelService.delete(ids);
  }
  
  @Get('personnel/:id')
  async getPersonnel(@Param('id') id: number) {
    return this.personnelService.getPersonnelById(id);
  }
}
