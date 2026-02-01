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
  },
  app: {
    head: {
      title: 'Halalmu - Global Halal Marketplace',
      titleTemplate: '%s | Halalmu',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The trusted global marketplace for premium halal products. Shop cosmetics, food, fashion and more with confidence.' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  }
}
  },
  runtimeConfig: {
  public: {
    apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api/v1',
    appEnv: process.env.NUXT_APP_ENV || 'development'
  }
}
})
