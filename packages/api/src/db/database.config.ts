import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import configuration from '../app/app.config';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: configuration.database,
  entities: [],
};

if (configuration.env === 'production') {
  Object.assign(config, {
    extra: {
      ssl: { rejectUnauthorized: false },
    },
  });
}

export default config;
