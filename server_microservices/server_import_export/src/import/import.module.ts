import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database.module';
import { ImportServices } from './services/import.services';
import { ImportController } from './controller/import.controller';
import { BaseImportEntity } from './entity/base_import.entity';
import { TestImportServices } from './services/test_import.services';
@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([BaseImportEntity])
  ],
  providers: [ImportServices, TestImportServices],
  controllers: [ImportController],
  exports: [],
})
export class ImportModule {}
