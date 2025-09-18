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
          className="flex flex-col  gap-3 text-center "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={paragraphVariants}>
            I am a passionate and motivated{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Software Developer
            </span>{' '}
            with a strong drive to{' '}
            <span className="text-[var(--dark-accent)] font-bold">learn</span>,{' '}
            <span className="text-[var(--dark-accent)] font-bold">grow</span>,
            and create meaningful digital experiences.{' '}
          </motion.p>
          <motion.p variants={paragraphVariants}>
            My journey started with a love for{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              mathematics
            </span>{' '}
            from early childhood, which grew from solving math problems to
            solving real-world tasks through{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              writing code
            </span>
            . This passion not only inspired me to teach mathematics voluntarily
            but also to channel that analytical mindset into building modern,
            user-friendly applications.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            I specialize in building modern web applications using a combination
            of{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              front-end
            </span>{' '}
            and{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              back-end
            </span>{' '}
            technologies, and I enjoy leveraging{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              cloud platforms
            </span>{' '}
            to deliver scalable and reliable solutions.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            Alongside modern frameworks, I apply solid foundations in{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Data Structures &amp; Algorithms
            </span>
            ,{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Object-Oriented Programming &#40;OOP&#41;
            </span>
            ,{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Secure API Design &#40;REST &amp; gRPC&#41;
            </span>
            ,{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Test-Driven Development &#40;TDD&#41;
            </span>
            , and{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Performance Optimization
            </span>
            .{' '}
          </motion.p>
          <motion.p variants={paragraphVariants}>
            I thrive on challenges and take pride in writing clean, efficient
            code, designing intuitive interfaces, and solving complex problems
            with elegant solutions.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            Collaboration is at the heart of my work. I enjoy{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              sharing knowledge
            </span>
            , learning from others, and contributing to team success.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            Beyond the technical side, I see software as both a craft and an
            art. Just as I pay attention to details when{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              painting
            </span>
            , I apply the same dedication to building software that is not only
            functional but also beautiful and impactful.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            My long-term goal is to{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              contribute to larger projects
            </span>
            , deliver scalable and innovative solutions, and inspire others by
            sharing knowledge and best practices. Every project I work on is an
            opportunity to improve, explore new technologies, and make a lasting
            impact.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            With a{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              Higher Diploma Bachelor&rsquo;s degree
            </span>{' '}
            in Computer Science from the{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              National College of Ireland
            </span>
            , I am eager to continue developing my expertise, working on{' '}
            <span className="text-[var(--dark-accent)] font-bold">
              data-driven projects
            </span>
            , and growing in today&rsquo;s fast-evolving tech landscape.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
