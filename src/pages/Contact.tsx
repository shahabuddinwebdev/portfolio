import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faXTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../data/profile'
import { faqs } from '../data/misc'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const socialIcons = [
  { icon: faGithub, url: 'https://github.com', label: 'GitHub' },
  { icon: faLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: faXTwitter, url: 'https://twitter.com', label: 'Twitter' },
  { icon: faDribbble, url: 'https://dribbble.com', label: 'Dribbble' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const contactInfo = [
    { icon: faEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: faPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: faLocationDot, label: 'Location', value: profile.location, href: '#' },
  ]

  return (
    <main className="pt-16">
      <section className="section bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6 inline-block">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Let's Work <span className="gradient-text">Together</span></h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Feel free to reach out through any of these channels. I typically respond within 24 hours.</p>
              {contactInfo.map((c) => (
                <a key={c.label} href={c.href} className="card p-5 flex items-center gap-4 hover:shadow-lg transition-shadow group">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                    <FontAwesomeIcon icon={c.icon} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{c.label}</p>
                    <p className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="card p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Follow me on social media</p>
                <div className="flex gap-3">
                  {socialIcons.map((s) => (
                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors">
                      <FontAwesomeIcon icon={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
                {submitted && (
                  <div className="mb-6 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 rounded-xl p-4 flex items-center gap-3">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="text-sm font-medium">Thanks for reaching out! I'll get back to you soon.</span>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      id="name" type="text" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${errors.name ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      id="email" type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${errors.email ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    id="subject" type="text" value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${errors.subject ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message" rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border ${errors.message ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 dark:text-gray-400">Answers to some common questions about working with me.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex justify-between items-center gap-4 p-5 text-left font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {faq.question}
                  <span className={`text-indigo-500 transition-transform flex-shrink-0 ${openFaq === faq.id ? 'rotate-45' : ''}`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === faq.id ? 'auto' : 0, opacity: openFaq === faq.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
