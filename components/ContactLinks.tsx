import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export default function ContactLinks() {
  return (
    <ul className="flex gap-4 md:justify-start items-center">
      <li>
        <a
          href="https://github.com/AnnaRychkova1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
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
          aria-label="LinkedIn"
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
          aria-label="Email"
        >
          <MdAlternateEmail
            size={36}
            className="transition-all duration-300 ease-in-out fill-[var(--dark-accent)] stroke-[var(--dark-accent)] hover:fill-[var(--light-accent)] hover:stroke-[var(--light-accent)]"
          />
        </a>
      </li>
    </ul>
  );
}
