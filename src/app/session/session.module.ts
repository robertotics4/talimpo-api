import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SignInUseCase } from '@core/application';
import { Encryptor, JWT, UserRepository } from '@core/domain';
import {
  BCryptEncryptor,
  JsonWebToken,
  PrismaUserRepository,
} from '@core/infra';

@Module({
  imports: [],
  controllers: [SessionController],
  providers: [
    SignInUseCase,
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
export class SessionModule {}
