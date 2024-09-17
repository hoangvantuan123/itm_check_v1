import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResUsersController } from './users.controller';
import { DatabaseModule } from 'src/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [ResUsersController],
    providers: [ ],
  })
export class ResUsersModule { }