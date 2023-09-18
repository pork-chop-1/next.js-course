import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactScopedCssPlugin()],
  resolve: {
    alias: {
        // @ 替代为 src
      '@': resolve(__dirname, 'src'),
       // @component 替代为 src/component
      '@components': resolve(__dirname, 'src/components'),
    },
  },
  build: {
    sourcemap: true
  }
})
