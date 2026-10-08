import { Bot, Cloud, Globe2, LayoutDashboard, Megaphone, MonitorCog, Plug, ShoppingCart, Smartphone, Wrench } from 'lucide-react'
import uiuxImage from '../assets/infographic-uiux.svg'
import websiteImage from '../assets/infographic-website.png'
import fullstackImage from '../assets/infographic-fullstack.png'
import dataImage from '../assets/infographic-data.png'
import softwareImage from '../assets/infographic-software.png'
import mobileImage from '../assets/infographic-mobile.png'
import marketingImage from '../assets/infographic-marketing.png'

const slugify = title => title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// One entry per individual service page: title, page headline, summary, four things included.
const s = (title, headline, summary, features) => ({ slug: slugify(title), title, headline, summary, features })

const buildProcess = [['Understand', 'We learn how your business works and agree exactly what needs to be built.'], ['Build', 'We design and develop in stages, sharing progress so you can give feedback early.'], ['Launch', 'We test thoroughly, go live and stay available for support and improvements.']]
const runProcess = [['Assess', 'We review your current setup, risks and priorities before changing anything.'], ['Implement', 'We make the changes carefully, with backups and testing at every step.'], ['Monitor', 'We keep watch, report clearly and act quickly when something needs attention.']]
const growProcess = [['Plan', 'We study your market, audience and goals, then agree a practical plan.'], ['Execute', 'We set everything up and run the work consistently, week after week.'], ['Improve', 'We measure results, report in plain language and keep refining what works.']]

export const serviceCatalog = [
  {
    slug: 'software-application-development', title: 'Software & Application Development', icon: MonitorCog, image: softwareImage,
    blurb: 'Custom software, platforms and business systems built around the way you work.',
    promise: ['Built for your process.', 'Ready to scale.'], process: buildProcess,
    items: [
      s('Custom Software Development', 'Software that fits your business.', 'Purpose-built applications designed around your processes, so your team stops bending its work to fit generic tools.', ['Requirement analysis', 'Tailored modules', 'Role-based access', 'Training & handover']),
      s('Web Application Development', 'Powerful apps in the browser.', 'Secure, responsive web applications your team and customers can use from any device, with nothing to install.', ['Responsive interface', 'Secure login', 'Real-time data', 'Scalable architecture']),
      s('SaaS Development', 'Launch your own software product.', 'Multi-tenant SaaS platforms with subscriptions, billing and admin tools, ready to onboard paying customers.', ['Multi-tenant setup', 'Subscription billing', 'Admin console', 'Usage analytics']),
      s('ERP Software Development', 'One system for the whole business.', 'Custom ERP that connects sales, purchases, stock, accounts and HR, giving you one accurate view of operations.', ['Connected modules', 'Approval workflows', 'Financial reports', 'User permissions']),
      s('CRM Development', 'Never lose track of a lead.', 'A CRM built around your sales process to capture leads, follow up on time and see your pipeline clearly.', ['Lead capture', 'Follow-up reminders', 'Sales pipeline', 'Customer history']),
      s('Inventory & Stock Management Software', 'Know your stock, always.', 'Track stock across locations in real time, with purchases, transfers and low-stock alerts built in.', ['Multi-location stock', 'Low-stock alerts', 'Purchases & transfers', 'Stock reports']),
      s('Billing & Invoicing Software', 'Bill faster, get paid sooner.', 'GST-ready invoicing with customer ledgers, payment tracking and reports your accountant will appreciate.', ['GST invoices', 'Payment tracking', 'Customer ledgers', 'Tax reports']),
      s('POS (Point of Sale) Systems', 'A faster counter experience.', 'Quick, reliable point of sale for retail and restaurants, with barcode billing and stock that updates at every sale.', ['Barcode billing', 'Stock sync', 'Multiple counters', 'Daily sales reports']),
      s('Business Management Software', 'Run daily operations in one place.', 'A single dashboard for tasks, staff, customers and finances, tailored to how your business actually runs.', ['Central dashboard', 'Staff & tasks', 'Customer records', 'Management reports']),
      s('Booking & Appointment Systems', 'Bookings without the back-and-forth.', 'Online booking with live availability, reminders and payments for clinics, salons, consultants and rentals.', ['Live availability', 'Automatic reminders', 'Online payment', 'Calendar management']),
      s('Marketplace & Multi-Vendor Platforms', 'Build your own marketplace.', 'Platforms where many sellers list products or services, with commissions, payouts and vendor dashboards handled for you.', ['Vendor dashboards', 'Commission rules', 'Payout management', 'Admin moderation']),
      s('API Development & Integration', 'Make your systems talk.', 'Clean, documented APIs that connect your software with apps, partners and third-party services securely.', ['REST APIs', 'Secure authentication', 'API documentation', 'Third-party connections']),
      s('Legacy Software Modernization', 'New life for old software.', 'Upgrade outdated systems to modern, secure technology without losing the data and logic your business depends on.', ['System audit', 'Data migration', 'Modern interface', 'Phased rollout'])
    ]
  },
  {
    slug: 'website-development', title: 'Website Development', icon: Globe2, image: websiteImage,
    blurb: 'Fast, responsive websites and portals that are easy to manage and built to convert.',
    promise: ['Fast to load.', 'Easy to grow.'], process: buildProcess,
    items: [
      s('Business Websites', 'A website that represents you well.', 'Professional, fast websites that explain what you do and make it easy for customers to get in touch.', ['Custom design', 'Mobile friendly', 'Enquiry forms', 'Basic SEO setup']),
      s('E-commerce Websites', 'Sell online with confidence.', 'Online stores with product management, secure checkout and order tracking, built to turn visitors into buyers.', ['Product catalogue', 'Secure checkout', 'Order tracking', 'Payment gateways']),
      s('Custom Web Portals', 'A private space for your users.', 'Customer, vendor, student or employee portals with secure logins and the exact features each group needs.', ['Secure logins', 'Role-based areas', 'Document sharing', 'Custom dashboards']),
      s('WordPress Development', 'WordPress, done properly.', 'Custom WordPress themes and plugins that are fast, secure and simple for your team to update.', ['Custom themes', 'Plugin development', 'Easy editing', 'Speed & security']),
      s('Landing Pages', 'One page, one goal.', 'Focused landing pages for campaigns and launches, designed to turn clicks into enquiries.', ['Conversion-led design', 'Fast loading', 'Lead forms', 'Tracking setup']),
      s('Membership Websites', 'Content and community for members.', 'Websites with paid or free membership, gated content, renewals and member management built in.', ['Member logins', 'Gated content', 'Recurring payments', 'Member management']),
      s('Real Estate Websites & Portals', 'Showcase every property.', 'Property listing websites with search, filters, maps and enquiry management for agents and developers.', ['Property listings', 'Search & filters', 'Map view', 'Lead management']),
      s('Website Redesign', 'A fresh start for your site.', 'Replace an outdated website with a modern look, clearer content and better performance, while protecting your search rankings.', ['Modern design', 'Content restructure', 'SEO preservation', 'Faster performance']),
      s('Website Maintenance', 'Keep your site healthy.', 'Regular updates, backups, security checks and content changes so your website keeps working as it should.', ['Regular updates', 'Scheduled backups', 'Security monitoring', 'Content changes']),
      s('Website Speed Optimization', 'Faster pages, happier visitors.', 'Find and fix what slows your website down, improving load times, search visibility and conversions.', ['Speed audit', 'Image optimisation', 'Code clean-up', 'Caching setup'])
    ]
  },
  {
    slug: 'mobile-app-development', title: 'Mobile App Development', icon: Smartphone, image: mobileImage,
    blurb: 'Android and iOS apps designed, built, launched and supported by one team.',
    promise: ['Smooth on every phone.', 'Supported after launch.'], process: buildProcess,
    items: [
      s('Android App Development', 'Reach every Android user.', 'Android apps tested across the phones and screen sizes your customers actually use.', ['Play Store launch', 'Device testing', 'Offline support', 'Push notifications']),
      s('iOS App Development', 'Polished apps for iPhone.', 'iPhone and iPad apps that follow Apple’s guidelines and feel smooth, fast and trustworthy.', ['App Store launch', 'Apple-standard design', 'Secure data', 'Push notifications']),
      s('Cross-Platform Apps', 'One build, both platforms.', 'A single Flutter codebase delivering Android and iOS apps together, saving time and cost without losing quality.', ['Single codebase', 'Android & iOS', 'Consistent design', 'Faster launch']),
      s('React Native Apps', 'Mobile apps with React Native.', 'Cross-platform apps built in React Native, ideal when your team or web product already uses React.', ['Shared code', 'Native feel', 'Reusable components', 'Quick updates']),
      s('E-commerce Apps', 'Your store in every pocket.', 'Shopping apps with product browsing, cart, payments and order tracking that keep customers coming back.', ['Product browsing', 'Cart & checkout', 'Order tracking', 'Offers & alerts']),
      s('Vendor & Inventory Apps', 'Manage stock from your phone.', 'Apps for vendors and staff to update stock, scan items and process orders from anywhere.', ['Barcode scanning', 'Stock updates', 'Order processing', 'Vendor accounts']),
      s('Booking Apps', 'Book in a few taps.', 'Appointment and reservation apps with live slots, reminders and in-app payment.', ['Live slots', 'Reminders', 'In-app payment', 'Booking history']),
      s('Business Management Apps', 'Your business on the move.', 'Mobile apps for owners and field teams to track sales, tasks, attendance and reports in real time.', ['Sales tracking', 'Task management', 'Field attendance', 'Live reports']),
      s('App Maintenance & Upgrades', 'Keep your app current.', 'Ongoing fixes, OS compatibility updates and new features so your app stays reliable and well rated.', ['Bug fixes', 'OS updates', 'New features', 'Performance checks'])
    ]
  },
  {
    slug: 'cloud-backend-services', title: 'Cloud & Backend Services', icon: Cloud, image: dataImage,
    blurb: 'The servers, databases and pipelines that keep your product fast, secure and online.',
    promise: ['Solid foundations.', 'Always available.'], process: runProcess,
    items: [
      s('Backend/API Development', 'The engine behind your product.', 'Reliable server-side systems and APIs that keep your website and apps fast, secure and in sync.', ['Business logic', 'Secure APIs', 'Authentication', 'Scalable design']),
      s('Database Design & Development', 'Data structured to last.', 'Well-planned databases that store information accurately and stay fast as your records grow.', ['Schema design', 'Query optimisation', 'Data integrity', 'Documentation']),
      s('AWS Cloud Solutions', 'Built on AWS, the right way.', 'Secure, cost-aware AWS setups for hosting, storage and scaling, configured for your workload.', ['Architecture planning', 'Auto scaling', 'Cost control', 'Security setup']),
      s('Cloud Migration', 'Move to the cloud safely.', 'Plan and move your applications and data to the cloud with minimal downtime and careful validation.', ['Migration plan', 'Data transfer', 'Minimal downtime', 'Post-move support']),
      s('Server Setup & Management', 'Servers you don’t have to worry about.', 'We set up, secure and look after your servers so your applications stay online and up to date.', ['Server configuration', 'Security hardening', 'Updates & patches', 'Uptime monitoring']),
      s('Application Deployment', 'From code to live.', 'Smooth, repeatable deployments of your application to production, with rollback ready if something goes wrong.', ['Environment setup', 'Release process', 'SSL & domains', 'Rollback plan']),
      s('CI/CD Setup', 'Ship updates automatically.', 'Automated build, test and release pipelines so new features reach users faster and with fewer mistakes.', ['Automated builds', 'Test pipelines', 'One-click releases', 'Team workflow']),
      s('Database Migration', 'Move data without losing it.', 'Transfer data between databases or versions carefully, with validation at every step.', ['Data mapping', 'Validation checks', 'Minimal downtime', 'Rollback safety']),
      s('Performance Optimization', 'Make slow systems fast.', 'Identify bottlenecks in code, queries and servers, then tune them for speed under real load.', ['Performance audit', 'Query tuning', 'Caching', 'Load testing']),
      s('Automated Backups & Disaster Recovery', 'Ready for the worst day.', 'Scheduled, tested backups and a clear recovery plan so your business can get back on its feet quickly.', ['Scheduled backups', 'Off-site copies', 'Recovery testing', 'Recovery plan'])
    ]
  },
  {
    slug: 'ai-automation', title: 'AI & Automation', icon: Bot, image: fullstackImage,
    blurb: 'Practical AI and automation that remove repetitive work and speed up your business.',
    promise: ['Less manual work.', 'Smarter operations.'], process: buildProcess,
    items: [
      s('AI-Powered Applications', 'Software that thinks ahead.', 'Applications that use AI to search, summarise, recommend and predict, built around a real business need.', ['Smart search', 'Recommendations', 'Content generation', 'Predictive insights']),
      s('AI Chatbots', 'Answers at any hour.', 'Chatbots trained on your business information that answer customers instantly on your website and apps.', ['Trained on your data', 'Website & app chat', 'Lead capture', 'Human handover']),
      s('Business Process Automation', 'Let software do the routine.', 'Automate repetitive tasks such as data entry, approvals and reports to save hours every week.', ['Process mapping', 'Automated tasks', 'Approval flows', 'Automatic reports']),
      s('Workflow Automation', 'Work that moves by itself.', 'Connect your tools so information flows automatically from one step to the next without manual follow-up.', ['Tool connections', 'Trigger-based actions', 'Notifications', 'Status tracking']),
      s('AI API Integration', 'Add AI to what you already have.', 'Integrate leading AI models into your existing software for chat, summaries, classification and more.', ['Model selection', 'Secure integration', 'Prompt design', 'Cost monitoring']),
      s('Document/Data Processing Automation', 'Paperwork, processed automatically.', 'Extract data from invoices, forms and documents and send it straight to your systems.', ['Data extraction', 'Document sorting', 'Validation rules', 'System sync']),
      s('Customer Support Automation', 'Faster support, less effort.', 'Automated replies, ticket routing and FAQs that resolve common questions and free your team for the hard ones.', ['Auto replies', 'Ticket routing', 'Knowledge base', 'Support analytics']),
      s('WhatsApp Automation', 'Automate conversations on WhatsApp.', 'Automated order updates, reminders, catalogues and replies on the app your customers already use.', ['Order updates', 'Reminders', 'Auto replies', 'Broadcast messages'])
    ]
  },
  {
    slug: 'ecommerce-business-solutions', title: 'E-commerce & Business Solutions', icon: ShoppingCart, image: marketingImage,
    blurb: 'Everything needed to sell online and manage orders, stock, customers and payments.',
    promise: ['Sell more.', 'Manage less.'], process: buildProcess,
    items: [
      s('Online Store Development', 'Open your store online.', 'A complete online store with catalogue, cart, payments and delivery options, ready to take orders.', ['Product catalogue', 'Cart & checkout', 'Delivery options', 'Store admin']),
      s('Multi-Vendor Marketplace', 'Many sellers, one platform.', 'A marketplace where vendors manage their own products while you control commissions and quality.', ['Vendor onboarding', 'Commission settings', 'Vendor payouts', 'Central admin']),
      s('Inventory Management', 'Stock under control.', 'Real-time inventory across warehouses and sales channels, so you avoid overselling and surprise shortages.', ['Real-time stock', 'Multi-warehouse', 'Reorder alerts', 'Stock reports']),
      s('Order Management', 'Every order, on track.', 'Manage orders from all channels in one place, from confirmation and packing to delivery and returns.', ['Central order view', 'Status tracking', 'Returns handling', 'Customer updates']),
      s('Payment Gateway Integration', 'Accept payments online.', 'Secure acceptance of UPI, cards, net banking and wallets through trusted payment gateways.', ['UPI & cards', 'Secure checkout', 'Refund handling', 'Payment reports']),
      s('Subscription & Membership Systems', 'Recurring revenue, managed.', 'Plans, renewals, automatic billing and member access handled smoothly for subscription businesses.', ['Plan management', 'Auto renewals', 'Recurring billing', 'Member access']),
      s('Customer Management', 'Know every customer.', 'Keep customer details, purchase history and communication in one organised place.', ['Customer profiles', 'Purchase history', 'Customer segments', 'Communication log']),
      s('Sales & Invoice Management', 'From quote to payment.', 'Create quotations, invoices and receipts, and track what is paid and what is pending.', ['Quotes & invoices', 'Payment status', 'GST ready', 'Sales reports']),
      s('Barcode/QR Code Systems', 'Scan, don’t type.', 'Barcode and QR solutions for billing, stock, tracking and payments that cut errors and save time.', ['Label generation', 'Scan to bill', 'Stock tracking', 'QR payments'])
    ]
  },
  {
    slug: 'integrations', title: 'Integrations', icon: Plug, image: fullstackImage,
    blurb: 'Connect your website, apps and software with the services your business relies on.',
    promise: ['Connected systems.', 'No double entry.'], process: buildProcess,
    items: [
      s('Payment Gateway Integration', 'Connect your payments.', 'Add a payment gateway to your website or app, with the full checkout flow tested end to end.', ['Gateway setup', 'Checkout flow', 'Payment webhooks', 'Test & go-live']),
      s('WhatsApp Business Integration', 'WhatsApp, connected to your system.', 'Send notifications and chat with customers on WhatsApp directly from your software.', ['Business API setup', 'Message templates', 'Notifications', 'Shared chat inbox']),
      s('Google Maps Integration', 'Put location to work.', 'Maps, address search, store locators and route tracking inside your website or app.', ['Store locator', 'Address autocomplete', 'Live tracking', 'Distance calculation']),
      s('Accounting Software Integration', 'Books that update themselves.', 'Sync sales, invoices and payments with your accounting software, so nothing is entered twice.', ['Invoice sync', 'Payment sync', 'Ledger mapping', 'Error handling']),
      s('CRM Integration', 'Every lead in one place.', 'Connect your website, apps and forms to your CRM so leads and customer data flow in automatically.', ['Lead sync', 'Contact updates', 'Form connections', 'Activity tracking']),
      s('Third-Party API Integration', 'Connect any service.', 'Integrate external services and data sources reliably, with proper error handling and monitoring.', ['API analysis', 'Secure connection', 'Error handling', 'Monitoring']),
      s('Social Media Integration', 'Social, built in.', 'Social logins, sharing, feeds and catalogue sync that link your product with social platforms.', ['Social login', 'Share buttons', 'Feed display', 'Catalogue sync']),
      s('Email & SMS Integration', 'Messages that send themselves.', 'Automated emails and SMS for OTPs, order updates, reminders and campaigns.', ['OTP delivery', 'Transactional emails', 'SMS alerts', 'Delivery reports']),
      s('Shipping/Courier Integration', 'Shipping, automated.', 'Connect courier partners for live rates, label printing, pickups and tracking.', ['Live rates', 'Label printing', 'Pickup booking', 'Shipment tracking'])
    ]
  },
  {
    slug: 'ui-ux-and-design', title: 'UI/UX & Design', icon: LayoutDashboard, image: uiuxImage,
    blurb: 'Interfaces and brand visuals that are clear, consistent and a pleasure to use.',
    promise: ['Interfaces people enjoy.', 'Brands people remember.'], process: buildProcess,
    items: [
      s('UI/UX Design', 'Design people enjoy using.', 'Research-led interface and experience design that makes digital products clear, pleasant and effective.', ['User research', 'User flows', 'Interface design', 'Usability testing']),
      s('Website Design', 'A site that looks the part.', 'Modern, on-brand website designs focused on clarity and conversion, ready for development.', ['Custom layouts', 'Responsive screens', 'Brand consistency', 'Developer handoff']),
      s('Mobile App Design', 'Apps that feel natural.', 'App interfaces designed for thumbs and small screens, following each platform’s guidelines.', ['App screens', 'Navigation design', 'Platform guidelines', 'Interactive prototype']),
      s('Software Dashboard Design', 'Complex data, clearly shown.', 'Dashboards and admin panels that make dense information easy to scan and act on.', ['Information layout', 'Charts & tables', 'Design system', 'Role-based views']),
      s('Logo & Brand Identity', 'A brand people remember.', 'Distinctive logos with colours, type and guidelines that keep your brand consistent everywhere.', ['Logo concepts', 'Colour & type', 'Brand guidelines', 'Print & web files']),
      s('Wireframes & Prototypes', 'See it before you build it.', 'Clickable wireframes and prototypes that let you test ideas early and avoid expensive changes later.', ['Page wireframes', 'Clickable prototype', 'Feedback rounds', 'Build-ready specs'])
    ]
  },
  {
    slug: 'maintenance-it-support', title: 'Maintenance & IT Support', icon: Wrench, image: softwareImage,
    blurb: 'Ongoing care that keeps your software, websites, apps and servers secure and running.',
    promise: ['Always up to date.', 'Always supported.'], process: runProcess,
    items: [
      s('Software Maintenance', 'Software that stays dependable.', 'Ongoing care for your business software, covering fixes, improvements and updates.', ['Issue resolution', 'Minor enhancements', 'Version updates', 'Health checks']),
      s('Website Maintenance', 'A website that’s always ready.', 'Updates, backups, monitoring and content edits handled for you on a regular schedule.', ['Plugin updates', 'Backups', 'Uptime monitoring', 'Content edits']),
      s('App Maintenance', 'Apps that keep working.', 'Keep your mobile apps compatible with new devices and OS versions, and free of crashes.', ['Crash fixes', 'OS compatibility', 'Store updates', 'Performance checks']),
      s('Bug Fixing', 'Problems solved quickly.', 'Fast diagnosis and repair of errors in websites, apps and software, including code we did not write.', ['Issue diagnosis', 'Quick fixes', 'Root-cause report', 'Regression testing']),
      s('Security Updates', 'Stay ahead of threats.', 'Regular patches, vulnerability checks and hardening that protect your systems and customer data.', ['Security patches', 'Vulnerability scans', 'Access review', 'SSL management']),
      s('Server Monitoring', 'Know before your users do.', 'Continuous monitoring of uptime, load and errors, with alerts and a quick response.', ['Uptime checks', 'Resource alerts', 'Error tracking', 'Incident response']),
      s('Database Optimization', 'Faster queries, smoother apps.', 'Tune indexes, queries and structure so your database stays quick as data grows.', ['Query tuning', 'Index review', 'Data clean-up', 'Growth planning']),
      s('Software Upgrades', 'Move to the latest version.', 'Upgrade frameworks, languages and features safely so your software stays supported and secure.', ['Version upgrades', 'Compatibility testing', 'Feature additions', 'Safe rollout']),
      s('Technical Support', 'Help when you need it.', 'A responsive support team for questions, issues and guidance on the systems we manage.', ['Phone & email support', 'Remote assistance', 'User guidance', 'Issue tracking']),
      s('Annual Maintenance Contracts (AMC)', 'A full year of peace of mind.', 'Fixed-cost yearly plans covering maintenance, updates and priority support for your software.', ['Fixed yearly cost', 'Priority support', 'Scheduled check-ups', 'Covered updates'])
    ]
  },
  {
    slug: 'digital-services', title: 'Digital Services', icon: Megaphone, image: marketingImage,
    blurb: 'Marketing, advertising and online essentials that help customers find and trust you.',
    promise: ['Be found.', 'Be chosen.'], process: growProcess,
    items: [
      s('Digital Marketing', 'Grow with a clear plan.', 'A coordinated mix of search, social and paid campaigns built around measurable business goals.', ['Strategy & planning', 'Campaign management', 'Content creation', 'Monthly reports']),
      s('SEO', 'Get found on Google.', 'Technical fixes, content and link building that improve rankings and bring steady organic traffic.', ['Site audit', 'Keyword strategy', 'On-page fixes', 'Ranking reports']),
      s('Google Business Profile Setup & Management', 'Be visible in local search.', 'Set up and manage your Google Business Profile so nearby customers find, trust and contact you.', ['Profile setup', 'Photos & posts', 'Review management', 'Maps visibility']),
      s('Social Media Management', 'Consistent, on-brand social.', 'Planned posts, creatives and community replies that keep your brand active and engaging.', ['Content calendar', 'Post design', 'Community replies', 'Performance insights']),
      s('Google Ads', 'Appear when customers search.', 'Search, display and shopping campaigns managed to get the most from your budget.', ['Keyword targeting', 'Ad creation', 'Bid management', 'Conversion tracking']),
      s('Meta/Facebook Ads', 'Reach the right audience.', 'Facebook and Instagram ad campaigns with sharp targeting, strong creatives and clear reporting.', ['Audience targeting', 'Ad creatives', 'Retargeting', 'Results reporting']),
      s('Business Email Setup', 'Email on your own domain.', 'Professional email addresses on your domain, configured securely on all your devices.', ['Domain email IDs', 'Mailbox setup', 'Spam protection', 'Device configuration']),
      s('Domain Registration', 'Secure your name online.', 'Help choosing, registering and managing the right domain for your business.', ['Name guidance', 'Registration', 'DNS setup', 'Renewal reminders']),
      s('Web Hosting', 'A reliable home for your site.', 'Fast, secure hosting with SSL, backups and support for your website.', ['SSL certificate', 'Regular backups', 'Email accounts', 'Hosting support']),
      s('Cloud Hosting', 'Hosting that scales with you.', 'Scalable cloud hosting for busy websites and applications, with room to grow.', ['Scalable resources', 'High availability', 'Managed security', 'Easy upgrades'])
    ]
  }
]

// Shown in the home page "What we do?" grid, which is laid out for six cards.
const featuredSlugs = ['software-application-development', 'website-development', 'mobile-app-development', 'ai-automation', 'ui-ux-and-design', 'digital-services']
export const featuredCategories = featuredSlugs.map(slug => serviceCatalog.find(category => category.slug === slug))

// Addresses of the earlier service pages, sent to their closest match in the catalog.
export const legacyServiceRedirects = {
  'ui-ux-design': 'ui-ux-and-design/ui-ux-design',
  'graphics-design': 'ui-ux-and-design',
  'seo-digital-marketing': 'digital-services',
  'web-development': 'website-development',
  'app-development': 'mobile-app-development',
  'software-development': 'software-application-development',
  'frontend-backend': 'cloud-backend-services',
  'data-management': 'cloud-backend-services'
}

export const findCategory = slug => serviceCatalog.find(category => category.slug === slug)
export const findCatalogItem = (categorySlug, itemSlug) => findCategory(categorySlug)?.items.find(item => item.slug === itemSlug)
