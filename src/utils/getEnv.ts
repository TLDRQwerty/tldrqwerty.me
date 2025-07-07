export function getEnvVar(key: string): string {
  // Try Vite/Astro env
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }

  // Fallback to Node env
  if (typeof process !== 'undefined' && process.env[key]) {
    return process.env[key];
  }

  throw new Error(`Missing required environment variable: ${key}`);
}

