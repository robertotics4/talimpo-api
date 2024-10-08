import { Restroom } from '@core/domain';

export abstract class RestroomRepository {
  abstract find(): Promise<Restroom[]>;
  abstract create(
    data: Omit<Restroom, 'id' | 'rating' | 'createdAt' | 'updatedAt'>,
  ): Promise<Restroom>;
}
