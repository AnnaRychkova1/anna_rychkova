import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectsList from '@/components/ProjectsList';

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
            <ProjectsList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
