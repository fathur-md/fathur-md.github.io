export type Project = {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

export type ProjectCategory = {
  id: string;
  title: string;
  description: string;
  icon: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: 'academic',
    title: 'Academic Projects',
    description: 'University coursework and assignments.',
    icon: '',
    projects: [
      {
        name: 'Web Programming',
        description:
          'Full-stack web application built for web programming course.',
        tech: ['Next.js', 'Tailwind CSS'],
        repo: 'https://github.com/fathur-md/uas-saas',
      },
    ],
  },
  {
    id: 'personal',
    title: 'Personal Projects',
    description: 'Side projects and tools I built for fun or learning.',
    icon: '',
    projects: [
      {
        name: 'Portfolio Website',
        description:
          'My personal portfolio website showcasing my projects and skills.',
        tech: ['Next.js', 'Tailwind CSS'],
        repo: 'https://github.com/fathur-md/fathur-md.github.io',
        demo: 'https://fathur-md.github.io',
      },
    ],
  },
  {
    id: 'experiment',
    title: 'Experiments',
    description: 'Small explorations and learning projects.',
    icon: '',
    projects: [
      {
        name: 'Place holder Name',
        description: 'A small experiment to learn new tech.',
        tech: ['React', 'Vite'],
        repo: 'placeholder',
      },
    ],
  },
];
