import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResUserGroups } from '../entity/res_user_groups.entity';
import { UserService } from 'src/auth/user.service';
import { UserDto } from 'src/auth/users.dto';
import { Users } from 'src/auth/user.entity';

@Injectable()
export class ResUserGroupsService {
  constructor(
    @InjectRepository(ResUserGroups)
    private readonly resUserGroupsRepository: Repository<ResUserGroups>,
    @InjectRepository(Users)
    private readonly resUsersRepository: Repository<Users>,




    private readonly userService: UserService,
  ) { }

  async create(
    userId: number,
    userIds: number[],
    groupId: number,
  ): Promise<{ success: boolean; message: string; data?: ResUserGroups[] }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newGroups = userIds.map((id) => {
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
    limit: number = 10,
  ): Promise<{ data: any[]; total: number; totalPages: number }> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

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
      .select([
        'userGroups.id',
        'userGroups.create_date',
        'userGroups.user_id',
        'user.login',
        'user.nameUser',
        'user.language',
        'user.active',
      ])
      .orderBy('userGroups.create_date', 'DESC')
      .skip(skip)
      .take(take)
      .getMany();

    const totalPages = Math.ceil(total / limit);

    return {
      data: paginatedUserGroups.map((userGroup) => ({
        id: userGroup.id,
        user_id: userGroup.user_id,
        login: userGroup.user.login,
        name: userGroup.user.nameUser,
        language: userGroup.user.language,
        create_date: userGroup.create_date,
        active: userGroup.user.active,
      })),
      total,
      totalPages,
    };
  }

  async remove(userId: number, ids: number[]): Promise<void> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.resUserGroupsRepository.delete(ids);
  }




  async getAvailableUsersGroup(
    groupId: number,
    userId: number,
    page: number = 1,
    limit: number = 10,
  ): Promise<{
    success: boolean;
    message: string;
    data?: UserDto[];
    total?: number;
    totalPages?: number;
  }> {

    const usersWithPermissions = await this.resUserGroupsRepository
      .createQueryBuilder('user')
      .select('user.user_id')
      .where('user.group_id = :groupId', { groupId })
      .getRawMany();

    const usersWithPermissionsArray = usersWithPermissions
      .map((row) => row.user_user_id)
      .filter((id) => id != null);

    const offset = (page - 1) * limit;

    let queryBuilder = this.resUsersRepository
      .createQueryBuilder('user')
      .skip(offset)
      .take(limit);

    // Only apply the exclusion if usersWithPermissionsArray has values
    if (usersWithPermissionsArray.length > 0) {
      queryBuilder = queryBuilder.where('user.id NOT IN (:...userIds)', {
        userIds: usersWithPermissionsArray,
      });
    }

    const [availableUsers, total] = await queryBuilder.getManyAndCount();

    const transformedUsers = availableUsers.map(user =>
      new UserDto({
        id: user.id,
        companyId: user.companyId,
        partnerId: user.partnerId,
        active: user.active,
        createDate: user.createDate,
        login: user.login,
        actionId: user.actionId,
        createUid: user.createUid,
        writeUid: user.writeUid,
        signature: user.signature,
        share: user.share,
        writeDate: user.writeDate,
        totpSecret: user.totpSecret,
        notificationType: user.notificationType,
        status: user.status,
        karma: user.karma,
        rankId: user.rankId,
        nextRankId: user.nextRankId,
        employeeCode: user.employeeCode,
        name: user.nameUser,
        language: user.language,
      })
    );

    const totalPages = Math.ceil(total / limit);

    if (availableUsers.length === 0) {
      return {
        success: true,
        message: 'No available users found',
        data: [],
        total,
        totalPages,
      };
    }

    return {
      success: true,
      message: 'Available users retrieved successfully',
      data: transformedUsers,
      total,
      totalPages,
    };
  }

}
