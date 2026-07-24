import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope, faLocationDot, faCode, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { profile, socialLinks } from '../data/profile'
import { education } from '../data/experience'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6 inline-block">About Me</span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Passionate Engineer, <span className="gradient-text">Problem Solver</span></h1>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{profile.bio}</p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{profile.longBio}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href={profile.resumeUrl} className="btn-primary">
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </a>
                <a href={`mailto:${profile.email}`} className="btn-secondary">
                  <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                <FontAwesomeIcon icon={faLocationDot} className="text-indigo-500" />
                {profile.location}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden ring-4 ring-indigo-500/20 shadow-2xl">
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 card px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Open to work</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="section">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-bold mb-6">Personal Info</h2>
              <div className="space-y-4">
                {[
                  { label: 'Full Name', value: profile.name },
                  { label: 'Email', value: profile.email },
                  { label: 'Phone', value: profile.phone },
                  { label: 'Location', value: profile.location },
                  { label: 'Availability', value: profile.availability },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 py-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-gray-500 dark:text-gray-400 w-32 flex-shrink-0 text-sm">{item.label}</span>
                    <span className="font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                {socialLinks.slice(0, 4).map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                    className={`w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors ${s.color}`}>
                    <FontAwesomeIcon icon={s.name === 'GitHub' ? faGithub : faLinkedin} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-bold mb-6">Hobbies & Interests</h2>
              <div className="grid grid-cols-2 gap-4">
                {profile.hobbies.map((h) => (
                  <div key={h.name} className="card p-4 flex items-start gap-3">
                    <span className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                      <FontAwesomeIcon icon={faCode} />
                    </span>
                    <div>
                      <p className="font-semibold text-sm">{h.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-gray-500 dark:text-gray-400">My academic background and achievements.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <motion.div key={edu.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg">{edu.institution}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{edu.period}</span>
                </div>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{edu.degree} in {edu.field}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">GPA: {edu.gpa}</p>
                <ul className="space-y-1">
                  {edu.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <FontAwesomeIcon icon={faHeart} className="text-indigo-400 mt-0.5 text-xs flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Services and expertise I bring to every project.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Web Application Development', icon: faCode, desc: 'End-to-end development of scalable, responsive web applications using modern frameworks.' },
              { title: 'API & Backend Engineering', icon: faCode, desc: 'Designing robust RESTful and GraphQL APIs, microservices, and data pipelines built to scale.' },
              { title: 'Cloud Architecture', icon: faCode, desc: 'Architecting cloud-native solutions on AWS, GCP, and Azure with infrastructure-as-code.' },
              { title: 'Technical Consulting', icon: faCode, desc: 'Code audits, architecture reviews, and technical strategy to help your team ship faster.' },
              { title: 'Performance Optimization', icon: faCode, desc: 'Profiling and optimizing applications for speed, reducing load times and infrastructure costs.' },
              { title: 'Team Mentorship', icon: faCode, desc: 'Mentoring engineering teams on best practices, code quality, testing, and career growth.' },
            ].map((s, i) => (
              <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6 hover:shadow-lg transition-shadow">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-4">
                  <FontAwesomeIcon icon={s.icon} />
                </span>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
