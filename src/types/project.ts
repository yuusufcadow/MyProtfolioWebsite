export interface Project {
  id: number;

  title: string;

  slug: string;

  category: string;

  description: string;

  contribution: string;

  organization?: string;

  technologies: string[];

  logoUrl?: string;

  liveUrl?: string;

  githubUrl?: string;

  image?: string;

  featured: boolean;
}