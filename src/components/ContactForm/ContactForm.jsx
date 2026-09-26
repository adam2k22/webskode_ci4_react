import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    setStatus('Sending…')
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await response.json()
      setStatus(data.message || Object.values(data.errors || {})[0] || 'Something went wrong.')
      if (response.ok) setForm({ name: '', email: '', mobile: '', message: '' })
    } catch { setStatus('Start the CodeIgniter server to send your message.') }
  }

  return <form onSubmit={submit}>
    <label>Your name<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" required/></label>
    <label>Email address<input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" required/></label>
    <label>Mobile number<input type="tel" inputMode="tel" autoComplete="tel" value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} placeholder="+91 98765 43210" required/></label>
    <label>Tell us about it<textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="A few words about your project…" required/></label>
    <button>Send enquiry <ArrowUpRight/></button>{status && <p className="status">{status}</p>}
  </form>
}
