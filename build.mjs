import { build } from 'esbuild';

build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: false,
  platform: 'node',
  format: 'esm',
  sourcemap: true,
  target: 'es2020',
  outExtension: { '.js': '.js' },
}).catch(() => process.exit(1));
