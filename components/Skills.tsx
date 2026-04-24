'use client';
import { motion, Variants } from 'framer-motion';
import { techStack } from '@/data/techStack';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const categories = [
  { key: 'backend', title: 'Backend Engineering' },
  { key: 'frontend', title: 'Frontend' },
  { key: 'language', title: 'Languages' },
  { key: 'tool', title: 'Tools & DevOps' },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-22">
      <div className="container flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          My Skills
        </h2>

        <div className="flex flex-col gap-4">
          {categories.map(cat => {
            const items = techStack.filter(item => item.category === cat.key);
            return (
              <motion.div
                key={cat.key}
                className="flex flex-col gap-2 items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold text-center text-[var(--dark-accent)]">
                  {cat.title}
                </h4>
                <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 rounded-[1.5rem] px-4 w-full">
                  {items.map(({ icon, name }) => (
                    <motion.li
                      key={name}
                      className="flex  items-center gap-2 p-4 rounded-xl shadow-md shadow-fuchsia-900/10 hover:scale-105 transition-transform duration-300"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      {icon}
                      <span className="font-semibold text-sm">{name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
