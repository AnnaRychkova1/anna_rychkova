import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
