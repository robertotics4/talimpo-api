import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;

  await app.listen(PORT, () => {
    Logger.log(`[Start] Server started on port ${PORT}`);
  });
}
bootstrap();
