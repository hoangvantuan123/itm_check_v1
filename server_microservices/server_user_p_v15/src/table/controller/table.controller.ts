import { Controller, Get } from '@nestjs/common';
import { TableService } from '../services/table.services';

@Controller('tables')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  // API để lấy danh sách tên các bảng kèm cột
  @Get()
  async getTables() {
    return  await this.tableService.getTables();
  }
}
