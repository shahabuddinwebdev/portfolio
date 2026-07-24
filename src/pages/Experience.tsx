import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { experiences, education } from '../data/experience'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Experience() {
  return (
    <main className="pt-16">
      <section className="section bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6 inline-block">Career</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">My professional journey across leading technology companies.</p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="section">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-10 text-center">Professional Experience</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 hidden md:block" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div key={exp.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:pl-16 relative">
                  {/* Dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 hidden md:block" />
                  <div className="card p-6">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <img src={exp.logo} alt={exp.company} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap justify-between gap-2">
                          <h3 className="font-bold text-xl">{exp.role}</h3>
                          <span className="text-sm bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full">{exp.period}</span>
                        </div>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs" /> {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {exp.technologies.map((t) => (
                        <span key={t} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <h2 className="text-2xl font-bold mb-10 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <motion.div key={edu.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl">{edu.institution}</h3>
                  <span className="text-sm bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full">{edu.period}</span>
                </div>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{edu.degree} in {edu.field}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">GPA: <span className="font-semibold text-gray-700 dark:text-gray-300">{edu.gpa}</span></p>
                <ul className="space-y-1.5">
                  {edu.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-400 mt-0.5 flex-shrink-0 text-xs" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
