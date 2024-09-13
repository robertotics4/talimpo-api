import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../@core/application/useCases/user/CreateUserUseCase';
import { Encryptor, JWT, UserRepository } from '@core/domain';
import {
  BCryptEncryptor,
  JsonWebToken,
  PrismaUserRepository,
} from '@core/infra';
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
    {
      provide: Encryptor,
      useClass: BCryptEncryptor,
    },
    {
      provide: JWT,
      useClass: JsonWebToken,
    },
  ],
})
export class UserModule {}
