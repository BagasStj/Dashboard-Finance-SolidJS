import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import solidPlugin from 'vite-plugin-solid';


export default defineConfig({
  plugins: [solid() , solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
})
