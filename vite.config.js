import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Resume-Builder/',
  plugins: [react()],
  server: {
    port: 8000,
  },
})
