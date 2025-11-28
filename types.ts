import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  label?: string;
}
