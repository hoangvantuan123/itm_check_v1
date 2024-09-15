import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ResGroupsModule } from './res_groups/res_groups.module';
import * as cors from 'cors';


@Module({
  imports: [AuthModule, ResGroupsModule],
  providers: [],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
