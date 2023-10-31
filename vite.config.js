import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://aayushtmG.github.io/Resume-Builder",
  server: {
    port: 8000,
  },
})
