import { Controller, Get, UseGuards, Req, Res, HttpStatus, Body, Post, Put, Param, UnauthorizedException } from '@nestjs/common';
import { AppService } from './auth.service';
import { AuthGuard } from '@nestjs/passport'
import { User } from './user.entity';
import { RegistrationDto } from './registration.dto';
import { LoginDto } from './login.dto';

import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,

    private readonly userService: UserService
  ) { }

  @Post('register')
  async register(@Body() registrationData: RegistrationDto) {
    const user = await this.appService.registerUser(registrationData);
    return user;
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.appService.loginUser(loginDto);
  }


  @Put(':id/update-access-token')
  async updateUserAccessToken(@Param('id') id: number, @Body('accessToken') accessToken: string): Promise<User> {
    return this.appService.updateUserAccessToken(id, accessToken);
  }
}