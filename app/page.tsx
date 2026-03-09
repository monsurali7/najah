'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Offerings from './components/Offerings';
import PlannerCTA from './components/PlannerCTA';
import Process from './components/Process';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 90);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Offerings />
      <PlannerCTA />
      <Process />
      <JoinSection />
      <Footer />
    </>
  );
}
