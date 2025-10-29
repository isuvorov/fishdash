import { defineConfig } from 'bunup';

// export const options = defineConfig({
//   entry: ['src/**/*.ts', 'src/**/*.tsx'],
//   sourceBase: './src',
// //   treeshake: true,
//   sourcemap: true,
// //   splitting: false,
// //   platform: 'node',
//   // shims: true,
//   shims: false,
//   dts: true,
//   outDir: 'lib',
// });

// export const optionsESM = defineConfig({
//   ...options,
//   format: 'esm',
//   dts: true,
// //   outExtension: () => ({ js: '.js', dts: '.d.ts' }),
//   outDir: 'lib',
// });
    
// export const optionsCJS = defineConfig({
//   ...options,
//   format: 'cjs',
// //   dts: {
// //     compilerOptions: {
// //       target: 'ES5',
// //       module: 'commonjs',
// //       moduleResolution: 'node',
// //     },
// //   },
// //   outExtension: () => ({ js: '.js', dts: '.d.ts' }),
//   outDir: 'cjs',
// });

// export default [optionsCJS, optionsESM];
// export default [optionsESM];
export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  sourceBase: './src',
  format: 'esm',
  outDir: 'lib-bunup',
});