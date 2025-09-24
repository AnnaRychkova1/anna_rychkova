export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface NavLinkProps {
  href: string;
  text: string;
  isMobile?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface Project {
  id: number;
  name: string;
  images: string[];
  role: string;
  type: string;
  overview: string;
  contribution: string;
  github: string;
  website: string;
  technologies: string[];
}
