import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoFor } from '../../data/seo'

// The server prints these tags for the first page load; this keeps them right while navigating in the app.
const setTag = (tagName, key, name, attribute, value) => {
  let tag = document.head.querySelector(`${tagName}[${key}="${name}"]`)
  if (!value) return tag?.remove()
  if (!tag) {
    tag = document.createElement(tagName)
    tag.setAttribute(key, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute(attribute, value)
}

export default function SiteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const { title, description, canonical } = seoFor(pathname)
    document.title = title
    setTag('meta', 'name', 'description', 'content', description)
    setTag('meta', 'property', 'og:title', 'content', title)
    setTag('meta', 'property', 'og:description', 'content', description)
    setTag('meta', 'property', 'og:url', 'content', canonical)
    setTag('link', 'rel', 'canonical', 'href', canonical)
  }, [pathname])
  return null
}
