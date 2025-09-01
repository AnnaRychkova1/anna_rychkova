import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* 
        <About />
        <Services />
        <Testimonials />
        <Contacts /> */}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
