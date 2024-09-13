import { CreateRestroomDto } from '@app/restroom/dtos';
import { Restroom } from '@core/domain/entities';

export interface ICreateRestroomUseCase {
  execute(dto: CreateRestroomDto): Promise<Restroom>;
}
