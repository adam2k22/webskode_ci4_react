import { rm } from 'node:fs/promises'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Built files carry a content hash in their name so browsers can cache them for a year; app/Views/app.php finds them through build/manifest.json.
// public/ also holds hand-written files, so only the build folder is emptied before each build.
const cleanBuild = { name: 'clean-build', apply: 'build', buildStart: () => rm('public/build', { recursive: true, force: true }) }

export default defineConfig({plugins:[react(),cleanBuild],publicDir:false,server:{port:5173,proxy:{'/api':'http://localhost:8080'}},build:{outDir:'public',emptyOutDir:false,assetsDir:'build',manifest:'build/manifest.json'}})
