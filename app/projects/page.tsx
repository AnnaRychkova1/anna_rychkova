'use client';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';
import projects from '../../data/projects.json';
import { Project } from '@/types/types';

export default function Projects() {
  const [shuffledProjects, setShuffledProjects] = useState<Project[]>([]);

  useEffect(() => {
    const shuffleArray = (array: Project[]) => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    setShuffledProjects(shuffleArray(projects as Project[]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);
  return (
    <>
      <Header />
      <main className="pt-28">
        <section>
          <div className="container flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              My Projects
            </h2>
            <ProjectsList projects={shuffledProjects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
