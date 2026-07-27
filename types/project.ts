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
