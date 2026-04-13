import { Global, Module } from '@nestjs/common';
import { EnvConfigServiceImpl } from './env-config.service';
import { PROVIDERS } from 'src/shared/application/constants/providers';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: PROVIDERS.ENV_CONFIG_SERVICE,
      useFactory: (configService: ConfigService) => {
        return new EnvConfigServiceImpl(configService);
      },
      inject: [ConfigService],
    },
  ],
  exports: [PROVIDERS.ENV_CONFIG_SERVICE],
})
export class EnvConfigModule {}
