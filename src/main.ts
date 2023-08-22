import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { WrapResponseInterceptor } from './common/interceptors/wrap-response/wrap-response.interceptor';
// import { TimeoutInterceptor } from './common/interceptors/timeout/timeout.interceptor';
// import { HttpExceptionFilter } from './common/filter/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('NestJS base')
    .setDescription('This is a NestJS Base project')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(
  //   new WrapResponseInterceptor(),
  //   new TimeoutInterceptor(),
  // );

  await app.listen(3000);
}
bootstrap();
