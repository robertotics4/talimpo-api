import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../@core/application/useCases/user/CreateUserUseCase';
import { PrismaModule } from '@prismaOrm/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
