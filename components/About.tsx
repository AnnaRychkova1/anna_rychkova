'use client';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-22">
      <div className="container flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center">About Me</h2>
        <motion.div
          className="flex flex-col gap-3 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={paragraphVariants}>
            I am a dedicated{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Software Engineer
            </span>{' '}
            passionate about building scalable, maintainable, and
            high&#8211;impact digital systems.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            My journey began with a deep curiosity for{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              mathematics
            </span>{' '}
            &#8212; a mindset that naturally evolved into solving
            real&#8211;world problems through{' '}
            <span className="text-[var(--dark-accent)] font-bold">code</span>.
            This passion has grown from tackling abstract problems to designing
            and engineering complete software systems &#8212; from intuitive,
            user-centered interfaces to reliable, data-driven back-end
            architectures.
          </motion.p>

          <motion.p variants={paragraphVariants}>
            I focus on{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              engineering clean architectures
            </span>{' '}
            and developing software that balances performance, usability, and
            long&#8211;term reliability. My experience spans{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              front&#8211;end
            </span>
            development, creating intuitive interfaces, and{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              back&#8211;end
            </span>
            engineering, building{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              robust, secure, and scalable data solutions
            </span>
            .
          </motion.p>

          <motion.p variants={paragraphVariants}>
            I approach development as both an analytical and creative process
            &#8212; applying{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              data structures, algorithms, and design patterns
            </span>{' '}
            to craft solutions that are efficient, testable, and
            future&#8211;proof. I believe in engineering as craftsmanship: each
            function, API, and test contributes to a system that is elegant,
            reliable, and built to scale.
          </motion.p>

          <motion.p variants={paragraphVariants}>
            <span className="text-[var(--dark-accent)] font-bold">
              Collaboration, automation, and continuous improvement
            </span>{' '}
            are at the core of my work. I enjoy contributing to team success,
            implementing CI/CD pipelines, improving code quality through
            testing, and learning from every iteration. I value{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              knowledge sharing
            </span>{' '}
            and enjoy mentoring peers, as I believe that strong teams produce
            better software.
          </motion.p>

          <motion.p variants={paragraphVariants}>
            Beyond technical skills, I strive to build{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              software that delivers meaningful impact
            </span>{' '}
            &#8212; systems that not only meet functional requirements but also
            improve workflows, empower users, and support long&#8211;term
            business goals. Every project is an opportunity to explore
            innovative solutions, optimize processes, and enhance user
            experiences.
          </motion.p>

          <motion.p variants={paragraphVariants}>
            With a{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Higher Diploma in Computing &#40;First-Class Honours&#41;
            </span>
            from the{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              National College of Ireland
            </span>
            , I am driven to deepen my expertise in{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              distributed systems, database design, and secure software
              engineering
            </span>{' '}
            &#8212; building technology that not only works but endures.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
