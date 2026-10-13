// Writes resized WebP copies (name-<width>.webp) next to every PNG in src/assets. The app imports those, never the PNGs.
import { readdir, stat } from 'node:fs/promises'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const assets = join(root, 'src/assets')

// Phone and desktop widths; the logo is only ever shown small.
const defaultWidths = [720, 1280]
const widthsFor = { 'webskode-logo.png': [300, 600] }

const modified = file => stat(file).then(info => info.mtimeMs, () => 0)

let written = 0
for (const entry of await readdir(assets, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.png')) continue
  const source = join(entry.parentPath, entry.name)
  const { width } = await sharp(source).metadata()
  // Never upscale: a source narrower than the target keeps its own width.
  const widths = [...new Set((widthsFor[entry.name] ?? defaultWidths).map(target => Math.min(target, width)))]

  for (const target of widths) {
    const output = source.replace(/\.png$/, `-${target}.webp`)
    if (await modified(output) > await modified(source)) continue
    await sharp(source).resize({ width: target }).webp({ quality: 78, effort: 6 }).toFile(output)
    console.log(`Images: ${relative(root, output)} (${Math.round((await stat(output)).size / 1024)} KB)`)
    written++
  }
}
console.log(`Images: ${written} file(s) written`)
