import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResUserGroups } from '../entity/res_user_groups.entity';
import { UserService } from 'src/auth/user.service';

@Injectable()
export class ResUserGroupsService {
  constructor(
    @InjectRepository(ResUserGroups)
    private readonly resUserGroupsRepository: Repository<ResUserGroups>,
    private readonly userService: UserService,

  ) { }

  async create(
    userId: number,
    userIds: number[],
    groupId: number
  ): Promise<{ success: boolean; message: string; data?: ResUserGroups[] }> {

    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }


    const newGroups = userIds.map(id => {
      return this.resUserGroupsRepository.create({
        group_id: groupId,
        user_id: id,
        create_uid: userId,
        write_uid: userId,
      });
    });


    await this.resUserGroupsRepository
      .createQueryBuilder()
      .insert()
      .into(ResUserGroups)
      .values(newGroups)
      .execute();

    return {
      success: true,
      message: 'Successfully created/updated groups for users',
    };
  }

  async findUsersByGroupId(
    groupId: number,
    userId: number,
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: any[], total: number, totalPages: number }> {
    // Kiểm tra xem người dùng có tồn tại không
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    // Tính toán số bản ghi cần bỏ qua và số bản ghi cần lấy
    const skip = (page - 1) * limit;
    const take = limit;
  
    // Truy vấn tổng số bản ghi
    const [userGroups, total] = await this.resUserGroupsRepository
      .createQueryBuilder('userGroups')
      .innerJoinAndSelect('userGroups.user', 'user')
      .where('userGroups.group_id = :groupId', { groupId })
      .getManyAndCount();
  
    const paginatedUserGroups = await this.resUserGroupsRepository
      .createQueryBuilder('userGroups')
      .innerJoinAndSelect('userGroups.user', 'user')
      .where('userGroups.group_id = :groupId', { groupId })
      .select(['userGroups.id','userGroups.create_date', 'userGroups.user_id', 'user.login', 'user.nameUser', 'user.language', 'user.active'])
      .orderBy('userGroups.create_date', 'DESC') 
      .skip(skip)
      .take(take)
      .getMany();
  
    const totalPages = Math.ceil(total / limit);
  
    return {
      data: paginatedUserGroups.map(userGroup => ({
        id: userGroup.id,
        user_id: userGroup.user_id,
        login: userGroup.user.login,
        name: userGroup.user.nameUser,
        language: userGroup.user.language,
        create_date: userGroup.create_date,
        active: userGroup.user.active,
      })),
      total,
      totalPages
    };
  }
  


}
