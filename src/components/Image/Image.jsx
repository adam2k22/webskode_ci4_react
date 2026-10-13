// Every resized copy written by scripts/optimize-images.mjs, grouped so an <img> can offer all widths of its picture.
const files = import.meta.glob('../../assets/**/*.webp', { eager: true, import: 'default' })
const baseOf = path => path.replace(/-\d+\.webp$/, '')
const widthsByBase = {}
for (const [path, url] of Object.entries(files)) (widthsByBase[baseOf(path)] ||= []).push(`${url} ${path.match(/-(\d+)\.webp$/)[1]}w`)
const srcSets = Object.fromEntries(Object.entries(files).map(([path, url]) => [url, widthsByBase[baseOf(path)].join(', ')]))

// Images load lazily unless told otherwise; `sizes` is the width the image takes up on screen.
export default function Image({ src, alt = '', sizes = '(max-width: 760px) 92vw, 50vw', ...props }) {
  return <img src={src} srcSet={srcSets[src]} sizes={srcSets[src] && sizes} alt={alt} loading="lazy" decoding="async" {...props}/>
}
