export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: string;
  icon: string;
  caseStudyLink?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  tags: string[];
  logo?: string;
  color: string;
}

export interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

export interface NotificationProps {
  message: string;
  type: 'success' | 'error';
}
