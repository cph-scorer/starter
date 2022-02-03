import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import css from 'rollup-plugin-css-only';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const outputDir = 'dist';
const outputFile = `${outputDir}/bundle.js`;

export default {
  input: 'src/cph-scorer-starter.js',
  output: {
    sourcemap: !production,
    file: outputFile,
    format: 'system',
    name: null,
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production,
      },
      preprocess: autoPreprocess(),
      emitCss: true,
    }),

    css({ output: 'bundle.css' }),

    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),

    commonjs(),

    /** Production configuration */
    !production && serve(),

    !production && livereload(outputDir),

    production && del({ targets: `${outputDir}/*` }),

    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
  onwarn: (warn, next) =>
    /.*Unused CSS selector.*/.test(warn.toString()) || next(warn),
};

function serve() {
  const port = process.env.PORT ?? 5000;
  let started = false;
  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn(
          'npm',
          ['run', 'serve', '--', '--dev', `-p ${port}`],
          {
            stdio: ['ignore', 'inherit', 'inherit'],
            shell: true,
          },
        );
      }
    },
  };
}
