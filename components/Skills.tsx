'use client';
import { languages, frameworks, tools } from '../data/techStack';
import { motion, Variants } from 'framer-motion';

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

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-22">
      <div className="container flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          My Skills
        </h2>
        <div className="flex flex-col gap-4">
          <motion.div
            className="flex flex-col gap-2 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-[var(--dark-accent)]">
              Languages
            </h3>
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 rounded-[1.5rem] p-4 w-full">
              {languages.map(({ icon, name }) => (
                <motion.li
                  key={name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl shadow-md shadow-fuchsia-900/10 hover:scale-105 transition-transform duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {icon}
                  <span className="font-semibold">{name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-center text-[var(--dark-accent)]">
              Frameworks
            </h3>
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 rounded-[1.5rem] p-4 w-full">
              {frameworks.map(({ icon, name }) => (
                <motion.li
                  key={name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl shadow-md shadow-fuchsia-900/10 hover:scale-105 transition-transform duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {icon}

                  <span className="font-semibold">{name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl md:text-4xl font-bold text-center text-[var(--dark-accent)]">
              Tools
            </h3>
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 rounded-[1.5rem] p-4 w-full">
              {tools.map(({ icon, name }) => (
                <motion.li
                  key={name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl shadow-md shadow-fuchsia-900/10 hover:scale-105 transition-transform duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {icon}

                  <span className="font-semibold">{name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
