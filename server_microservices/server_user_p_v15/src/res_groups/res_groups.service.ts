import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResGroups } from './res_groups.entity';

@Injectable()
export class ResGroupsService {
  constructor(
    @InjectRepository(ResGroups)
    private readonly resGroupsRepository: Repository<ResGroups>,
  ) {}

  // Tạo mới
  async create(createResGroupsDto: Partial<ResGroups>): Promise<ResGroups> {
    const newGroup = this.resGroupsRepository.create(createResGroupsDto);
    return this.resGroupsRepository.save(newGroup);
  }

  // Lấy danh sách với phân trang
  async findAll(page: number = 1, limit: number = 10): Promise<{ data: ResGroups[], total: number }> {
    const [data, total] = await this.resGroupsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
    };
  }

  // Lấy 1 bản ghi
  async findOne(id: number): Promise<ResGroups> {
    return this.resGroupsRepository.findOneBy({ id });
  }

  // Cập nhật
  async update(id: number, updateResGroupsDto: Partial<ResGroups>): Promise<ResGroups> {
    await this.resGroupsRepository.update(id, updateResGroupsDto);
    return this.resGroupsRepository.findOneBy({ id });
  }

  // Xóa
  async remove(id: number): Promise<void> {
    await this.resGroupsRepository.delete(id);
  }
}
