import { useEffect, useState } from 'react'
import { Code2, Database, Globe2, Megaphone, MonitorCog, Smartphone } from 'lucide-react'

const ORANGE = '#ff5a1f'
const ORANGE_DARK = '#dc3d0b'
const INK = '#1b120e'
const SOFT = '#ffe6d8'
const PEACH = '#ffb693'
const CREAM = '#fff6f0'
const LINE = '#e6d5cb'

const CYCLE_MS = 4200
const CENTER = { x: 280, y: 240 }
const ORBIT_RADIUS = 215
const services = [Globe2, Code2, Database, MonitorCog, Smartphone, Megaphone]
const cards = [149, 240, 331]

const pop = delay => ({ className: 'lig-pop', style: { animationDelay: `${delay}s` } })
const wipe = delay => ({ className: 'lig-wipe', style: { animationDelay: `${delay}s` } })
const draw = delay => ({ className: 'lig-draw', pathLength: 1, style: { animationDelay: `${delay}s` } })

export default function LiveInfographic() {
  // Remounting the scene replays its one-shot build animations.
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setCycle(current => current + 1), CYCLE_MS)
    return () => clearInterval(timer)
  }, [])

  return <div className="live-infographic">
    <svg viewBox="0 0 560 480" role="img" aria-label="Animated illustration of WebsKode building and launching a website, surrounded by its six services">
      <defs><linearGradient id="lig-hero" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={ORANGE}/><stop offset="1" stopColor={ORANGE_DARK}/></linearGradient></defs>

      <circle cx={CENTER.x} cy={CENTER.y} r="178" fill={SOFT}/>
      <circle className="lig-ring" cx={CENTER.x} cy={CENTER.y} r={ORBIT_RADIUS} fill="none" stroke={PEACH} strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round"/>

      {/* Services orbit */}
      <g className="lig-orbit">
        {services.map((Icon, i) => {
          const angle = (i * Math.PI) / 3
          const x = CENTER.x + ORBIT_RADIUS * Math.cos(angle)
          const y = CENTER.y + ORBIT_RADIUS * Math.sin(angle)
          return <g className="lig-upright" key={i}>
            <circle cx={x} cy={y} r="22" fill={i % 2 ? INK : ORANGE} stroke="#fffaf7" strokeWidth="3"/>
            <Icon x={x - 10} y={y - 10} size={20} color="#fff" strokeWidth={2}/>
          </g>
        })}
      </g>

      {/* Browser window */}
      <g className="lig-shadow">
        <rect x="135" y="128" width="290" height="224" rx="14" fill="#fff"/>
        <path d="M135 142a14 14 0 0 1 14-14h262a14 14 0 0 1 14 14v12h-290z" fill={INK}/>
      </g>
      <circle cx="151" cy="141" r="3.2" fill={ORANGE}/><circle cx="162" cy="141" r="3.2" fill={PEACH}/><circle cx="173" cy="141" r="3.2" fill={CREAM}/>
      <rect x="190" y="133" width="150" height="16" rx="8" fill="#3a2a22"/>
      <text x="200" y="144.5" style={{ fontSize: 9 }} fill="#ffd9c7">webskode.com</text>
      <rect className="lig-blink" x="263" y="136.5" width="1.5" height="9" fill="#ffd9c7"/>

      <g className="lig-scene" key={cycle}>
        <rect {...pop(0)} x="149" y="164" width="16" height="8" rx="2.5" fill={ORANGE}/>
        <path {...draw(0.05)} d="M330 168h20M358 168h20M386 168h25" stroke={LINE} strokeWidth="3" strokeLinecap="round"/>

        <rect {...wipe(0.15)} x="149" y="182" width="262" height="72" rx="8" fill="url(#lig-hero)"/>
        <g {...pop(0.35)}><circle cx="372" cy="204" r="8" fill={PEACH}/><path d="M322 254l30-38 16 20 11-11 24 29z" fill="#ff8a55"/></g>
        <path {...draw(0.35)} d="M163 202h86M163 214h60" stroke="#fff" strokeWidth="5" strokeLinecap="round"/>

        {cards.map((x, i) => <g {...pop(0.5 + i * 0.1)} key={x}>
          <rect x={x} y="264" width="80" height="60" rx="7" fill={CREAM} stroke="#ffd9c7"/>
          <circle cx={x + 16} cy="281" r="8" fill={SOFT}/><circle cx={x + 16} cy="281" r="3" fill={ORANGE}/>
          <path d={`M${x + 10} 301h50M${x + 10} 311h34`} stroke={LINE} strokeWidth="3" strokeLinecap="round"/>
        </g>)}
        <path {...draw(0.8)} d="M149 338h110" stroke={LINE} strokeWidth="3" strokeLinecap="round"/>

        <g {...pop(0.9)}><rect x="163" y="226" width="58" height="16" rx="8" fill="#fff"/><path d="M175 234h34" stroke={ORANGE} strokeWidth="3" strokeLinecap="round"/></g>
        <circle className="lig-ripple" cx="205" cy="236" r="12" fill="#fff"/>
        <g className="lig-cursor"><path transform="translate(205 236)" d="M0 0v16l4.5-4 3 6.5 2.5-1.1-3-6.4h6z" fill={INK} stroke="#fff" strokeWidth="1.2" strokeLinejoin="round"/></g>

        {/* Launch results */}
        <g className="lig-float"><g {...pop(1.7)}>
          <rect x="372" y="106" width="74" height="30" rx="15" fill={INK}/>
          <circle className="lig-pulse" cx="390" cy="121" r="5" fill={ORANGE}/><circle cx="390" cy="121" r="4.5" fill={ORANGE}/>
          <text x="401" y="125.5" style={{ fontSize: 12 }} fill="#fff">LIVE</text>
        </g></g>

        <g className="lig-float" style={{ animationDelay: '-1.2s' }}><g {...pop(1.85)}>
          <rect className="lig-shadow" x="84" y="316" width="128" height="80" rx="12" fill="#fff"/>
          <text x="96" y="334" style={{ fontSize: 9 }} fill="#8a7a72">Conversions</text>
          <text x="96" y="353" style={{ fontSize: 16 }} fill={INK}>+128%</text>
          <circle cx="194" cy="336" r="9" fill={SOFT}/><path d="M190 340l8-8m-6 0h6v6" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path {...draw(2.05)} d="M96 384l18-6 16 3 18-11 16 3 34-13" fill="none" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g></g>

        <g className="lig-float" style={{ animationDelay: '-0.6s' }}><g {...pop(2)}>
          <rect className="lig-shadow" x="88" y="146" width="104" height="36" rx="11" fill="#fff"/>
          <circle cx="106" cy="164" r="10" fill={ORANGE}/><path d="M101.5 164l3 3 5.5-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M122 159h56" stroke={INK} strokeWidth="3" strokeLinecap="round"/><path d="M122 169h38" stroke={LINE} strokeWidth="3" strokeLinecap="round"/>
        </g></g>
      </g>
    </svg>
  </div>
}
