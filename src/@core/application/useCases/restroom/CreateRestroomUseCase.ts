import { CreateRestroomDto } from '@app/restroom/dtos';
import {
  ICreateRestroomUseCase,
  Restroom,
  RestroomRepository,
} from '@core/domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateRestroomUseCase implements ICreateRestroomUseCase {
  constructor(private readonly restroomRepository: RestroomRepository) {}

  async execute(dto: CreateRestroomDto): Promise<Restroom> {
    return await this.restroomRepository.create(dto);
  }
}
