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

  async loginUser(loginData: LoginDto): Promise<{ success: boolean, data?: Partial<User>, error?: string }> {
    const { login, password } = loginData;

    try {
      const user = await this.userService.findUserByEmail(login);

      if (!user) {
        // Trả về lỗi nếu không tìm thấy user
        return {
          success: false,
          error: `User with login ${login} not found`,
        };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // Trả về lỗi nếu mật khẩu không hợp lệ
        return {
          success: false,
          error: 'Invalid credentials',
        };
      }

      const token = jwt.sign({
        login: user.login,
        partnerId: user.partnerId,
      }, 'your-secret-key-31', { expiresIn: '1h' });

      // Trả về thành công với dữ liệu user
      const userResponse: Partial<User> = {
        login: user.login,
        partnerId: user.partnerId,
      };

      return {
        success: true,
        data: userResponse,
      };

    } catch (error) {
      return {
        success: false,
        error: error.message || 'Wrong account or password',
      };
    }
  }

}