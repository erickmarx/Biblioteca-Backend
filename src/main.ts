import { NestFactory } from '@nestjs/core';
import { MainIndex } from './modules/mainIndex';

async function bootstrap() {
  const app = await NestFactory.create(MainIndex);
  await app.listen(3000);
}
bootstrap();
