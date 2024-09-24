import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ImportServices } from '../services/import.services';
import { ImportDataDto } from '../dto/import.dto';

@Controller('api')
export class ImportController {
  constructor(private readonly importService: ImportServices) {}

  @Post('import')
  async importData(@Body() data: ImportDataDto): Promise<{ message: string }> {
    try {
      await this.importService.processImportData(data);
      return { message: 'Dữ liệu đã được nhập khẩu thành công' };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Có lỗi xảy ra trong quá trình nhập dữ liệu',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
