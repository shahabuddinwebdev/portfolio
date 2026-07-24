import type { Experience, Education } from '../types'

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'TechNova Inc.',
    role: 'Senior Software Engineer',
    period: 'Jan 2022 – Present',
    location: 'San Francisco, CA (Remote)',
    description: [
      'Led architecture and development of a microservices platform serving 2M+ daily active users',
      'Reduced API response times by 65% through caching strategies and query optimization',
      'Mentored a team of 6 engineers and conducted 100+ code reviews per quarter',
      'Drove adoption of TypeScript and testing best practices, increasing code coverage from 40% to 92%',
      'Designed and implemented real-time event streaming pipeline processing 50M events/day',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Kubernetes', 'PostgreSQL', 'Kafka'],
    logo: 'https://picsum.photos/seed/technova/80/80',
  },
  {
    id: 2,
    company: 'CloudSphere Solutions',
    role: 'Software Engineer II',
    period: 'Mar 2020 – Dec 2021',
    location: 'New York, NY',
    description: [
      'Built and maintained cloud infrastructure automation tools used by 500+ enterprise clients',
      'Developed a self-service deployment platform reducing deployment time from 2 hours to 8 minutes',
      'Implemented OAuth 2.0 / OIDC authentication system handling 10M+ logins monthly',
      'Collaborated with product and design teams to ship 3 major product releases on schedule',
      'Optimized database schemas and queries, reducing cloud infrastructure costs by $120K/year',
    ],
    technologies: ['Python', 'Django', 'React', 'AWS', 'Terraform', 'Docker'],
    logo: 'https://picsum.photos/seed/cloudsphere/80/80',
  },
  {
    id: 3,
    company: 'Pixel Labs',
    role: 'Frontend Developer',
    period: 'Jun 2018 – Feb 2020',
    location: 'Austin, TX',
    description: [
      'Developed responsive web applications for 15+ client projects across various industries',
      'Built a reusable component library adopted across 8 internal projects, saving 200+ dev hours',
      'Improved Lighthouse performance scores from 45 to 95+ across all client websites',
      'Integrated third-party APIs including Stripe, Twilio, and Google Maps for client applications',
      'Participated in agile sprints, daily standups, and bi-weekly retrospectives',
    ],
    technologies: ['React', 'JavaScript', 'Vue.js', 'SCSS', 'GraphQL', 'Figma'],
    logo: 'https://picsum.photos/seed/pixellabs/80/80',
  },
  {
    id: 4,
    company: 'DataBridge Corp',
    role: 'Software Engineering Intern',
    period: 'May 2017 – Aug 2017',
    location: 'Seattle, WA',
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

export const education: Education[] = [
  {
    id: 1,
    institution: 'Massachusetts Institute of Technology',
    degree: 'Master of Science',
    field: 'Computer Science',
    period: '2017 – 2019',
    gpa: '3.9 / 4.0',
    achievements: [
      'Thesis: "Scalable Distributed Systems for Real-Time Data Processing"',
      'Graduate Research Assistant in the Distributed Systems Lab',
      'Teaching Assistant for 6.824 Distributed Systems',
      'MIT Graduate Fellowship recipient',
    ],
  },
  {
    id: 2,
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Electrical Engineering & Computer Science',
    period: '2013 – 2017',
    gpa: '3.85 / 4.0',
    achievements: [
      'Graduated with Highest Honors (Summa Cum Laude)',
      'President of the ACM Student Chapter',
      'Winner of the Berkeley Hackathon 2016',
      'Dean\'s List all 8 semesters',
    ],
  },
]
