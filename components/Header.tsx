'use client';
import { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import type { NavLinkProps } from '@/types/types';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsBlurred(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, menuRef]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        isBlurred
          ? 'backdrop-blur-md shadow-md bg-transparent text-[var(--dark-accent)]'
          : 'bg-[var(--dark-accent)] text-[var(--light-accent)]'
      }`}
    >
      <div className="header-container mx-auto flex justify-between items-center">
        <a href="./" className="flex-shrink-0">
          {isBlurred ? (
            <Image
              src="/images/logo_rectangle_tr.png"
              alt="My Logo"
              width={200}
              height={40}
              priority
              className="w-auto h-auto"
            />
          ) : (
            <Image
              src="/images/logo_rectangle_pink.png"
              alt="My Logo"
              width={200}
              height={40}
              priority
              className="w-auto h-auto"
            />
          )}
        </a>
        {/* Desktop Nav */}
        <nav className="hidden lg:block text-lg 2xl:text-2xl font-medium ">
          <ul className="flex gap-2 list-none">
            <NavLink href="/projects" text="Projects" />
            <NavLink href="/#skills" text="Skills" />
            <NavLink href="/#about" text="About" />
            <NavLink href="/#education" text="Education" />
            <NavLink href="/#contact" text="Contact" />
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden focus:outline-none px-4"
          aria-label="Toggle navigation"
        >
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
        <div ref={menuRef} className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col gap-1 text-lg font-medium items-end list-none">
            <NavLink
              href="/projects"
              text="Projects"
              isMobile
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavLink
              href="/#skills"
              text="Skills"
              isMobile
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavLink
              href="/#about"
              text="About"
              isMobile
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavLink
              href="/#education"
              text="Education"
              isMobile
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <NavLink
              href="/#contact"
              text="Contact"
              isMobile
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, text, isMobile = false, onClick }: NavLinkProps) {
  return (
    <li className="list-none w-full text-right">
      <Link href={href} passHref legacyBehavior>
        <a
          onClick={onClick}
          className={`px-4 py-2 rounded-full hover:text-[var(--darc-accent)] hover:drop-shadow-[0_1px_1px_#f9689d] transition ${
            isMobile ? 'block' : ''
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
