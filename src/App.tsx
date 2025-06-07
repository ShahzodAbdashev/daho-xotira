import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Instructor from './components/Instructor';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Daho Xotira - Miyangizning Chinakam Kuchini Kashf Eting";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Testimonials />
        <Instructor />
        <Pricing />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;