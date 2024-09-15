import {
  IFindRestroomsUseCase,
  Restroom,
  RestroomRepository,
} from '@core/domain';

export class FindRestroomsUseCase implements IFindRestroomsUseCase {
  constructor(private readonly restroomRepository: RestroomRepository) {}

  async execute(): Promise<Restroom[]> {
    return await this.restroomRepository.find();
  }
}
