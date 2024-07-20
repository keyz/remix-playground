import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    babelTransformPlugin(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});

function babelTransformPlugin(): Plugin {
  return {
    name: "babel-transform",
    enforce: "pre",
    transform(code, id) {
      if (id.startsWith("\u0000virtual:")) {
        return null;
      }
      if (id.includes("/node_modules/")) {
        return null;
      }
      if (!/\.tsx?$/.test(id)) {
        return null;
      }

      console.log("transforming", JSON.stringify(id));

      // TODO: actually transform the code
      const result = [
        code,
        "",
        `console.log("transformed", ${JSON.stringify(id)});`,
        "",
      ].join("\n");

      return {
        code: result,
        map: null,
      };
    },
  };
}
