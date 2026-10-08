import engineerImage from '../../assets/why-us-engineer.png'
import designerImage from '../../assets/why-us-designer.png'

// Coordinates are in image pixels; both illustrations are 1122 × 1402.
const characters = {
  engineer: {
    image: engineerImage,
    skin: ['#e9853d', '#f6924c'],
    lash: '#5a2f17',
    eyes: [{ cx: 521, cy: 428, rx: 40, ry: 31 }, { cx: 648, cy: 440, rx: 37, ry: 32 }],
    chips: [{ x: 870, y: 790, label: '</>' }, { x: 1000, y: 800, label: '{ }' }, { x: 935, y: 780, label: 'JS' }]
  },
  designer: {
    image: designerImage,
    skin: ['#f0814a', '#f98a58'],
    lash: '#2a140b',
    eyes: [{ cx: 493, cy: 532, rx: 48, ry: 33 }, { cx: 628, cy: 541, rx: 40, ry: 33 }],
    chips: [{ x: 800, y: 850, label: 'UI' }, { x: 900, y: 860, label: 'Aa' }, { x: 720, y: 855, label: 'UX' }],
    lamp: { cx: 925, cy: 770, rx: 170, ry: 140 }
  }
}

export default function LiveCharacter({ character, className = '', alt }) {
  const { image, skin, lash, eyes, chips, lamp } = characters[character]
  const skinId = `live-character-skin-${character}`
  const lampId = `live-character-lamp-${character}`

  return <figure className={`live-character ${className}`}>
    <img src={image} alt={alt}/>
    <svg viewBox="0 0 1122 1402" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={skinId} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={skin[0]}/><stop offset="1" stopColor={skin[1]}/></linearGradient>
        <radialGradient id={lampId}><stop offset="0" stopColor="#fff3c4" stopOpacity=".7"/><stop offset="1" stopColor="#fff3c4" stopOpacity="0"/></radialGradient>
      </defs>

      {lamp && <ellipse className="live-character-lamp" {...lamp} fill={`url(#${lampId})`}/>}

      {eyes.map(({ cx, cy, rx, ry }) => <g className="live-character-lid" key={cx}>
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${skinId})`}/>
        <path d={`M${cx - rx + 6} ${cy + ry - 14}q${rx - 6} 22 ${2 * rx - 12} 0`} fill="none" stroke={lash} strokeWidth="5" strokeLinecap="round"/>
      </g>)}

      {chips.map(({ x, y, label }, i) => <g className="live-character-chip" style={{ animationDelay: `${i * 1.1}s` }} key={label}>
        <rect x={x - 52} y={y - 34} width="104" height="68" rx="20" fill="#1b120e"/>
        <text x={x} y={y + 13} textAnchor="middle" fill="#ff5a1f">{label}</text>
      </g>)}
    </svg>
  </figure>
}
