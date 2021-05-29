import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const logger = new Logger();
  logger.log('Servidor corriendo en el puerto ' + port);
  await app.listen(port);
}
bootstrap();
