import * as Vite from 'vite';
import path from 'node:path';
import viteReactPlugin from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default Vite.defineConfig({
  plugins: [
    viteReactPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lotti',
      formats: ['es', 'umd'],
      fileName: (format) => `lotti.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
