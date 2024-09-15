import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ResGroupsService } from './res_groups.service';
import { ResGroups } from './res_groups.entity';

@Controller('api/p/res_groups')
export class ResGroupsController {
  constructor(private readonly resGroupsService: ResGroupsService) {}

  @Post()
  create(@Body() createResGroupsDto: Partial<ResGroups>): Promise<ResGroups> {
    return this.resGroupsService.create(createResGroupsDto);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1, 
    @Query('limit') limit: number = 10
  ): Promise<{ data: ResGroups[], total: number }> {
    return this.resGroupsService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ResGroups> {
    return this.resGroupsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateResGroupsDto: Partial<ResGroups>): Promise<ResGroups> {
    return this.resGroupsService.update(id, updateResGroupsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.resGroupsService.remove(id);
  }
}
