'use client';
// import Link from 'next/link';

import { motion } from 'framer-motion';
import { FaRegFolderOpen } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          My Projects
        </h2>
        <div className="flex justify-end">
          <motion.a
            href="/projects"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[var(--light-accent)] text-[var(--dark-accent)] font-semibold rounded-2xl shadow-md hover:bg-[var(--dark-accent)] hover:text-[var(--light-accent)] transition-all duration-300 w-max md:w-[162px] text-center"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: 'spring',
              stiffness: 120,
            }}
          >
            <FaRegFolderOpen size={22} />
            View all
          </motion.a>
        </div>
      </div>
    </section>
  );
}
