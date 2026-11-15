import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring real-time inventory management, Stripe payment integration, order tracking, and a powerful admin dashboard with analytics.',
    image: 'https://picsum.photos/seed/ecommerce/800/500',
    technologies: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Postgress'],
    github: 'https://github.com',
    demo: 'https://bcommerce-client.vercel.app/',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Job Circular App',
    description: 'Intelligent conversational AI with context memory, multi-modal input, and real-time streaming.',
    longDescription: 'An advanced AI chat application powered by large language models, featuring conversation history, file uploads, code highlighting, and real-time streaming responses.',
    image: 'https://picsum.photos/seed/aichat/800/500',
    technologies: ['React', 'React Native', 'JavaScript', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://job-circular-client.vercel.app/',
    featured: true,
    category: 'AI/ML',
  },

]
