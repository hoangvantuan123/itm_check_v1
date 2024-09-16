import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResGroupsController } from './res_groups.controller';
import { ResGroupsService } from './res_groups.service';
import { ResGroups } from './res_groups.entity';
import { DatabaseModule } from 'src/database.module';
import { AuthModule } from 'src/auth/auth.module';


@Module({
    imports: [DatabaseModule,AuthModule, TypeOrmModule.forFeature([ResGroups])],
    controllers: [ResGroupsController],
    providers: [ResGroupsService ],
  })
export class ResGroupsModule { }