import { Bot, Cloud, Globe2, Megaphone, MonitorCog, Smartphone } from 'lucide-react'

const ORANGE = '#ff5a1f'
const PEACH = '#ffb693'

// Circuit traces run from the WK chip out to each service node.
const nodes = [
  { icon: Globe2, label: 'Websites', x: 60, y: 52, trace: 'M220 132H150V52H88' },
  { icon: MonitorCog, label: 'Software', x: 60, y: 152, trace: 'M220 152H88' },
  { icon: Smartphone, label: 'Mobile apps', x: 60, y: 252, trace: 'M220 172H150V252H88' },
  { icon: Cloud, label: 'Cloud', x: 460, y: 52, trace: 'M300 132H370V52H432' },
  { icon: Bot, label: 'AI & automation', x: 460, y: 152, trace: 'M300 152H432' },
  { icon: Megaphone, label: 'Marketing', x: 460, y: 252, trace: 'M300 172H370V252H432' }
]
const pins = [128, 152, 176]

export default function FooterInfographic() {
  return <div className="footer-infographic">
    <svg viewBox="0 0 520 310" role="img" aria-label="Animated diagram of WebsKode connecting websites, software, mobile apps, cloud, AI and marketing">
      {nodes.map(({ label, trace }, i) => <g key={label}>
        <path d={trace} fill="none" stroke="#ffffff24" strokeWidth="2" strokeLinejoin="round"/>
        <path className="ftr-flow" style={{ animationDelay: `${i * 0.27}s` }} d={trace} pathLength="100" fill="none" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>)}

      <circle className="ftr-ring" cx="260" cy="152" r="62" fill="none" stroke={ORANGE} strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round"/>
      {pins.map(y => <g key={y} fill={PEACH}><rect x="212" y={y - 3} width="10" height="6" rx="2"/><rect x="298" y={y - 3} width="10" height="6" rx="2"/></g>)}
      {[236, 260, 284].map(x => <g key={x} fill={PEACH}><rect x={x - 3} y="104" width="6" height="10" rx="2"/><rect x={x - 3} y="190" width="6" height="10" rx="2"/></g>)}
      <rect x="220" y="112" width="80" height="80" rx="16" fill={ORANGE}/>
      <rect className="ftr-glow" x="220" y="112" width="80" height="80" rx="16" fill="none" stroke={ORANGE} strokeWidth="2"/>
      <text className="ftr-chip" x="260" y="162" textAnchor="middle">WK</text>

      {nodes.map(({ icon: Icon, label, x, y }, i) => <g className="ftr-node" style={{ animationDelay: `${i * 0.27}s` }} key={label}>
        <circle cx={x} cy={y} r="27"/>
        <Icon x={x - 12} y={y - 12} size={24} strokeWidth={1.8}/>
        <text x={x} y={y + 45} textAnchor="middle">{label}</text>
      </g>)}
    </svg>
  </div>
}
