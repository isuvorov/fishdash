import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  format: 'esm',
  outDir: 'lib-tsup',
  // shims: false,
  dts: true,
  splitting: false,
  clean: true,
  sourcemap: true,
});