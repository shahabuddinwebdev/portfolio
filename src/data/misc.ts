import type { GalleryItem, FAQ, Stat } from '../types'

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Team Hackathon Win', category: 'Events', image: 'https://picsum.photos/seed/gal1/600/400', description: 'Our team celebrating the HackSF 2022 grand prize victory.' },
  { id: 2, title: 'Conference Talk', category: 'Speaking', image: 'https://picsum.photos/seed/gal2/600/400', description: 'Presenting on distributed systems at NodeConf 2023.' },
  { id: 3, title: 'Office Setup', category: 'Workspace', image: 'https://picsum.photos/seed/gal3/600/400', description: 'My home office setup optimized for deep work.' },
  { id: 4, title: 'Team Offsite', category: 'Events', image: 'https://picsum.photos/seed/gal4/600/400', description: 'TechNova engineering team offsite in Lake Tahoe.' },
  { id: 5, title: 'Open Source Meetup', category: 'Community', image: 'https://picsum.photos/seed/gal5/600/400', description: 'Hosting the monthly open source contributors meetup.' },
  { id: 6, title: 'AWS re:Invent', category: 'Events', image: 'https://picsum.photos/seed/gal6/600/400', description: 'Attending AWS re:Invent 2023 in Las Vegas.' },
  { id: 7, title: 'Pair Programming', category: 'Work', image: 'https://picsum.photos/seed/gal7/600/400', description: 'Mentoring session with junior engineers.' },
  { id: 8, title: 'Product Launch', category: 'Work', image: 'https://picsum.photos/seed/gal8/600/400', description: 'Celebrating the launch of our v2.0 platform.' },
  { id: 9, title: 'Mountain Hiking', category: 'Hobbies', image: 'https://picsum.photos/seed/gal9/600/400', description: 'Weekend hike at Yosemite National Park.' },
  { id: 10, title: 'Photography', category: 'Hobbies', image: 'https://picsum.photos/seed/gal10/600/400', description: 'Street photography in downtown San Francisco.' },
  { id: 11, title: 'MIT Graduation', category: 'Education', image: 'https://picsum.photos/seed/gal11/600/400', description: 'Graduation day at MIT, May 2019.' },
  { id: 12, title: 'Whiteboard Session', category: 'Work', image: 'https://picsum.photos/seed/gal12/600/400', description: 'Architecture planning session for the new microservices platform.' },
]

export const faqs: FAQ[] = [
  { id: 1, question: 'Are you available for freelance or contract work?', answer: 'Yes! I take on select freelance and contract projects. I specialize in full-stack web applications, API design, and cloud architecture. Feel free to reach out via the contact form to discuss your project.' },
  { id: 2, question: 'What is your typical project timeline?', answer: 'It depends on scope. A simple landing page takes 1–2 weeks, a full-stack MVP typically 4–8 weeks, and larger enterprise projects 3–6 months. I always provide a detailed timeline estimate after our initial discovery call.' },
  { id: 3, question: 'Do you work with international clients?', answer: 'Absolutely. I work with clients across North America, Europe, and Asia. I\'m comfortable with async communication and can adjust my schedule for overlap hours when needed.' },
  { id: 4, question: 'What technologies do you prefer to work with?', answer: 'My primary stack is React/TypeScript on the frontend and Node.js or Python on the backend, with PostgreSQL or MongoDB for data. For infrastructure I lean on AWS with Docker and Kubernetes. That said, I adapt to the client\'s existing stack.' },
  { id: 5, question: 'Do you provide post-launch support?', answer: 'Yes. I offer 30 days of complimentary bug-fix support after every project launch. For ongoing maintenance and feature development, I offer monthly retainer packages.' },
  { id: 6, question: 'How do you handle project communication?', answer: 'I use Slack or Discord for day-to-day communication, Notion or Linear for project tracking, and weekly video calls for progress reviews. You\'ll always know exactly where your project stands.' },
  { id: 7, question: 'Can you help with an existing codebase?', answer: 'Yes, I regularly take on legacy code modernization, performance optimization, and feature additions to existing projects. I\'ll start with a thorough code audit before proposing any changes.' },
  { id: 8, question: 'What is your rate?', answer: 'My rates vary by project type and duration. Hourly rates start at $150/hr for consulting, with fixed-price project quotes available for well-defined scopes. Contact me for a custom quote.' },
]

export const stats: Stat[] = [
  { label: 'Years of Experience', value: '7+', icon: 'fa-calendar' },
  { label: 'Projects Completed', value: '80+', icon: 'fa-check-circle' },
  { label: 'Happy Clients', value: '50+', icon: 'fa-smile' },
  { label: 'GitHub Stars', value: '3.2K', icon: 'fa-star' },
  { label: 'Open Source Contributions', value: '500+', icon: 'fa-code-branch' },
  { label: 'Certifications', value: '8', icon: 'fa-certificate' },
]
