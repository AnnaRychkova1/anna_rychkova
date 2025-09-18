'use client';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { MdAlternateEmail, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="text-[var(--text-color)]">
      <div className="container footer-container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6">
        <ul className="flex gap-4 md:justify-start items-center md:ml-4">
          <li>
            <a
              href="https://github.com/AnnaRychkova1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={36}
                className="transition-all duration-300 ease-in-out fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:fill-[var(--light-accent)] hover:stroke-[var(--light-accent)]"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/annarychkova1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={36}
                className="transition-all duration-300 ease-in-out fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:fill-[var(--light-accent)] hover:stroke-[var(--light-accent)]"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:anna.rychkova.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAlternateEmail
                size={36}
                className="transition-all duration-300 ease-in-out fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:fill-[var(--light-accent)] hover:stroke-[var(--light-accent)]"
              />
            </a>
          </li>
        </ul>
        <p className="md:text-center">
          &copy; {new Date().getFullYear()} Made with{' '}
          <span className="inline-block align-middle">
            <FaHeart
              size={22}
              className="heart fill-[var(--light-accent)] stroke-[var(--light-accent)] "
            />
          </span>{' '}
          by Anna Rychkova
        </p>

        <div
          className="flex gap-1"
          onClick={() =>
            window.open('https://www.google.com/maps/place/Ireland', '_blank')
          }
        >
          <MdLocationOn
            size={28}
            className="transition-all duration-300 ease-in-out fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:fill-[var(--light-accent)] hover:stroke-[var(--light-accent)]"
          />
          <p className="text-2xl text-[var(--dark-accent)]">Ireland</p>
        </div>
      </div>
    </footer>
  );
}
