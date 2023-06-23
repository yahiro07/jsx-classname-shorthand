import esbuild from "rollup-plugin-esbuild";

function bundle(namePart) {
  return {
    input: `src/${namePart}.ts`,
    external: (id) => !/^[./]/.test(id),
    plugins: [esbuild()],
    output: [{ file: `${namePart}.mjs`, format: "es" }],
  };
}

export default [bundle("jsx-dev-runtime"), bundle("jsx-runtime")];
