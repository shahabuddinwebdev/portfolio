import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faPhone, faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faXTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../data/profile'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Awards', path: '/awards' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const socialIcons = [
  { icon: faGithub, url: 'https://github.com', label: 'GitHub' },
  { icon: faLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: faXTwitter, url: 'https://twitter.com', label: 'Twitter' },
  { icon: faDribbble, url: 'https://dribbble.com', label: 'Dribbble' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg text-white mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faCode} />
              </span>
              {profile.name}
            </Link>
            <p className="text-sm leading-relaxed mb-5">{profile.tagline}</p>
            <div className="flex gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm hover:text-indigo-400 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {['Web Development', 'API Engineering', 'Cloud Architecture', 'Technical Consulting', 'Performance Optimization', 'Team Mentorship'].map((s) => (
                <li key={s} className="hover:text-indigo-400 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-indigo-400 w-4" />
                <a href={`mailto:${profile.email}`} className="hover:text-indigo-400 transition-colors">{profile.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-indigo-400 w-4" />
                <span>{profile.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-indigo-400 w-4" />
                <span>{profile.location}</span>
              </li>
            </ul>
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {profile.availability}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
