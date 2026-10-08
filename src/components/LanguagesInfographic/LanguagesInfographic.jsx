import { useEffect, useState } from 'react'
import { SiCss, SiDart, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPython, SiTypescript } from 'react-icons/si'

const ORANGE = '#ff5a1f'
const INK = '#1b120e'
const PANEL = '#2a1c16'
const SOFT = '#ffe6d8'
const PEACH = '#ffb693'
const CREAM = '#fff6f0'
const MUTED = '#8a7a72'

const STEP_MS = 2600
const LINE_HEIGHT = 20
const TILE = 46
const TILE_GAP = 12

const k = text => ({ text, color: ORANGE })
const s = text => ({ text, color: PEACH })
const c = text => ({ text, color: MUTED })

const languages = [
  { name: 'JavaScript', file: 'app.js', icon: SiJavascript, code: [
    [k('const'), ' app = createApp()'],
    ['app.use(router)'],
    ['app.get(', s("'/work'"), ', show)'],
    [k('await'), ' app.launch()'],
    [c('// shipped by WebsKode')]
  ] },
  { name: 'TypeScript', file: 'types.ts', icon: SiTypescript, code: [
    [k('type'), ' Project = {'],
    ['  name: ', k('string')],
    ['  live: ', k('boolean')],
    ['}'],
    [k('const'), ' p: Project = load()']
  ] },
  { name: 'PHP', file: 'Api.php', icon: SiPhp, code: [
    [k('<?php')],
    [k('class'), ' Api ', k('extends'), ' Controller {'],
    ['  ', k('function'), ' index() {'],
    ['    ', k('return'), ' view(', s("'home'"), ');'],
    ['  }'],
    ['}']
  ] },
  { name: 'Python', file: 'main.py', icon: SiPython, code: [
    [k('def'), ' grow(data):'],
    ['    clean = tidy(data)'],
    ['    ', k('return'), ' model.fit(clean)'],
    [''],
    ['report = grow(sales)']
  ] },
  { name: 'HTML', file: 'index.html', icon: SiHtml5, code: [
    [k('<main'), ' class=', s('"hero"'), k('>')],
    ['  ', k('<h1>'), 'Hello, world', k('</h1>')],
    ['  ', k('<a'), ' href=', s('"/contact"'), k('>'), 'Start', k('</a>')],
    [k('</main>')]
  ] },
  { name: 'CSS', file: 'style.css', icon: SiCss, code: [
    [k('.hero'), ' {'],
    ['  display: ', s('grid'), ';'],
    ['  gap: ', s('2rem'), ';'],
    ['  color: ', s('#ff5a1f'), ';'],
    ['}']
  ] },
  { name: 'SQL', file: 'schema.sql', icon: SiMysql, code: [
    [k('SELECT'), ' name, total'],
    [k('FROM'), ' orders'],
    [k('WHERE'), ' status = ', s("'paid'")],
    [k('ORDER BY'), ' total ', k('DESC'), ';']
  ] },
  { name: 'Dart', file: 'main.dart', icon: SiDart, code: [
    [k('void'), ' main() {'],
    ['  runApp(', k('const'), ' MyApp());'],
    ['}']
  ] }
]

const dockStart = (560 - (languages.length * TILE + (languages.length - 1) * TILE_GAP)) / 2

export default function LanguagesInfographic() {
  const [active, setActive] = useState(0)
  const { name, file, icon: FileIcon, code } = languages[active]

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setActive(current => (current + 1) % languages.length), STEP_MS)
    return () => clearInterval(timer)
  }, [])

  return <div className="live-infographic">
    <svg viewBox="0 0 560 480" role="img" aria-label="Animated code editor cycling through the languages WebsKode works in: JavaScript, TypeScript, PHP, Python, HTML, CSS, SQL and Dart">
      <defs><clipPath id="lang-code-clip"><rect x="150" y="146" width="292" height="166"/></clipPath></defs>

      <circle cx="280" cy="226" r="186" fill={SOFT}/>
      <text className="lig-float" x="44" y="168" style={{ fontSize: 38 }} fill={PEACH}>{'{ }'}</text>
      <text className="lig-float" x="466" y="316" style={{ fontSize: 30, animationDelay: '-0.7s' }} fill={PEACH}>{'</>'}</text>

      {/* Editor */}
      <rect className="lig-shadow" x="110" y="110" width="340" height="232" rx="14" fill={INK}/>
      <path d="M110 124a14 14 0 0 1 14-14h312a14 14 0 0 1 14 14v16h-340z" fill={PANEL}/>
      <circle cx="127" cy="125" r="3.4" fill={ORANGE}/><circle cx="139" cy="125" r="3.4" fill={PEACH}/><circle cx="151" cy="125" r="3.4" fill={CREAM}/>
      <path d="M166 140v-18a6 6 0 0 1 6-6h102a6 6 0 0 1 6 6v18z" fill={INK}/>
      <path d="M110 318h340v10a14 14 0 0 1-14 14h-312a14 14 0 0 1-14-14z" fill={PANEL}/>

      <g key={active}>
        <FileIcon x="175" y="122" size={12} color={ORANGE}/>
        <text x="193" y="132" style={{ fontSize: 10 }} fill={CREAM}>{file}</text>
        <text x="124" y="334" style={{ fontSize: 9.5 }} fill={PEACH}>{name}</text>
        <text x="436" y="334" textAnchor="end" style={{ fontSize: 9.5 }} fill={MUTED}>{code.length} lines</text>
        <rect className="lig-progress" x="110" y="316" width="340" height="2" fill={ORANGE}/>

        {code.map((_, i) => <text className="lig-code" key={i} x="138" y={166 + i * LINE_HEIGHT} textAnchor="end" fill="#6b5a52">{i + 1}</text>)}
        <g clipPath="url(#lang-code-clip)">
          {code.map((parts, i) => <text className="lig-code" key={i} x="152" y={166 + i * LINE_HEIGHT} xmlSpace="preserve" fill={CREAM}>
            {parts.map((part, j) => typeof part === 'string' ? part : <tspan key={j} fill={part.color}>{part.text}</tspan>)}
          </text>)}
          {code.map((_, i) => <g className="lig-typehead" style={{ animationDelay: `${i * 0.13}s` }} key={i}>
            <rect x="150" y={152 + i * LINE_HEIGHT} width="292" height={LINE_HEIGHT} fill={INK}/>
            <rect x="150" y={155 + i * LINE_HEIGHT} width="2" height="14" fill={ORANGE}/>
          </g>)}
        </g>

        <g className="lig-pop">
          <rect x="352" y="88" width="116" height="32" rx="16" fill={ORANGE} stroke="#fffaf7" strokeWidth="3"/>
          <text x="410" y="109" textAnchor="middle" style={{ fontSize: 13 }} fill="#fff">{name}</text>
        </g>
      </g>

      {/* Language dock */}
      {languages.map(({ name: label, icon: Icon }, i) => {
        const x = dockStart + i * (TILE + TILE_GAP)
        return <g className={i === active ? 'lig-tile is-active' : 'lig-tile'} key={label}>
          <rect x={x} y="372" width={TILE} height={TILE} rx="13"/>
          <Icon x={x + 12} y="384" size={22}/>
        </g>
      })}
    </svg>
  </div>
}
