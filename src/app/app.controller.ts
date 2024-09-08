import { Controller, Get } from '@nestjs/common';
import { ApiInfo, AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApiInfo(): ApiInfo {
    return this.appService.getApiInfo();
  }
}
