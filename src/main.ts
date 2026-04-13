import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { PROVIDERS } from './shared/application/constants/providers';
import { EnvConfigService } from './shared/application/env-config/env-config.interface';
import { globalConfig } from './global-config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const envConfig = app.get<EnvConfigService>(PROVIDERS.ENV_CONFIG_SERVICE);
  console.log(`Running in port ${envConfig.getPort()}`);

  await globalConfig(app);

  await app.listen(envConfig.getPort());
}
bootstrap();
