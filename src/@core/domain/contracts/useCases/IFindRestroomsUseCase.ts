import { Restroom } from '@core/domain/entities';

export interface IFindRestroomsUseCase {
  execute(): Promise<Restroom[]>;
}
