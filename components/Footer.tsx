import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="text-[var(--text-color)] px-4 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-6 px-6 pr-24">
        <p>
          &copy; {new Date().getFullYear()} Anna Rychkova. All rights reserved.
        </p>
        <ul className="flex gap-4 md:justify-start items-center">
          <li>
            {' '}
            <a
              href="https://github.com/AnnaRychkova1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Icon iconName="GitHub" width={28} height={28} />
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
              <Icon iconName="LinkedIn" width={28} height={28} />
            </a>
          </li>
        </ul>
        <div className="flex gap-1">
          <Icon iconName="Map1" width={24} height={24} />
          <p className="text-2xl text-[var(--dark-accent)]">Ireland</p>
        </div>
      </div>
    </footer>
  );
}
