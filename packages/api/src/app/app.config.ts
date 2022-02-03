const configuration = {
  env: process.env.NODE_ENV ?? 'DEV',
  database:
    process.env.DATABASE_URL ?? 'postgres://root:root@127.0.0.1:5432/root',
  swaggerPath: process.env.SWAGGER_PATH ?? 'api',
  port: process.env.PORT ?? 8080,
} as const;

export default configuration;
