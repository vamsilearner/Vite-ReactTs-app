import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from "vite-plugin-windiCSS"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
})
