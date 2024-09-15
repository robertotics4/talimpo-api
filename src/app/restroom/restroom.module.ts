import { Module } from '@nestjs/common';
import { RestroomRepository } from '@core/domain';
import { RestroomController } from './restroom.controller';
import { PrismaRestroomRepository } from '@core/infra';
import { CreateRestroomUseCase } from '@core/application';

@Module({
  imports: [],
  controllers: [RestroomController],
  providers: [
    CreateRestroomUseCase,
    {
      provide: RestroomRepository,
      useClass: PrismaRestroomRepository,
    },
  ],
})
export class RestroomModule {}
