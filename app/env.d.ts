declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Application
      NODE_ENV: 'development' | 'production' | 'test' | 'staging';
      PORT: string;
      HOST: string;
      APP_NAME: string;
      APP_VERSION: string;

      // Container
      HOSTNAME: string;
      POD_NAME: string;
      CONTAINER_NAME: string;
      NODE_NAME: string;
      NAMESPACE: string;

      // Database
      DATABASE_URL: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_SSL: 'true' | 'false';

      // Redis
      REDIS_URL: string;
      REDIS_HOST: string;
      REDIS_PORT: string;
      REDIS_PASSWORD: string;
      REDIS_DB: string;

      // External Services
      API_BASE_URL: string;
      EXTERNAL_SERVICE_URL: string;
      EXTERNAL_SERVICE_API_KEY: string;

      // Security
      JWT_SECRET: string;
      JWT_EXPIRES_IN: string;
      ENCRYPTION_KEY: string;

      // Monitoring & Logging
      LOG_LEVEL: 'error' | 'warn' | 'info' | 'debug' | 'trace';
      SENTRY_DSN: string;
      NEW_RELIC_LICENSE_KEY: string;

      // Health Check Configuration
      HEALTH_CHECK_TIMEOUT: string;
      HEALTH_CHECK_INTERVAL: string;

      // AWS (if using AWS services)
      AWS_REGION: string;
      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_S3_BUCKET: string;

      // Optional variables (can be undefined)
      DEBUG?: string;
      CORS_ORIGIN?: string;
      RATE_LIMIT_MAX?: string;
      CACHE_TTL?: string;
    }
  }
}

// Export empty object to make this a module
export {};
