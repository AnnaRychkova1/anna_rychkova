'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import projects from '../../data/projects.json';

export default function Projects() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <section>
          <div className="container flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              My Projects
            </h2>
            <ProjectsList projects={projects} />
            <motion.div
              className="text-center text-lg text-gray-600 flex flex-col gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>
                In the near future I will add more projects to my portfolio,
                such as:
              </p>
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="https://annarychkova1.github.io/EnergyFlowWeb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Energy Flow
                  </a>
                </li>
                <li>
                  <a
                    href="https://mistohub.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Misto Hub
                  </a>
                </li>

                <li>
                  <a
                    href="https://camperrent.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Camper Rent
                  </a>
                </li>
                <li>
                  <a
                    href="https://kaguasbest.github.io/DreamYachts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    DreamYachts
                  </a>
                </li>
                <li>
                  <a
                    href="https://blended-currency.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Currency
                  </a>
                </li>
                <li>
                  <a
                    href="https://blended-country.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Countries
                  </a>
                </li>

                <li>
                  <a
                    href="https://movies-redux-coral.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Movies
                  </a>
                </li>
                <li>
                  <a
                    href="https://phonebook-auth.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    PhoneBook
                  </a>
                </li>
                <li>
                  <a
                    href="https://annarychkova1.github.io/web-studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    WebStudio
                  </a>
                </li>
                <li>
                  <a
                    href="https://annarychkova1.github.io/Simply-Shockolate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Simply Shockolate
                  </a>
                </li>
                <li>
                  <a
                    href="https://annarychkova1.github.io/Food-Delivery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--dark-accent)] hover:underline"
                  >
                    Food Delivery
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
