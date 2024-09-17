import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from '@prismaOrm/prisma.module';
import { RestroomModule } from './restroom/restroom.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { UserRepository } from '@core/domain';
import { PrismaUserRepository } from '@core/infra';

@Module({
  imports: [PrismaModule, UserModule, RestroomModule, ReviewModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class AppModule {}
