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

  async loginUser(loginData: LoginDto): Promise<{ success: boolean, data?: { user: Partial<User>, token: string }, error?: string }> {
    const { login, password } = loginData;

    try {
      const user = await this.userService.findUserByEmail(login);

      if (!user) {
        return {
          success: false,
          error: `User with login ${login} not found`,
        };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return {
          success: false,
          error: 'Invalid credentials',
        };
      }

      const token = jwt.sign({
        id: user.id,
        login: user.login,
        partnerId: user.partnerId,
      }, 'P@5sW0rD!$R3c3nT@2024', { expiresIn: '1h' });

      const userResponse: Partial<User> = {
        login: user.login,
        partnerId: user.partnerId,
      };

      return {
        success: true,
        data: {
          user: userResponse,
          token,
        },
      };

    } catch (error) {
      return {
        success: false,
        error: error.message || 'Wrong account or password',
      };
    }
  }



  /* Đổi pass */
  async changePassword(userId: number, oldPassword: string, newPassword: string): Promise<{ success: boolean, message: string }> {
    const user = await this.userService.findUserById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (!isOldPasswordValid) {
      throw new UnauthorizedException('Old password is incorrect');
    }

    const hashedNewPassword = await this.hashPassword(newPassword);
    user.password = hashedNewPassword;

    await this.userService.updateUser(user);

    return {
      success: true,
      message: 'Password changed successfully',
    };
  }
}