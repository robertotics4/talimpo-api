import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { PrismaModule } from '@prismaOrm/prisma.module';
import { RestroomModule } from './restroom/restroom.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    SessionModule,
    RestroomModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
