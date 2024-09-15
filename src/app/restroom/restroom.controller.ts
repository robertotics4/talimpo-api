import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRestroomUseCase, FindRestroomsUseCase } from '@core/application';
import { CreateRestroomDto } from './dtos';

@Controller('api/restrooms')
@ApiTags('restroom')
export class RestroomController {
  constructor(
    private readonly createRestroomUseCase: CreateRestroomUseCase,
    private readonly findRestroomsUseCase: FindRestroomsUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateRestroomDto) {
    return await this.createRestroomUseCase.execute(dto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async find() {
    return await this.findRestroomsUseCase.execute();
  }
}
