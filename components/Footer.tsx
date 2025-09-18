'use client';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { MdAlternateEmail, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="text-[var(--text-color)]">
      <div className="footer-container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6">
        <ul className="flex gap-4 md:justify-start items-center ml-4">
          <li>
            <a
              href="https://github.com/AnnaRychkova1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={36} className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/annarychkova1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={36} className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              href="mailto:anna.rychkova.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAlternateEmail size={36} className="footer-icon" />
            </a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} Made with{' '}
          <span className="footer-span">
            <FaHeart size={22} className="heart" />
          </span>{' '}
          by Anna Rychkova
        </p>

        <div
          className="flex gap-1 pr-[52px]"
          onClick={() =>
            window.open('https://www.google.com/maps/place/Ireland', '_blank')
          }
        >
          <MdLocationOn size={28} className="footer-icon" />
          <p className="text-2xl text-[var(--dark-accent)]">Ireland</p>
        </div>
      </div>
    </footer>
  );
}
