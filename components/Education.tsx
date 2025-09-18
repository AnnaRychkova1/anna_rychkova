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

export default function Education() {
  return (
    <section id="education" className="scroll-mt-22">
      <div className="container flex flex-col gap-6  text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          Education
        </h2>

        {/* Degrees */}
        <motion.div
          className="flex flex-col gap-4 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center font-semibold"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl">
              Higher Diploma in Science in Computing (Software Developer)
            </h4>
            <p className="text-lg md:text-xl">
              National College of Ireland, Level 8 NFQ
            </p>
            <p className="text-gray-500 max-w-[900px] font-normal">
              Software Development, Object Oriented Software Engineering,
              Introduction to Databases, Web Design and Client-Side Scripting,
              Computer Architecture Operating Systems and Networks, Data
              Structures, Algorithms and Advanced Programming, Distributed
              Systems
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center font-semibold"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl">
              Fullstack Developer
            </h4>
            <p className="text-lg md:text-xl">GoIt Academy</p>
            <p className="text-gray-500 max-w-[900px] font-normal">
              HTML+CSS, JavaScript, React, Node.js, TypeScript, Career Skills,
              Soft Skills
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center font-semibold"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl">
              Bachelor of Science in Education (Physics and Mathematics)
            </h4>
            <p className="text-lg md:text-xl">Zhytomyr State University</p>
            <p className="text-gray-500 max-w-[900px] font-normal">
              Higher Mathematics, Theoretical Physics, Algebra & Geometry,
              Differential Equations, Pedagogy, Psychology, Teaching Methodology
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center font-semibold"
          >
            <h4 className="text-[var(--dark-accent)] text-xl md:text-2xl">
              Office Administration
            </h4>
            <p className="text-lg md:text-xl">Carlow Institute (VTOS)</p>
            <p className="text-gray-500 max-w-[900px] font-normal">
              General Office Skills, Communications, English for Speakers of
              Other Languages, Business English, Work Experience, Customer
              Services, Bookkeeping and Accounts, Word Processing, Mathematics,
              Spreadsheets
            </p>
          </motion.div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          className="flex flex-col gap-2 items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center"
            variants={itemVariants}
          >
            Certificates
          </motion.h3>
          <motion.div variants={itemVariants} className="mt-2">
            <h4 className="font-semibold">
              <a
                href="https://drive.google.com/file/d/1wHhhsR7Bgalv1O9XLOG5eshhjmLREgbV/view?usp=sharing"
                target="_blank"
                className="text-[var(--dark-accent)] underline text-xl md:text-2xl"
              >
                Full Stack Developer
              </a>
            </h4>
            <p className="text-gray-500">
              Certified by <span className="font-bold"> GoIT Academy</span>
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-2">
            <h4 className="font-semibold">
              <a
                href="https://drive.google.com/file/d/1MWi-r-4uHyQxAVv_H-N-1U1PuWAGrpvn/view?usp=sharing"
                target="_blank"
                className="text-[var(--dark-accent)] underline text-xl md:text-2xl"
              >
                IT Specialist HTML and CSS
              </a>
            </h4>
            <p className="text-gray-500">
              Certified by <span className="font-bold"> Certiport</span>
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-2">
            <h4 className="font-semibold">
              <a
                href="https://drive.google.com/file/d/1Wn9KPxrFl2ir2ZLkR6j1vZVzvEA2OZox/view?usp=sharing"
                target="_blank"
                className="text-[var(--dark-accent)] underline text-xl md:text-2xl"
              >
                Introduction to Programming with Python
              </a>
            </h4>
            <p className="text-gray-500">
              Certified by <span className="font-bold"> CodeSignal</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
