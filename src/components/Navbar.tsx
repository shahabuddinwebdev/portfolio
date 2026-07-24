import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faCode } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './ThemeToggle'
import { profile } from '../data/profile'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Awards', path: '/awards' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-indigo-600 dark:text-indigo-400'
        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
              <FontAwesomeIcon icon={faCode} />
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.path} to={l.path} className={linkClass}>
                {l.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/contact" className="hidden lg:inline-flex btn-primary !px-5 !py-2 text-sm">
              Hire Me
            </Link>
            <button
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-gray-900 shadow-2xl lg:hidden p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-lg" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={l.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-medium transition-colors ${
                          isActive
                            ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`
                      }
                    >
                      {l.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center mt-6"
              >
                Hire Me
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
