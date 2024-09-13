import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../@core/application/useCases/user/CreateUserUseCase';
import { UserRepository } from '@core/domain';
import { PrismaUserRepository } from '@core/infra';
import { AuthUserUseCase } from '@core/application';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    AuthUserUseCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class UserModule {}
