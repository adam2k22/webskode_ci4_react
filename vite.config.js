import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({plugins:[react()],publicDir:false,server:{port:5173,proxy:{'/api':'http://localhost:8080'}},build:{outDir:'public',emptyOutDir:false,rollupOptions:{output:{entryFileNames:'assets/app.js',chunkFileNames:'assets/[name].js',assetFileNames:(asset)=>asset.name?.endsWith('.css')?'assets/app.css':'assets/[name][extname]'}}}})
