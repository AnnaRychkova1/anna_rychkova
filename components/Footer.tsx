'use client';
import Icon from './Icon';

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
              <Icon
                iconName="GitHub"
                width={28}
                height={28}
                className="footer-icon"
              />
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
              <Icon
                iconName="LinkedIn"
                width={28}
                height={28}
                className="footer-icon"
              />
            </a>
          </li>
        </ul>
        {/* <div> */}
        {/* &copy; {new Date().getFullYear()} Anna Rychkova. Made with 
          <Icon iconName="Cofee" width={24} height={24} /> &
          <Icon iconName="Star" width={24} height={24} /> */}
        <p className="flex items-center gap-1">
          &copy; {new Date().getFullYear()} Made with{' '}
          <Icon iconName="Heart" width={24} height={24} className="heart" /> by
          Anna Rychkova
        </p>
        {/* </div> */}
        <div
          className="flex gap-1 pr-[52px]"
          onClick={() =>
            window.open('https://www.google.com/maps/place/Ireland', '_blank')
          }
        >
          <Icon iconName="Map" width={24} height={24} className="footer-icon" />
          <p className="text-2xl text-[var(--dark-accent)]">Ireland</p>
        </div>
      </div>
    </footer>
  );
}
