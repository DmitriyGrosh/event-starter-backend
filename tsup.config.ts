import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  sourcemap: true,
  clean: true,
  dts: true,
  splitting: false,
  bundle: true,
  minify: false,
  target: 'node18',
  outDir: 'dist',
  platform: 'node',
  noExternal: [
    '@fastify/cors',
    '@fastify/jwt',
    '@fastify/rate-limit',
    '@fastify/sensible',
    '@fastify/swagger',
    '@fastify/swagger-ui',
  ],
  external: [
    // Node.js built-in modules
    'crypto',
    'fs',
    'path',
    'url',
    'stream',
    'util',
    'events',
    'os',
    'http',
    'https',
    'net',
    'tls',
    'zlib',
    'dns',
    'module',
    'buffer',
    'string_decoder',
    'querystring',
    'assert',
    // Development dependencies
    'bcrypt',
    '@mapbox/node-pre-gyp',
    'mock-aws-s3',
    'aws-sdk',
    'nock'
  ],
  esbuildOptions(options) {
    options.banner = {
      js: `
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
`,
    }
  },
  async onSuccess() {
    // Copy static assets
    const { copyFile, mkdir } = await import('fs/promises');
    const { join } = await import('path');
    try {
      await mkdir(join('dist', 'static'), { recursive: true });
      await copyFile('static/logo.svg', join('dist', 'static', 'logo.svg'));
    } catch (error) {
      console.warn('Warning: Could not copy static assets:', error.message);
    }
  }
}) 