import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiKeyMiddleware } from './common/security/middleware/api-key.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security
  app.use(ApiKeyMiddleware);

  // Initialize
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
