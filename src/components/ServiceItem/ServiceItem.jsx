import { ArrowDownRight } from 'lucide-react'

export default function ServiceItem({ service, index }) {
  return <div className="service"><b>0{index + 1}</b><h3>{service[0]}</h3><p>{service[1]}</p><ArrowDownRight/></div>
}
