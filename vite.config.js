import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWAOptions = {
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
  manifest: {
    name: 'PWA2',
    start_url: './',
    scope: './',
    short_name: 'PWA2 - by AZ',
    description: 'This is the second version of my PWA :)',
    theme_color: '#ff5500',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }
    ],
    workbox: {
      sourcemap: true  
    }  
  }
}
      

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(vitePWAOptions)
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
