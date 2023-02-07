import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appSettings } from 'config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appSettings.port);
}
bootstrap();
