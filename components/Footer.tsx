'use client';
// import Icon from './Icon';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="text-[var(--text-color)]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6">
        <ul className="flex gap-4 md:justify-start items-center">
          <li>
            {' '}
            <a
              href="https://github.com/AnnaRychkova1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub size={28} className="footer-icon" />
              {/* <Icon
                iconName="GitHub"
                width={28}
                height={28}
                className="footer-icon"
              /> */}
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://www.linkedin.com/in/annarychkova1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin size={28} className="footer-icon" />
              {/* <Icon
                iconName="LinkedIn"
                width={28}
                height={28}
                className="footer-icon"
              /> */}
            </a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} Made with{' '}
          <span className="footer-span">
            {/* <Icon iconName="Heart" width={24} height={24} className="heart" /> */}
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
          {/* <Icon iconName="Map" width={24} height={24} className="footer-icon" /> */}

          <MdLocationOn size={28} className="footer-icon" />
          <p className="text-2xl text-[var(--dark-accent)]">Ireland</p>
        </div>
      </div>
    </footer>
  );
}
