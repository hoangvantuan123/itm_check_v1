import { Controller, Post, Body, Req, Res, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AppService } from './auth.service';
import { UserService } from './user.service';
import { RegistrationDto } from './registration.dto';
import { LoginDto } from './login.dto';
import { ChangePasswordDto } from './change-password.dto';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Controller('api/p')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() registrationData: RegistrationDto) {
    const user = await this.appService.registerUser(registrationData);
    return user;
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.appService.loginUser(loginDto);
  }

  @Post('change-password')
  async changePassword(
    @Req() req: Request,
    @Body() changePasswordDto: ChangePasswordDto,
    @Res() res: Response
  ) {
    const { oldPassword, newPassword } = changePasswordDto;

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decodedToken = jwt.verify(token, 'P@5sW0rD!$R3c3nT@2024');
      const userId = (decodedToken as { id: number }).id;

      await this.appService.changePassword(userId, oldPassword, newPassword);
      return res.status(HttpStatus.OK).json({ message: 'You have successfully changed your password', decodedToken });
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }


  @Post('refresh-token')
  async refreshToken(@Req() req: Request, @Res() res: Response) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, error: 'Token is required' });
    }

    try {
      const { token: newToken } = await this.appService.refreshToken(token);
      return res.json({
        success: true,
        data: {
          token: newToken,
        },
      });

    } catch (error) {
      return res.status(401).json({ success: false, error: error.message });
    }
  }
}
