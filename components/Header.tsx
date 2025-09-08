'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
// import Icon from './Icon';
import { FiMenu } from 'react-icons/fi';

interface NavLinkProps {
  href: string;
  text: string;
  isMobile?: boolean;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuMenuOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const rootFontSize = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        );
        const yOffset = -(3.9 * rootFontSize);
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 50);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsBlurred(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        isBlurred
          ? 'backdrop-blur-md shadow-md bg-transparent text-[var(--dark-accent)]'
          : 'bg-[var(--dark-accent)] text-[var(--light-accent)]'
      }`}
    >
      <div className="container header-container mx-auto flex justify-between items-center">
        <a href="./" className="flex-shrink-0">
          {isBlurred ? (
            <Image
              src="/images/logo_rectangle_tr.png"
              alt="My Logo"
              width={200}
              height={40}
              priority
              className="logo"
            />
          ) : (
            <Image
              src="/images/logo_rectangle_pink.png"
              alt="My Logo"
              width={200}
              height={40}
              priority
              className="logo"
            />
          )}
        </a>
        {/* Desktop Nav */}
        <nav className="hidden lg:block text-lg 2xl:text-2xl font-medium ">
          <ul className="flex gap-2 list-none">
            {/* <NavLink href="#hero" text="Home" /> */}
            <NavLink href="/#projects" text="Projects" />
            <NavLink href="/#skills" text="Skills" />
            <NavLink href="/#about" text="About" />
            <NavLink href="/#education" text="Education" />
            <NavLink href="/#contact" text="Contact" />
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden focus:outline-none px-4"
          aria-label="Toggle navigation"
        >
          {/* <Icon
            iconName="More"
            width={24}
            height={24}
            className={`w-9 h-10 transition-all duration-300 ${
              isBlurred
                ? 'fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:drop-shadow-[0_1px_2px_var(--light-accent)]'
                : 'fill-[var(--light-accent)] stroke-[var(--light-accent)] hover:drop-shadow-[0_1px_2px_var(--light-accent)]'
            }`}
          /> */}
          <FiMenu
            size={24}
            className={`w-9 h-10 transition-all duration-300 ${
              isBlurred
                ? 'fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:drop-shadow-[0_1px_2px_var(--light-accent)]'
                : 'fill-[var(--light-accent)] stroke-[var(--light-accent)] hover:drop-shadow-[0_1px_2px_var(--light-accent)]'
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2 text-lg font-medium items-end list-none">
            {/* <NavLink href="#hero" text="Home" isMobile /> */}
            <NavLink href="/#projects" text="Projects" />
            <NavLink href="/#skills" text="Skills" />
            <NavLink href="/#about" text="About" />
            <NavLink href="/#education" text="Education" />
            <NavLink href="/#contact" text="Contact" />
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, text, isMobile = false }: NavLinkProps) {
  const pathname = usePathname();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href.startsWith('/#')) {
      if (pathname !== '/') return;

      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        const rootFontSize = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        );
        const yOffset = -(3.9 * rootFontSize);
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };
  return (
    <li className="list-none">
      <a
        href={href}
        onClick={handleClick}
        className={`px-4 py-2 rounded-full hover:text-[var(--darc-accent)] hover:drop-shadow-[0_1px_1px_#f9689d] transition ${isMobile ? 'block' : ''}`}
      >
        {text}
      </a>
    </li>
  );
}
