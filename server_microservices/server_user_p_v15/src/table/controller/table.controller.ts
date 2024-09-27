import { Controller, Get } from '@nestjs/common';
import { TableService } from '../services/table.services';

@Controller('api/sv1')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get("tables")
  async getTables() {
    return  await this.tableService.getTables();
  }
}
