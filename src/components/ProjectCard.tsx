import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faGithub} /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-indigo-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
          </a>
        </div>
        {project.featured && (
          <span className="absolute top-3 left-3 bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} className="text-xs" /> Featured
          </span>
        )}
        <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((t) => (
            <span key={t} className="text-xs bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-full">{t}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 px-2.5 py-1 rounded-full">+{project.technologies.length - 5}</span>
          )}
        </div>
        <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center justify-center gap-2 py-2">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors flex items-center justify-center gap-2 py-2 rounded-lg">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
