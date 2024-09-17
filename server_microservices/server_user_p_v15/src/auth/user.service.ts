// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { UserDto } from './users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async createUser(user: Partial<Users>): Promise<Users> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async findUserByEmail(login: string): Promise<Users | undefined> {
    try {
      const user = await this.userRepository.findOne({ where: { login } });
      return user;
    } catch (error) {
      throw new NotFoundException(`User with login ${login} not found`);
    }
  }
  async saveUser(user: Users): Promise<Users> {
    return this.userRepository.save(user);
  }
  async findOne(id: number): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async save(user: Users): Promise<Users> {
    return this.userRepository.save(user);
  }
  async findUserById(userId: number): Promise<Users | undefined> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(user: Users): Promise<Users> {
    return this.userRepository.save(user);
  }


  async findUserAll(userId: number, page: number = 1, limit: number = 10): Promise<{ data: UserDto[], total: number, totalPages:number }> {
    const user = await this.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [data, total] = await this.userRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        createDate: 'DESC',
      },
    });
    const totalPages = Math.ceil(total / limit);
    const userDtos = data.map(user => new UserDto({
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
    }));

    return {
      data: userDtos,
      total,
      totalPages
    };
  }

  async remove(userId: number, ids: number[]): Promise<void> {
    const user = await this.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    await this.userRepository.delete(ids);
  }

  
 
}
