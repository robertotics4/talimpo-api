import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInUseCase } from '@core/application';
import { SignInDto } from './dtos';

@Controller('api/sign-in')
@ApiTags('users')
export class SessionController {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() dto: SignInDto) {
    return await this.signInUseCase.execute(dto);
  }
}
