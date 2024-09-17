import { Module } from '@nestjs/common';
import { RestroomRepository, UserRepository } from '@core/domain';
import { RestroomController } from './restroom.controller';
import { PrismaRestroomRepository, PrismaUserRepository } from '@core/infra';
import { CreateRestroomUseCase, FindRestroomsUseCase } from '@core/application';

@Module({
  imports: [],
  controllers: [RestroomController],
  providers: [
    CreateRestroomUseCase,
    FindRestroomsUseCase,
    {
      provide: RestroomRepository,
      useClass: PrismaRestroomRepository,
    },

    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class RestroomModule {}
