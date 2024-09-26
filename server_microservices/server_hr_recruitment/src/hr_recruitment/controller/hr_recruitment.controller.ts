import { Body, Controller, Post, HttpException, HttpStatus, UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { CreatePersonnelWithDetailsDto } from '../dto/create-personnel-with-details.dto';
import { HrRecruitmentServices } from '../services/hr_recruitment.services';

@Controller('api')
export class HrRecruitmentController {
  private readonly logger = new Logger(HrRecruitmentController.name);

  constructor(private readonly personnelService: HrRecruitmentServices) {}

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
}
