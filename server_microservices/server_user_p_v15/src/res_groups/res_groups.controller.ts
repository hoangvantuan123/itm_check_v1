import { Controller, Get, Post, HttpStatus, Body, Param, Put, Delete, Query, Req, Res, UnauthorizedException } from '@nestjs/common';
import { ResGroupsService } from './res_groups.service';
import { ResGroups } from './res_groups.entity';
import { jwtConstants } from 'src/config/config';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { CreateResGroupsDto } from './res_groups.dto';


@Controller('api/p')
export class ResGroupsController {
  constructor(private readonly resGroupsService: ResGroupsService) { }


  @Post('res_groups')
  async create(
    @Req() req: Request,
    @Body() createResGroupsDto: Partial<CreateResGroupsDto>,
    @Res() res: Response
  ): Promise<Response> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }


    try {
      const decodedToken = jwt.verify(token, jwtConstants.secret);

      const userId = (decodedToken as { id: number }).id;
      if (!userId) {
        throw new UnauthorizedException('Invalid token payload');
      }

      const result = await this.resGroupsService.create(userId, createResGroupsDto);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new UnauthorizedException('Request sending failed, please try again!');
    }
  }

  @Get('res_groups')
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Req() req: Request
  ): Promise<{ data: ResGroups[], total: number }> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }

    try {
      const decodedToken = jwt.verify(token, jwtConstants.secret) as { id: number };
      const userId = decodedToken.id;

      if (!userId) {
        throw new UnauthorizedException('Invalid token payload');
      }

      return this.resGroupsService.findAll(userId, page, limit);
    } catch (error) {
      throw new UnauthorizedException('Request sending failed, please try again!');
    }
  }

  @Get('res_groups/:id')
  findOne(@Param('id') id: number): Promise<ResGroups> {
    return this.resGroupsService.findOne(id);
  }

  @Put('res_groups/:id')
  update(@Param('id') id: number, @Body() updateResGroupsDto: Partial<ResGroups>): Promise<ResGroups> {
    return this.resGroupsService.update(id, updateResGroupsDto);
  }

  @Delete('res_groups/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.resGroupsService.remove(id);
  }
}
