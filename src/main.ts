import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJs Basic with swaggers.')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-serivce')
    .setLicense(
      'MIT License',
      'https://github.com/git-scm/com/blob/main/MIT_SICENSE.txt',
    )
    .addServer('http://localhost:3000')

    .setVersion('1.0')
    .build();

  // instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
