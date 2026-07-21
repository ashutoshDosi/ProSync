import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  const config = app.get(ConfigService);
  app.use(cookieParser());
  await app.listen(config.get<number>('PORT') ?? 3001);
}
bootstrap();

//swagger doc add (API doc) @nestjs/swagger package