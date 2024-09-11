import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './auth.controller';
import { AppService } from './auth.service';

import { UserService } from './user.service';
import { User } from './user.entity';
import { DatabaseModule } from 'src/database.module';


@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
    controllers: [AppController],
    providers: [AppService, UserService ],
  })
export class AuthModule { }