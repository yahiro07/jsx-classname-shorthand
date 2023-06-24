import esbuild from "rollup-plugin-esbuild";

function bundle(namePart, format) {
  const ext = format === "es" ? ".mjs" : ".js";
  return {
    input: `src/${namePart}.ts`,
    external: (id) => !/^[./]/.test(id),
    plugins: [esbuild()],
    output: [{ file: `dist/${namePart}${ext}`, format }],
  };
}

export default [
  bundle("jsx-runtime", "es"),
  bundle("jsx-dev-runtime", "es"),
  bundle("jsx-runtime", "cjs"),
  bundle("jsx-dev-runtime", "cjs"),
];
