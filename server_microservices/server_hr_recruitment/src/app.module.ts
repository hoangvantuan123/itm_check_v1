import { Module, MiddlewareConsumer } from '@nestjs/common';
import * as cors from 'cors';
import { HrRecruitment } from './hr_recruitment/hr_recruitment.module';

@Module({
  imports: [HrRecruitment],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
