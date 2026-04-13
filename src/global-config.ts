import { NestFastifyApplication } from '@nestjs/platform-fastify';

export const globalConfig = async (app: NestFastifyApplication) => {
  app.setGlobalPrefix('/api');
};
