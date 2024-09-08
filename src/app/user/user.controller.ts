import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '../../@core/application/useCases/user/CreateUserUseCase';
import { CreateUserDto } from './dtos/CreateUserDto';

@Controller('api/users')
@ApiTags('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateUserDto) {
    return await this.createUserUseCase.execute(dto);
  }
}
