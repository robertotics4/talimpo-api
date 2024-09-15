import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRestroomUseCase } from '@core/application';
import { CreateRestroomDto } from './dtos';

@Controller('api/restrooms')
@ApiTags('restroom')
export class RestroomController {
  constructor(private readonly createRestroomUseCase: CreateRestroomUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateRestroomDto) {
    return await this.createRestroomUseCase.execute(dto);
  }
}
