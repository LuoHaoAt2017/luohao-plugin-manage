const path = require('path');
const pkg = require('./package.json');
// import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';

const resolve = function(...args) {
  return path.resolve(__dirname, ...args);
};

const extensions = ['.ts', '.js'];

export default {
  input: resolve('./src/index.ts'),
  output: {
    file: resolve('./', pkg.main),
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    // commonjs({
    //   exclude: ['node_modules'],
    //   extensions: ['.ts', '.js']
    // }),
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules'],
      extensions
    }),
    nodeResolve({
      extensions: ['.ts', '.js']
    }),
  ],
  // external: [/@babel\/runtime/]
}