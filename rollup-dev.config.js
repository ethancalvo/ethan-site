import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
export default [
  {
    input: "src/js/main.js",
    output: {
      file: "public/js/main.js",
      format: "es",
    },
    plugins: [
      terser(),
      postcss({
        plugins: [autoprefixer],
      }),
    ],
  },
];
