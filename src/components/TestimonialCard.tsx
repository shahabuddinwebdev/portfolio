import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import type { Testimonial } from '../types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card p-6 flex flex-col gap-4 h-full">
      <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo-500/30 text-3xl" />
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">"{testimonial.text}"</p>
      <div className="flex items-center gap-1 mb-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-amber-400 text-xs" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}
