import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'fa-laptop-code',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 93 },
      { name: 'React', level: 82 },
      { name: 'React Native', level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express Js', level: 88 },
      { name: 'Rest API', level: 75 },
    ],
  },
  {
    category: 'Database',
    icon: 'fa-database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: 'fa-cloud',
    skills: [
      // { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      // { name: 'Kubernetes', level: 82 },
      // { name: 'Terraform', level: 78 },
      { name: 'CI/CD', level: 88 },
      // { name: 'Linux', level: 85 },
    ],
  },
  {
    category: 'AI / ML',
    icon: 'fa-brain',
    skills: [
      // { name: 'PyTorch', level: 75 },
      { name: 'TensorFlow', level: 70 },
      // { name: 'LangChain', level: 78 },
      // { name: 'Scikit-learn', level: 80 },
      { name: 'Pandas', level: 85 },
      // { name: 'MLflow', level: 72 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: 'fa-tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Figma', level: 78 },
      // { name: 'Jira', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
      // { name: 'Vim', level: 72 },
    ],
  },
]
