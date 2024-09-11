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

  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      const user = await this.userRepository.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw new NotFoundException(`User with email ${email} not found`);
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
  async updateUser(id: number, updateUserDto: Partial<User>): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }
}
