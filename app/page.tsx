import About from '@/components/About';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Education />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
