import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/Dropdown.js',
  output: {
    file: 'lib/main.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs({
      namedExports: {
        'src/Dropdown.js': ['DropdownContent', 'DropdownMenu', 'DropdownTrigger']
      }
    })
  ],
  external: id => /^react|styled-jsx/.test(id)
};