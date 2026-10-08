import { Bot, Cloud, Globe2, Megaphone, MonitorCog, ShoppingCart, Smartphone } from 'lucide-react'

const plan = (name, price, features, priceNote) => ({ name, price, priceNote, features })

export const packageCategories = [
  {
    id: 'website-development', title: 'Website Development', icon: Globe2,
    plans: [
      plan('Starter', '₹7,999', ['Up to 5 pages', 'Responsive design', 'Contact form', 'WhatsApp integration', 'Basic SEO setup', 'Social links', '1 month support']),
      plan('Business', '₹14,999', ['Up to 10 pages', 'Custom design', 'CMS / admin panel', 'Google Maps and WhatsApp', 'Enquiry forms', 'Basic SEO and analytics', '2 months support']),
      plan('Professional', '₹24,999+', ['Custom pages and UI', 'Advanced forms', 'Integrations', 'Payment gateway if required', 'Performance optimization', 'Advanced admin functionality', '3 months support'])
    ]
  },
  {
    id: 'ecommerce-development', title: 'E-commerce Development', icon: ShoppingCart,
    plans: [
      plan('Starter Store', '₹14,999', ['Up to 25 products', 'Product categories', 'Cart and checkout', 'Online payments', 'Order management', 'Responsive design']),
      plan('Business Store', '₹29,999', ['Up to 100 products', 'Inventory management', 'Coupons', 'Payment gateway', 'Shipping integration', 'Customer accounts', 'Sales reports']),
      plan('Advanced Store', '₹49,999+', ['Large product catalog', 'Custom checkout', 'Advanced inventory', 'API integrations', 'Automation', 'Analytics', 'Custom functionality'])
    ]
  },
  {
    id: 'custom-software', title: 'Custom Software', icon: MonitorCog,
    plans: [
      plan('Starter', '₹39,999+', ['Single-business system', 'Login and dashboard', 'Basic CRUD modules', 'Reports', 'Database']),
      plan('Business', '₹79,999+', ['Multiple modules', 'Roles and permissions', 'Inventory, sales and customer management', 'Invoicing', 'Reporting', 'APIs']),
      plan('Enterprise', '₹1,50,000+', ['Complex workflows', 'Multi-location, multi-user architecture', 'Mobile and web integration', 'Third-party APIs', 'Cloud deployment', 'Automation', 'Advanced reporting'])
    ]
  },
  {
    id: 'mobile-apps', title: 'Mobile Apps', icon: Smartphone,
    plans: [
      plan('Starter', '₹29,999+', ['Android / iOS cross-platform app', 'Basic authentication', 'User profile', 'Core business functionality', 'API connectivity']),
      plan('Business', '₹59,999+', ['Android + iOS', 'Notifications', 'Payments', 'Backend and admin panel', 'Reports', 'Third-party integrations']),
      plan('Advanced', '₹1,20,000+', ['Marketplace and multi-vendor', 'Real-time functionality', 'Subscriptions', 'Advanced payments', 'Analytics', 'Custom backend'])
    ]
  },
  {
    id: 'ai-automation', title: 'AI & Automation', icon: Bot,
    plans: [
      plan('Starter', '₹9,999+', ['Website AI chatbot', 'or a simple business automation']),
      plan('Business', '₹24,999+', ['AI chatbot', 'WhatsApp / API integrations', 'Lead automation', 'Automated notifications', 'Business workflows']),
      plan('Custom AI Solution', '₹49,999+', ['AI-powered applications', 'Document processing', 'Internal assistants', 'Intelligent search', 'Custom workflows', 'Multiple integrations'])
    ]
  },
  {
    id: 'digital-marketing', title: 'Digital Marketing', icon: Megaphone, note: 'Advertising spend is charged separately.',
    plans: [
      plan('Starter', '₹4,999', ['Google Business Profile', '8 social posts per month', 'Basic SEO', 'Monthly report'], '/month'),
      plan('Growth', '₹9,999', ['12–16 posts per month', 'Facebook / Instagram management', 'Google Business management', 'SEO', 'Campaign management', 'Reporting'], '/month'),
      plan('Pro', '₹19,999+', ['Full social management', 'SEO', 'Google / Meta campaign management', 'Content strategy', 'Lead-generation optimization', 'Detailed reporting'], '/month')
    ]
  },
  {
    id: 'hosting-cloud-maintenance', title: 'Hosting, Cloud & Maintenance', icon: Cloud, note: 'Cloud bills are separate.',
    plans: [
      plan('Website Care', '₹999', ['Backups', 'Updates', 'Basic monitoring', 'Minor fixes'], '/month'),
      plan('Business Care', '₹2,499', ['Regular backups', 'Security monitoring', 'Updates', 'Performance checks', 'Monthly development / support allowance'], '/month'),
      plan('Cloud Care', '₹4,999+', ['AWS / cloud management', 'Deployments', 'Backups', 'Database monitoring', 'Performance optimization', 'Technical support'], '/month')
    ]
  }
]

// "Pricing at a glance" table. `category` links a row to its detailed packages above.
export const priceTable = [
  { service: 'Business Website', starter: '₹7,999', business: '₹14,999', professional: '₹24,999+', category: 'website-development' },
  { service: 'E-commerce Website', starter: '₹14,999', business: '₹29,999', professional: '₹49,999+', category: 'ecommerce-development' },
  { service: 'Custom Web Application', starter: '₹24,999', business: '₹49,999', professional: '₹99,999+' },
  { service: 'Mobile App', starter: '₹29,999', business: '₹59,999', professional: '₹1,20,000+', category: 'mobile-apps' },
  { service: 'Custom Business Software', starter: '₹39,999', business: '₹79,999', professional: '₹1,50,000+', category: 'custom-software' },
  { service: 'SaaS Development', starter: '₹59,999', business: '₹1,20,000', professional: 'Custom' },
  { service: 'UI/UX Design', starter: '₹4,999', business: '₹9,999', professional: '₹19,999+' },
  { service: 'Digital Marketing', starter: '₹4,999/mo', business: '₹9,999/mo', professional: '₹19,999+/mo', category: 'digital-marketing' },
  { service: 'Website Maintenance', starter: '₹999/mo', business: '₹2,499/mo', professional: '₹4,999+/mo', category: 'hosting-cloud-maintenance' },
  { service: 'Cloud/Server Management', starter: '₹1,999/mo', business: '₹4,999/mo', professional: '₹9,999+/mo', category: 'hosting-cloud-maintenance' }
]

export const launchBundle = { id: 'launch-bundle', title: 'Business Launch Bundle', price: '₹19,999' }

// Shown in the home page preview.
export const featuredCategory = packageCategories[0]
