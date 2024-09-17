import { CreateReviewDto } from '@app/review/dtos';
import { Review } from '@core/domain/entities';

export interface ICreateReviewUseCase {
  execute(dto: CreateReviewDto): Promise<Review>;
}
