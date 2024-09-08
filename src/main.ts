import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.SERVER_PORT;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (validationErrors = []) => {
        return new BadRequestException(
          validationErrors.map((error) => ({
            field: error.property,
            errors: Object.values(error.constraints || {}),
          })),
        );
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('TaLimpo API')
    .setDescription('API que contém as regras de negócio do app TáLimpo!')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'token',
    )
    .addSecurityRequirements('token')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.enableCors({ origin: true, credentials: true });

  await app.listen(PORT, () => {
    Logger.log(`[Start] Server started on port ${PORT}`);
    Logger.log(`[Docs] up in http://localhost:${PORT}/api-docs`);
  });
}
bootstrap();
