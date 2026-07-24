import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'fa-laptop-code',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 93 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'Go', level: 75 },
      { name: 'Django', level: 82 },
      { name: 'FastAPI', level: 85 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    category: 'Database',
    icon: 'fa-database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 82 },
      { name: 'MySQL', level: 80 },
      { name: 'ClickHouse', level: 72 },
      { name: 'Elasticsearch', level: 75 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: 'fa-cloud',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 82 },
      { name: 'Terraform', level: 78 },
      { name: 'CI/CD', level: 88 },
      { name: 'Linux', level: 85 },
    ],
  },
  {
    category: 'AI / ML',
    icon: 'fa-brain',
    skills: [
      { name: 'PyTorch', level: 75 },
      { name: 'TensorFlow', level: 70 },
      { name: 'LangChain', level: 78 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'MLflow', level: 72 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: 'fa-tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Figma', level: 78 },
      { name: 'Jira', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Vim', level: 72 },
    ],
  },
]
