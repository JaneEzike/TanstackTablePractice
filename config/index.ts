const config = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  httpTimeout: 1000 * 10,
  idleTimeout: 1000 * 60 * 15,
  promptBeforeIdleTimeout: 1000 * 60 * 3,
  defaultPageSize: 10,
};

export default config;
