import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../@core/application/useCases/user/CreateUserUseCase';
import { UserRepository } from '@core/domain';
import { PrismaUserRepository } from '@core/infra';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
