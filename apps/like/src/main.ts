import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '../../../libs/utils/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3006;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // Strips properties that are not in the DTO
      forbidNonWhitelisted: true,  // Throws error if any unknown property is present
      transform: true,  // Automatically transforms query and param strings into appropriate types (like numbers, UUIDs)
    }),
  );

  if (process.env.NODE_ENV !== 'production') {
    setupSwagger(app);
  }
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
