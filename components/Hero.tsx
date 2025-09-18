'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { JSX, useEffect, useState } from 'react';

import animationData from '@/data/cat.json';
import { backgroundIcons } from '@/data/techStack';
import { FiDownload } from 'react-icons/fi';

type IconData = {
  icon: JSX.Element;
  top: number;
  left: number;
  size: string;
};

export default function Hero() {
  const [icons, setIcons] = useState<IconData[]>([]);

  useEffect(() => {
    const minDistance = 8;
    const maxAttempts = 50;
    const generated: IconData[] = [];

    backgroundIcons.forEach(({ icon }) => {
      let top = 0;
      let left = 0;
      let attempts = 0;
      let valid = false;

      while (!valid && attempts < maxAttempts) {
        top = Math.random() * 100;
        left = Math.random() * 100;

        valid = generated.every(({ top: t, left: l }) => {
          const dx = t - top;
          const dy = l - left;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance >= minDistance;
        });

        attempts++;
      }

      // const size = `${Math.random() * (4 - 2) + 2}vw`;
      // const size = `clamp(20px, ${Math.random() * (4 - 2) + 2}vw, 50px)`;
      const size = `clamp(40px, ${Math.random() * (8 - 4) + 4}vw, 100px)`;

      generated.push({ icon, top, left, size });
    });

    setIcons(generated);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden shadow-md shadow-fuchsia-900/5"
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
      <div className="container relative z-10 flex flex-col justify-between items-center gap-6 h-[94vh] sm:h-[98vh]">
        <div className="mt-[12vh] sm:mt-[16vh] max-w-[90rem] w-[92%] flex flex-col items-center gap-8">
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
