import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //thus ensuring all endpoints are protected from receiving incorrect data. https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(new ValidationPipe()); //Abilita validações e garante que os dados passados estão no formato correto
  await app.listen(3000);
}
bootstrap();
