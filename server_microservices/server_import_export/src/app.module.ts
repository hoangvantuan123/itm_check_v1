import { Module, MiddlewareConsumer } from '@nestjs/common';
import * as cors from 'cors';
import { ImportModule } from './import/import.module';
import { ExportModule } from './export/export.module';

@Module({
  imports: [ImportModule],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
