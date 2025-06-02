import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  outDir: 'dist',
  target: 'node18',
  noExternal: ['@fastify/cors', '@fastify/sensible'],
  banner: {
    js: `import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);`
  },
  // Copy Prisma WASM files to dist
  async onSuccess() {
    const { copyFile, mkdir } = await import('fs/promises');
    const { join } = await import('path');
    
    try {
      await mkdir(join('dist', 'runtime'), { recursive: true });
      await copyFile(
        'node_modules/@prisma/client/runtime/query_engine_bg.postgresql.wasm',
        join('dist', 'runtime', 'query_engine_bg.postgresql.wasm')
      );
    } catch (error) {
      console.error('Error copying Prisma WASM files:', error);
    }
  }
}) 