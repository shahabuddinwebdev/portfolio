import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faServer, faDatabase, faCloud, faBrain, faTools } from '@fortawesome/free-solid-svg-icons'
import { skillCategories } from '../data/skills'

const iconMap: Record<string, typeof faLaptopCode> = {
  'fa-laptop-code': faLaptopCode,
  'fa-server': faServer,
  'fa-database': faDatabase,
  'fa-cloud': faCloud,
  'fa-brain': faBrain,
  'fa-tools': faTools,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

export default function Skills() {
  return (
    <main className="pt-16">
      <section className="section bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6 inline-block">Expertise</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Skills & <span className="gradient-text">Technologies</span></h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">A comprehensive overview of my technical skills across the full development stack.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div key={cat.category} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={iconMap[cat.icon] ?? faLaptopCode} />
                  </span>
                  <h3 className="font-bold text-xl">{cat.category}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((s, j) => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1.5 text-sm">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{s.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: j * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
