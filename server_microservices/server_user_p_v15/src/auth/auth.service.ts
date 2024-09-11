import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { RegistrationDto } from './registration.dto';
import { LoginDto } from './login.dto';

@Injectable()
export class AppService {
  constructor(private readonly userService: UserService) { }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async registerUser(registrationData: RegistrationDto): Promise<User> {
    const { login, password } = registrationData;
    console.log(login)
    const existingUser = await this.userService.findUserByEmail(login);

    if (existingUser) {
      throw new Error('User with this login already exists');
    }

    const hashedPassword = await this.hashPassword(password);
    const newUser = new User();
    newUser.login = login;
    newUser.password = hashedPassword;

    const savedUser = await this.userService.createUser(newUser);

    return savedUser;
  }

  async loginUser(loginData: LoginDto): Promise<Partial<User>> {
    const { login, password } = loginData;
    const user = await this.userService.findUserByEmail(login);

    if (!user) {
      throw new NotFoundException(`User with login ${login} not found`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign({
      id: user.id,
      login: user.login,
      partnerId: user.partnerId,
    }, 'your-secret-key-31', { expiresIn: '1h' });


    const userResponse: Partial<User> = {
      id: user.id,
      login: user.login,
      partnerId: user.partnerId,
    };

    return userResponse;
  }





}