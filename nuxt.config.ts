// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [join(currentDir, 'assets/css/main.css')],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-security'],
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", "data:", "https:"],
        'script-src': ["'self'", "'unsafe-inline'"]
      }
    }
  }
})
