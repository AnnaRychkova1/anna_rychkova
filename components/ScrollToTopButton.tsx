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
    // <button
    //   onClick={scrollToTop}
    //   title="Go to top"
    //   className={`fixed bottom-10 right-3 z-[99] flex items-center justify-center rounded-full fill-[var(--light-accent)] bg-[var(--dark-accent)] shadow-[4px_4px_6px_rgba(26,27,29,0.1),-4px_-4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[var(--light-accent)] hover:text-[#1a1b1d] ${
    //     visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    //   } w-14 h-14 md:w-16 md:h-16 font-sans text-2xl md:text-4xl`}
    // >
    //   <Icon iconName="ArrowUp" width={24} height={24} />
    // </button>
    <button
      onClick={scrollToTop}
      title="Go to top"
      className={`my-scroll-btn fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[var(--dark-accent)] transition-opacity duration-300 hover:bg-[var(--light-accent)] ${
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
