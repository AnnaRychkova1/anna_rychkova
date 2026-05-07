'use client';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-22">
      <div className="container flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center">About Me</h2>
        <motion.div
          className="flex flex-col gap-4 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl font-semibold">
              Backend Development
            </h4>
            <p className="max-w-[900px]">
              Design and build backend services, REST APIs, and data-driven
              applications using Node.js and TypeScript, focusing on
              reliability, clean structure, and maintainability.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl font-semibold">
              API & System Design
            </h4>
            <p className="max-w-[900px]">
              Design APIs and implement authentication systems (JWT, RBAC) in
              project-based environments
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl font-semibold">
              Networking & Application Behaviour
            </h4>
            <p className="max-w-[900px]">
              Applied understanding of how applications communicate over HTTP,
              DNS, and TCP/IP in backend development and API debugging.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl font-semibold">
              Full-Stack Development
            </h4>
            <p className="max-w-[900px]">
              Develop full-stack applications using React and Next.js,
              connecting frontend interfaces with backend services.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl font-semibold">
              Collaboration & Engineering Practices
            </h4>
            <p className="max-w-[900px]">
              Work in team environments using GitHub workflows, including pull
              requests, code reviews, and resolving merge conflicts. Acted as
              team lead in a training project, coordinating delivery and
              development process.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
