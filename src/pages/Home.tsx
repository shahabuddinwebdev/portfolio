import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDownload, faEnvelope, faCode, faServer, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { profile, socialLinks } from '../data/profile'
import { stats } from '../data/misc'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import { experiences } from '../data/experience'
import { awards } from '../data/awards'
import { testimonials } from '../data/testimonials'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'

const iconMap: Record<string, typeof faCode> = {
  'fa-laptop-code': faCode,
  'fa-server': faServer,
  'fa-cloud': faCloud,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function Home() {
  const featured = projects.filter((p) => p.featured)
  const certifications = awards.filter((a) => a.type === 'certification').slice(0, 3)
  const awardItems = awards.filter((a) => a.type === 'award').slice(0, 3)

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center section pt-24 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950/30">
        <div className="container-max w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Hi, I'm <span className="gradient-text">{profile.firstName}</span> 👋
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-4 font-medium">{profile.title}</p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">{profile.bio}</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/projects" className="btn-primary">
                  View My Work <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <a href={profile.resumeUrl} className="btn-secondary">
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </a>
                <Link to="/contact" className="btn-secondary">
                  <FontAwesomeIcon icon={faEnvelope} /> Contact Me
                </Link>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.slice(0, 3).map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`text-gray-400 text-xl transition-colors ${s.color}`}
                  >
                    <FontAwesomeIcon icon={s.name === 'GitHub' ? faGithub : faLinkedin} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden ring-4 ring-indigo-500/20 shadow-2xl shadow-indigo-500/10">
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="font-bold text-lg">2+ Years</p>
                </div>
                <div className="absolute -top-4 -right-4 card px-4 py-3 shadow-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
                  <p className="font-bold text-lg">30+ Done</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-indigo-600 dark:bg-indigo-700">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center text-white"
              >
                <p className="text-4xl font-bold mb-1">{s.value}</p>
                <p className="text-indigo-200 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">A selection of my best work across different domains and technologies.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="btn-primary">
              View All Projects <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Technologies I work with across the full stack.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div key={cat.category} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <FontAwesomeIcon icon={iconMap[cat.icon] ?? faCode} />
                  </span>
                  <h3 className="font-semibold text-lg">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s.name} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">{s.name}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/skills" className="btn-secondary">
              View Detailed Skills <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">My professional journey across leading tech companies.</p>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {experiences.slice(0, 3).map((exp, i) => (
              <motion.div key={exp.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-6 flex gap-4">
                <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">{exp.company} · {exp.location}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.description[0]}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/experience" className="btn-secondary">
              Full Experience <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Preview */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Awards & Certifications</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Recognition and credentials earned throughout my career.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...certifications, ...awardItems].map((item, i) => (
              <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-5 flex gap-4 items-start">
                <img src={item.image} alt={item.title} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                <div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.type === 'certification' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400'}`}>
                    {item.type === 'certification' ? 'Certification' : 'Award'}
                  </span>
                  <h3 className="font-semibold mt-1 text-sm leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.issuer} · {item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/awards" className="btn-secondary">
              View All Awards <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Feedback from colleagues, managers, and clients I've worked with.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div key={t.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-max text-center text-white">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
              </Link>
              <a href={profile.resumeUrl} className="border border-white/40 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
