import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateReviewUseCase } from '@core/application';
import { CreateReviewDto } from './dtos';

@Controller('api/reviews')
@ApiTags('review')
export class ReviewController {
  constructor(private readonly createReviewUseCase: CreateReviewUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateReviewDto) {
    return await this.createReviewUseCase.execute(dto);
  }
}
