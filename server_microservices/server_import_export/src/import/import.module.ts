import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database.module';
import { ImportServices } from './services/import.services';
import { ImportController } from './controller/import.controller';
@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [ImportServices],
  controllers: [ImportController],
  exports: [],
})
export class ImportModule {}
