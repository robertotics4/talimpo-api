import { Module } from '@nestjs/common';
import { ReviewRepository } from '@core/domain';
import { PrismaReviewRepository } from '@core/infra';
import { CreateReviewUseCase } from '@core/application';
import { ReviewController } from './review.controller';

@Module({
  imports: [],
  controllers: [ReviewController],
  providers: [
    CreateReviewUseCase,
    {
      provide: ReviewRepository,
      useClass: PrismaReviewRepository,
    },
  ],
})
export class ReviewModule {}
