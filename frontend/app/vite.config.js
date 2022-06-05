const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const path = require('node:path');

const materialCssBaselineFixUp = {
  name: 'materialCssBaselineFixUp',
  setup(build) {
    build.onResolve({ filter: /^CssBaseline$/ }, async () => {
      return {
        path: path.resolve(process.cwd(), 'node_modules/@mui/material/CssBaseline'),
      };
    });
  },
};

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [materialCssBaselineFixUp],
    },
  },
});
