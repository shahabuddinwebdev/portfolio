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
    authors: 'Md. Shahab Uddin, Dr. Mohammed Nazmus Shakib, Zubair Uddin Raqeeb, Md Mijanur Rahman',
    logo: 'https://brand-experience.ieee.org/wp-content/uploads/2016/12/LogoTest-e1481836752230.png',
    publisher: 'IEEE',
    paperUrl: ''
  },
  {
    id: 2,
    organization: '7th International Conference on Electrical Engineering and Information & Communication Technology',
    title: 'A Compact UWB Implantable Antenna for Brain–Machine Interface and Neural Biotelemetry',
    period: '2026',
    authors: 'Md. Shahab Uddin, Dr. Mohammed Nazmus Shakib, Zubair Uddin Raqeeb, Soyed Abir Hasan, Md Mijanur Rahman, Md Rishad',
    logo: 'https://brand-experience.ieee.org/wp-content/uploads/2016/12/LogoTest-e1481836752230.png',
    publisher: 'IEEE',
    paperUrl: ''
  },
  {
    id: 3,
    organization: 'International Conference on Electrical, Computer and Communication Engineering.',
    title: 'Design and Characterization of a Compact Biocompatible UWB Antenna for Brain–Machine Interface Systems',
    period: '2026',
    authors: 'Md. Shahab Uddin, Dr. Mohammed Nazmus Shakib',
    logo: 'https://brand-experience.ieee.org/wp-content/uploads/2016/12/LogoTest-e1481836752230.png',
    publisher: 'IEEE',
    paperUrl: ''
  },
  {
    id: 4,
    organization: '7th International Conference on Electrical Engineering and Information & Communication Technology',
    title: 'A Compact Triple-Band Implantable Antenna for Wireless Capsule Telemetry',
    period: '2026',
    authors: 'Md Mijanur Rahman, Dr. Mohammed Nazmus Shakib, Md. Shahab Uddin ',
    logo: 'https://brand-experience.ieee.org/wp-content/uploads/2016/12/LogoTest-e1481836752230.png',
    publisher: 'IEEE',
    paperUrl: ''
  },
  {
    id: 5,
    organization: '7th International Conference on Electrical Engineering and Information & Communication Technology',
    title: 'Design of a Compact Meandered Patch Antenna for 2.4 GHz Brain-Machine Interface Applications',
    period: '2026',
    authors: 'Md. Shahab Uddin, Dr. Mohammed Nazmus Shakib, Zubair Uddin Raqeeb, Soyed Abir Hasan, Md Mijanur Rahman, Md Rishad',
    logo: 'https://brand-experience.ieee.org/wp-content/uploads/2016/12/LogoTest-e1481836752230.png',
    publisher: 'IEEE',
    paperUrl: ''
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
