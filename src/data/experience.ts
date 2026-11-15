import type { Experience, Education, Research } from '../types'

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'GirlScript Summer of Code',
    role: 'Contributor',
    period: 'May 2026 – Present',
    location: '(Remote)',
    description: [
      'Led architecture and development of a microservices platform serving 2M+ daily active users',
      'Reduced API response times by 65% through caching strategies and query optimization',
      'Mentored a team of 6 engineers and conducted 100+ code reviews per quarter',
      'Drove adoption of TypeScript and testing best practices, increasing code coverage from 40% to 92%',
      'Designed and implemented real-time event streaming pipeline processing 50M events/day',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'JavaScript', 'Python', 'Kafka'],
    logo: 'https://repository-images.githubusercontent.com/331823142/9764a900-5c8e-11eb-9f94-da2a01385e83',
  },

  {
    id: 2,
    company: 'Freelancer (Various Clients)',
    role: 'Full Stack Web Developer',
    period: 'May 2023 – Aug 2025',
    location: 'Remote',
    description: [
      'Developed data pipeline scripts to automate ETL processes, saving 15 hours of manual work weekly',
      'Built internal dashboard for visualizing sales metrics using D3.js and React',
      'Fixed 40+ bugs and wrote unit tests for legacy Python codebase',
      'Presented intern project to 50+ engineers at end-of-summer demo day',
    ],
    technologies: ['Python', 'React', 'D3.js', 'SQL', 'Pandas'],
    logo: 'https://picsum.photos/seed/databridge/80/80',
  },
]

export const research: Research[] = [
  {
    id: 1,
    organization: '7th International Conference on Electrical Engineering and Information & Communication Technology',
    title: 'Design of a Compact Meandered Patch Antenna for 2.4 GHz Brain-Machine Interface Applications',
    period: '2026',
    authors: 'Md. Shahab Uddin, Mohammad Nazmus Shakib, Zubair Uddin Raqib,  Mijanur Rahman',
    description: [
      'Reduced API response times by 65% through caching strategies and query optimization',
      'Mentored a team of 6 engineers and conducted 100+ code reviews per quarter',
      'Drove adoption of TypeScript and testing best practices, increasing code coverage from 40% to 92%',
      'Designed and implemented real-time event streaming pipeline processing 50M events/day',
    ],
    logo: 'https://repository-images.githubusercontent.com/331823142/9764a900-5c8e-11eb-9f94-da2a01385e83',
    publisher: 'IEEE'
  },
]

export const education: Education[] = [
  {
    id: 1,
    institution: 'Green University of Bangladesh',
    degree: 'Bachelor of Science',
    field: 'Electrical & Electronics Engineering',
    period: '2026',
    gpa: '3.18/ 4.0',
    achievements: [
      'Received Dean Award for Academic Excellence in Fall 2020',
      'Relevant Coursework: Digital Electronics (Digital Logic Design), Microprocessor & Interfacing, Computer Programming, Computer Programming & Lab, Digital Signal Processing, Differential and Integral Calculus, Ordinary and Partial Differential Equations and Coordinate Geometry, Linear Algebra and Complex Variable, Probability & Statistics'
    ],
  },
  
]
