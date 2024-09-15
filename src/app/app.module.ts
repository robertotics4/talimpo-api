import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { PrismaModule } from '@prismaOrm/prisma.module';
import { RestroomModule } from './restroom/restroom.module';

@Module({
  imports: [PrismaModule, UserModule, SessionModule, RestroomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
