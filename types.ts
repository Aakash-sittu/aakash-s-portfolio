
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  layout: '1x1' | '2x1' | '1x2' | '2x2';
}

export interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error';
}
