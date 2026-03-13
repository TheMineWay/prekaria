import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiKeyGuard } from './common/security/guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security
  app.useGlobalGuards(new ApiKeyGuard());

  // Initialize
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
