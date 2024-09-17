import { Controller, Get, Post, HttpStatus, Body, Param, Put, Delete, Query, Req, Res, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/auth/user.service';
import { jwtConstants } from 'src/config/config';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserDto } from '../auth/users.dto';


@Controller('api/p')
export class ResUsersController {
  constructor(private readonly resUsersService: UserService) { }

  @Get('res_users')
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Req() req: Request
  ): Promise<{ data: UserDto[], total: number }> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('The job version has expired. Please log in again to continue.');
    }

    try {
      const decodedToken = jwt.verify(token, jwtConstants.secret) as { id: number };
      const userId = decodedToken.id;

      if (!userId) {
        throw new UnauthorizedException('Invalid token payload');
      }

      return this.resUsersService.findUserAll(userId, page, limit);
    } catch (error) {
      throw new UnauthorizedException('Request sending failed, please try again!');
    }
  }

  @Delete('res_users')
  async remove(@Body('ids') ids: number[], @Req() req: Request): Promise<void> {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }
  
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('The job version has expired. Please log in again to continue.');
    }
  
    try {
      const decodedToken = jwt.verify(token, jwtConstants.secret);
      const userId = (decodedToken as { id: number }).id;
      if (!userId) {
        throw new UnauthorizedException('Invalid token payload');
      }
  
      
      await this.resUsersService.remove(userId, ids);
       
    } catch (error) {
      throw new UnauthorizedException('Request failed, please try again!');
    }
  }
  
}
