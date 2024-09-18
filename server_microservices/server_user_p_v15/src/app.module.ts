import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ResGroupsModule } from './res_groups/res_groups.module';
import { ResUsersModule } from './users/users.module';
import { MenuModule } from './ui_menu/ui_menu.module';
import * as cors from 'cors';


@Module({
  imports: [AuthModule, ResGroupsModule,ResUsersModule, MenuModule],
  providers: [],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
