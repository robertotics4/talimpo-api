import { Module } from '@nestjs/common';
import { RestroomRepository } from '@core/domain';
import { RestroomController } from './restroom.controller';
import { PrismaRestroomRepository } from '@core/infra';
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
  ],
})
export class RestroomModule {}
