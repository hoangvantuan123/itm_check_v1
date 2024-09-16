import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResGroups } from './res_groups.entity';
import { UserService } from 'src/auth/user.service';

@Injectable()
export class ResGroupsService {
  constructor(
    @InjectRepository(ResGroups)
    private readonly resGroupsRepository: Repository<ResGroups>,
    private readonly userService: UserService
  ) { }

  // Tạo mới
  async create(userId: number, createResGroupsDto: Partial<ResGroups>): Promise<{ success: boolean; message: string; data?: ResGroups }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const newGroup = this.resGroupsRepository.create(createResGroupsDto);
    await this.resGroupsRepository.save(newGroup);
    return {
      success: true,
      message: 'Group created successfully',
      data: newGroup,
    };
  }

  async findAll(userId: number, page: number = 1, limit: number = 10): Promise<{ data: ResGroups[], total: number, totalPages:number }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [data, total] = await this.resGroupsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    const totalPages = Math.ceil(total / limit);

    return {
      data,
      total,
      totalPages
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
