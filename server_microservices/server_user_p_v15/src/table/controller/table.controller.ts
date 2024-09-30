import { Controller, Get , Param} from '@nestjs/common';
import { TableService } from '../services/table.services';

@Controller('api/sv1')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get("tables")
  async getTables() {
    return  await this.tableService.getTables();
  }

  @Get('table/:name')
  async getTableByName(@Param('name') name: string) {
    const table = await this.tableService.getTableByName(name);
    if (!table) {
      return { message: 'Table not found' };
    }
    return table;
  }
}
