import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
    {
    category: 'Programming Languages',
    icon: 'fa-database',
    skills: [
      { name: 'HTML'},
      { name: 'CSS',},
      { name: 'JavaScript'},
      { name: 'TypeScript'},
      { name: 'Python'},
    ],
  },
  {
    category: 'Frontend Development',
    icon: 'fa-laptop-code',
    skills: [
      { name: 'React'},
      { name: 'React Native'},
      { name: 'Tailwind CSS'},
    ],
  },
  {
    category: 'Backend Development',
    icon: 'fa-server',
    skills: [
      { name: 'Node.js'},
      { name: 'Express Js'},
      { name: 'Rest APIs'},
      { name: 'Authentication'},
      { name: 'API Integration'}
    ],
  },
  {
    category: 'Databases',
    icon: 'fa-database',
    skills: [
      { name: 'PostgreSQL'},
      { name: 'MongoDB'},
      { name: 'MySQL'},
      { name: 'Database Design'}
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: 'fa-cloud',
    skills: [
      // { name: 'AWS'},
      { name: 'Docker'},
      // { name: 'Kubernetes'},
      // { name: 'Terraform'},
      { name: 'CI/CD'},
      // { name: 'Linux', level: 85 },
    ],
  },
  // {
  //   category: 'AI / ML',
  //   icon: 'fa-brain',
  //   skills: [
  //     // { name: 'PyTorch'},
  //     { name: 'TensorFlow'},
  //     // { name: 'LangChain', level: 78 },
  //     // { name: 'Scikit-learn', level: 80 },
  //     { name: 'Pandas'},
  //     // { name: 'MLflow', level: 72 },
  //   ],
  // },
  {
    category: 'Tools & Others',
    icon: 'fa-tools',
    skills: [
      { name: 'Git'},
      { name: 'Figma'},
      // { name: 'Jira'},
      { name: 'Postman'},
      // { name: 'Vim'},
    ],
  },
  {
    category: 'Research & Engineering',
    icon: 'fa-flask',
    skills: [
      { name: 'Ansys HFSS'},
      { name: 'Antenna Design'},
      { name: 'Signal Processing'},
      { name: 'MATLAB'},
    ],
  },
]
