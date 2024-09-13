// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async findUserByEmail(login: string): Promise<User | undefined> {
    try {
      const user = await this.userRepository.findOne({ where: { login } });
      return user;
    } catch (error) {
      throw new NotFoundException(`User with login ${login} not found`);
    }
  }
  async saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  async findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async save(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  async findUserById(userId: number): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

 
}
