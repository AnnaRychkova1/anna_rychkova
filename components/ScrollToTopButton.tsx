'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      className={`my-scroll-btn fixed bottom-4 right-6 z-50 flex items-center justify-center rounded-full bg-[var(--dark-accent)] transition duration-300 hover:bg-[var(--light-accent)] ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } w-12 h-12 md:w-14 md:h-14`}
    >
      <Icon
        iconName="ArrowUp"
        width={20}
        height={20}
        className="w-5 h-5 md:w-6 md:h-6"
      />
    </button>
  );
}
