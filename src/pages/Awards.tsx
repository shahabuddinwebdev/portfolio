import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faTrophy, faCertificate } from '@fortawesome/free-solid-svg-icons'
import { awards } from '../data/awards'

const filters = ['All', 'Certifications', 'Awards']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4 } }),
}

export default function Awards() {
  const [active, setActive] = useState('All')

  const filtered = awards.filter((a) => {
    if (active === 'All') return true
    if (active === 'Certifications') return a.type === 'certification'
    return a.type === 'award'
  })

  return (
    <main className="pt-16">
      <section className="section bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6 inline-block">Recognition</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Awards & <span className="gradient-text">Certifications</span></h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Professional credentials and recognition earned throughout my career.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === f
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6 hover:shadow-lg transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 rounded-2xl object-cover" />
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.type === 'certification' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400'}`}>
                    <FontAwesomeIcon icon={item.type === 'certification' ? faCertificate : faTrophy} />
                  </span>
                </div>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${item.type === 'certification' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400'}`}>
                  {item.type === 'certification' ? 'Certification' : 'Award'}
                </span>
                <h3 className="font-bold mt-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">{item.issuer}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-3">{item.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                {item.credentialUrl && (
                  <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-4 hover:gap-3 transition-all">
                    View Credential <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
