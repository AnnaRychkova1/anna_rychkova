'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { FiDownload } from 'react-icons/fi';

import animationData from '@/data/cat.json';
import { backgroundIcons } from '@/data/techStack';
import { useGeneratedIcons } from '@/hooks/useGeneratedIcons';

export default function Hero() {
  const icons = useGeneratedIcons(backgroundIcons);

  return (
    <section
      id="hero"
      className="relative overflow-hidden mx-auto h-screen shadow-md shadow-fuchsia-900/5 scroll-mt-22"
    >
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
        <div className="pt-[calc(12vh+5.5rem)] sm:pt-[calc(16vh+5.5rem)] max-w-[90rem] w-[92%] flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Hi, I&rsquo;m
            <span className="text-[var(--dark-accent)]"> Anna Rychkova</span>
          </h1>
          <motion.div
            className="max-w-[75rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.p className="text-xl md:text-2xl text-center leading-relaxed">
              {'A Result-Oriented Software Developer building and delivering software solutions that empower users, optimize business workflows, and transform ideas into real-world impact.'
                .split(' ')
                .map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-1"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    {word + ' '}
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>
          <div className="text-xl md:text-2xl mt-4">
            <p className="text-[var(--dark-accent)] italic font-bold">
              &#35;NeverStopLearning
            </p>
          </div>
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
            href="/Anna_Rychkova_Software_Developer.pdf"
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
