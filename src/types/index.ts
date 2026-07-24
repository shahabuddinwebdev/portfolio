export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
  category: string
}

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  location: string
  description: string[]
  technologies: string[]
  logo: string
}

export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  period: string
  gpa: string
  achievements: string[]
}

export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface Award {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  image: string
  type: 'award' | 'certification'
  credentialUrl?: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  text: string
  rating: number
}

export interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface Stat {
  label: string
  value: string
  icon: string
}
