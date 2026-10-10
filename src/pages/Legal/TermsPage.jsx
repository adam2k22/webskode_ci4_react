import PageLayout from '../../components/PageLayout/PageLayout'

const updated = '10 October 2026'

// Each policy is a list of [heading, blocks]; a block is a paragraph, or an array for a bulleted list.
const policies = [
  {
    id: 'terms', title: 'Terms of Service',
    intro: 'These terms apply when you use this website or engage WebsKode for any service. By doing either, you agree to them.',
    parts: [
      ['Who we are', ['WebsKode is a web, software and digital services business based in Karnal, Haryana, India. “We”, “us” and “our” refer to WebsKode; “you” refers to the person or business using this website or our services.']],
      ['Our services', ['We design and build websites, software and mobile apps, and provide cloud, automation, design, maintenance and digital marketing services.', 'The scope, timeline and price of each project are set out in a written proposal or quote. Where the proposal and this page differ, the proposal applies.']],
      ['Prices and packages', ['Prices and packages shown on this website are starting points in Indian Rupees, not binding offers. Your final price is confirmed in a quote once we understand your requirements.', 'Unless your quote says otherwise, third-party costs are charged separately. These include domain names, hosting and cloud bills, paid licences or plugins, payment gateway fees and advertising spend.', 'Taxes, where applicable, are shown on your quote or invoice.']],
      ['Payments', ['The payment schedule for your project is stated in your quote. Work may be paused, and delivery dates moved, while a payment is overdue.']],
      ['What we need from you', [['Content, brand assets and access to accounts that the project depends on, provided in good time.', 'Feedback and approvals within the timelines we agree.', 'Confirmation that you own, or have permission to use, any text, images, logos and data you give us.'], 'Delays in receiving these may delay delivery.']],
      ['Ownership of the work', ['Once the project is paid for in full, the final deliverables created specifically for you are yours.', 'We keep ownership of the tools, code libraries and methods we bring to the project, and you receive the right to use them as part of your deliverables. Third-party and open-source components remain under their own licences.', 'We may show completed work in our portfolio. If you would prefer that we do not, tell us in writing and we will respect that.']],
      ['Support after launch', ['The support period included with your project is stated in your package or quote. Ongoing maintenance is available as a separate plan.']],
      ['Using this website', ['You may browse this website and contact us through it for genuine enquiries. Please do not misuse it, attempt to disrupt it or copy its content without our permission.', 'This website links to other websites, including client projects. We are not responsible for the content or practices of websites we do not operate.']],
      ['What we cannot promise', ['We carry out our work with reasonable skill and care. We cannot guarantee specific business outcomes such as search rankings, traffic, leads, sales or advertising results, because these depend on factors outside our control.', 'To the extent the law allows, our total liability for any project is limited to the fees you have paid us for that project, and we are not liable for indirect losses such as lost profit or lost data.']],
      ['Governing law', ['These terms are governed by the laws of India. Any dispute will be handled by the courts at Karnal, Haryana.']],
      ['Changes to these terms', ['We may update this page from time to time. The date at the top shows when it was last changed. The terms in force when you engage us apply to that project.']]
    ]
  },
  {
    id: 'privacy', title: 'Privacy Policy',
    intro: 'This explains what personal information we collect, why we collect it and the choices you have.',
    parts: [
      ['Information we collect', [['Enquiry details you send through our contact forms: your name, email address, mobile number and message.', 'Anything you share with us by email, phone or WhatsApp.', 'Information and account access you provide during a project so that we can do the work.']]],
      ['How we use it', [['To reply to your enquiry and prepare a proposal or quote.', 'To deliver, support and invoice the services you ask for.', 'To meet our legal and accounting obligations.'], 'We do not sell your personal information, and we do not share it for other companies’ marketing.']],
      ['Who else is involved', ['We rely on a small number of service providers to run this website and our business, and they process information on our behalf or as part of their own service:', ['Our hosting and email providers, which store this website and deliver enquiry emails to us.', 'Google Fonts, which supplies the typefaces on this website. Your browser requests them from Google, which receives your IP address.', 'WhatsApp, if you choose to contact us there. Your chat is handled under WhatsApp’s own terms and privacy policy.']]],
      ['How long we keep it', ['We keep enquiry and project information for as long as it is needed for the purposes above, or for as long as the law requires us to keep business records.']],
      ['Keeping it safe', ['We take reasonable steps to protect the information we hold and limit access to people who need it for their work. No method of storage or transmission is completely secure, so we cannot guarantee absolute security.']],
      ['Your choices', ['You can ask us for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it. Email info@webskode.com and we will respond within a reasonable time. We may need to keep some records where the law requires it.']],
      ['Children', ['This website and our services are intended for businesses and adults. We do not knowingly collect information from children.']]
    ]
  },
  {
    id: 'refunds', title: 'Cancellation & Refund Policy',
    intro: 'Our work is custom-made for each client, so cancellations and refunds are handled as follows unless your quote says otherwise.',
    parts: [
      ['Cancelling a project', ['You can cancel a project at any time by telling us in writing. Work completed up to the date we receive your cancellation remains payable.']],
      ['Refunds', [['Amounts paid for work that has already been completed or delivered are not refundable.', 'Amounts paid in advance for work that has not yet started are refunded.', 'Third-party purchases made for you, such as domains, hosting, licences and advertising spend, cannot be refunded once bought.'], 'Approved refunds are returned to the original payment method.']],
      ['Monthly services', ['Monthly plans such as maintenance, hosting care and digital marketing can be cancelled by informing us before your next billing date. The plan then ends at the close of the period you have already paid for; that period is not refunded.']],
      ['If something is not right', ['If a deliverable does not match what was agreed in your quote, tell us and we will put it right. That is always our first step, and it is usually faster than a refund.']]
    ]
  },
  {
    id: 'cookies', title: 'Cookies',
    intro: 'A short note on cookies and tracking.',
    parts: [
      ['What this website does', ['This website does not set advertising or tracking cookies and does not run analytics trackers. If that changes, we will update this page before it does.', 'Websites we link to, and services such as WhatsApp, have their own cookie practices.']]
    ]
  }
]

export default function TermsPage() {
  return <PageLayout name="Terms & Policies" eyebrow="Legal" title="Clear terms, plainly written." intro="How we work with clients, how we handle your information, and what happens if plans change.">
    <section className="policy-page">
      <div className="policy-nav" role="navigation" aria-label="On this page">
        <span>Last updated {updated}</span>
        {policies.map(({ id, title }) => <a href={`#${id}`} key={id}>{title}</a>)}
        <a href="#policy-contact">Contact</a>
      </div>
      <div className="policy-content">
        {policies.map(({ id, title, intro, parts }) => <article id={id} key={id}>
          <h2>{title}</h2>
          <p className="policy-lead">{intro}</p>
          {parts.map(([heading, blocks]) => <div key={heading}>
            <h3>{heading}</h3>
            {blocks.map((block, i) => Array.isArray(block) ? <ul key={i}>{block.map(line => <li key={line}>{line}</li>)}</ul> : <p key={i}>{block}</p>)}
          </div>)}
        </article>)}
        <article id="policy-contact">
          <h2>Contact</h2>
          <p className="policy-lead">Questions about anything on this page are welcome.</p>
          <ul>
            <li>Email: <a href="mailto:info@webskode.com">info@webskode.com</a></li>
            <li>Phone: <a href="tel:+919870438617">+91 98704 38617</a></li>
            <li>Address: Corner Shop, Gali No. 6, Palam Colony, Corner, Tikri Rd, Sector 28, Vasant Vihar, Karnal, Haryana 132001</li>
          </ul>
        </article>
      </div>
    </section>
  </PageLayout>
}
