import { ConfigService } from '@nestjs/config';
import { EnvConfigService } from 'src/shared/application/env-config/env-config.interface';

export class EnvConfigServiceImpl implements EnvConfigService {
  constructor(private readonly configService: ConfigService) {}

  getPort(): number {
    return +(this.configService.get<string>('PORT') as string);
  }
}
