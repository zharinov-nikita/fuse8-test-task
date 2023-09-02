/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@shared': '/src/00-shared',
            '@entities': '/src/01-entities',
            '@features': '/src/02-features',
            '@widgets': '/src/03-widgets',
            '@pages': '/src/04-pages',
            '@process': '/src/05-process',
            '@app': '/src/06-app',
            '@tests': '/tests',
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.js',
    },
})
