import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '../../@core/application/useCases/user/CreateUserUseCase';
import { Encryptor, UserRepository } from '@core/domain';
import { BCryptEncryptor, PrismaUserRepository } from '@core/infra';
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
  ],
})
export class UserModule {}
