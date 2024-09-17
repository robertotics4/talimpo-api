import { CreateReviewDto } from '@app/review/dtos';
import { ICreateReviewUseCase, Review, ReviewRepository } from '@core/domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateReviewUseCase implements ICreateReviewUseCase {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(dto: CreateReviewDto): Promise<Review> {
    return await this.reviewRepository.create(dto);
  }
}
