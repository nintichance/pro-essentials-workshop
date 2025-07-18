type Environment = "development" | "production" | "staging";

// how to specify dynamics keys when you have a union
// turn unions in object keys
type Configurations =
Record<Environment,
{
  apiBaseUrl: string,
  timeout: number;
}>;

// Map types are written like indexed signatures
type ConfigurationsMapped = {
  [Env in Environment]: {
    apiBaseUrl: string;
    timeout: number;
  }
}

const configurations: Configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
  // @ts-expect-error
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};

