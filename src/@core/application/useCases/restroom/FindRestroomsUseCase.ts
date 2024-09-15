import {
  IFindRestroomsUseCase,
  Restroom,
  RestroomRepository,
} from '@core/domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindRestroomsUseCase implements IFindRestroomsUseCase {
  constructor(private readonly restroomRepository: RestroomRepository) {}

  async execute(): Promise<Restroom[]> {
    return await this.restroomRepository.find();
  }
}
