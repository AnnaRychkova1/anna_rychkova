'use client';
import { motion, Variants } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Lottie from 'lottie-react';
import animationData from '@/data/cat.json';
import { backgroundIcons } from '@/data/techStack';
import { useGeneratedIcons } from '@/hooks/useGeneratedIcons';
import ContactLinks from './ContactLinks';
import { heroText } from '@/data/text';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Hero() {
  const icons = useGeneratedIcons(backgroundIcons);

  return (
    <section
      id="hero"
      className="relative overflow-hidden mx-auto h-screen shadow-md shadow-fuchsia-900/5 scroll-mt-22"
    >
      <div className="absolute top-24 right-0 p-6 pr-10 z-20">
        <ContactLinks />
      </div>

      <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
        {icons.map(({ icon, top, left, size }, i) => (
          <div
            key={i}
            className="absolute transition-all duration-300"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              fontSize: size,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {icon}
          </div>
        ))}
      </div>
      <div className="container z-10 flex flex-col justify-between items-center gap-6 h-[94vh] sm:h-[98vh]">
        <div className="relative pt-[calc(12vh+5rem)] sm:pt-[calc(16vh+5rem)] max-w-[90rem] w-[92%] flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Hi, I&rsquo;m
            <span className="text-[var(--dark-accent)]"> Anna Rychkova</span>
          </h1>

          <motion.div
            className="max-w-[75rem] flex flex-col justify-between items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p className="text-xl md:text-2xl text-center leading-relaxed flex flex-wrap justify-center">
              {heroText.map(({ word, highlight }, i) => (
                <motion.span
                  key={i}
                  className={`mr-1 inline-block ${
                    highlight ? 'text-[var(--dark-accent)] font-semibold' : ''
                  }`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <div className="text-2xl md:text-3xl mt-4 flex items-center">
              <h2 className="text-[var(--dark-accent)] font-bold tracking-wide flex items-center">
                Build{' '}
                <div className="w-1 h-1 bg-[var(--dark-accent)] rounded-full z-10 shadow-md shadow-fuchsia-900/5 m-2"></div>{' '}
                Solve{' '}
                <div className="w-1 h-1 bg-[var(--dark-accent)] rounded-full z-10 shadow-md shadow-fuchsia-900/5 m-2"></div>{' '}
                Improve
              </h2>
            </div>
          </motion.div>
        </div>

        <div className="flex items-end justify-between gap-6 lg:justify-between lg:gap-22 w-full">
          <motion.div
            className="lottie max-w-[264px]"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: 'spring',
              stiffness: 120,
            }}
          >
            <Lottie animationData={animationData} loop={true} />
          </motion.div>
          <motion.a
            href="/Anna_Rychkova_Software_Engineer .pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--light-accent)] text-[var(--dark-accent)] font-semibold rounded-2xl shadow-md hover:bg-[var(--dark-accent)] hover:text-[var(--light-accent)] transition-all duration-300 w-max text-center"
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
            <FiDownload size={22} className="min-w-[22px] min-h-[22px]" />
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}
