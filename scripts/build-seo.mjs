// Writes app/Data/seo.json (per-page tags for the server) and public/sitemap.xml from src/data/seo.js.
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const vite = await createServer({ root, logLevel: 'error', appType: 'custom', server: { middlewareMode: true, ws: false } })

try {
  const { seoManifest } = await vite.ssrLoadModule('/src/data/seo.js')
  const manifest = seoManifest()
  const urls = Object.values(manifest.routes).map(route => route.canonical)

  await mkdir(resolve(root, 'app/Data'), { recursive: true })
  await writeFile(resolve(root, 'app/Data/seo.json'), JSON.stringify(manifest, null, 1) + '\n')
  await writeFile(resolve(root, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`)

  console.log(`SEO: ${urls.length} pages written to app/Data/seo.json and public/sitemap.xml`)
} finally {
  await vite.close()
}
