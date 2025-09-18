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
