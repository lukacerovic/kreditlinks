'use client';

import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import MainConcepts from './components/MainConcepts';
import Team from './components/Team';
import Partners from './components/Partners';
import Contact from './components/Contact';

export default function Home() {
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="flex flex-col pb-16">
      <Header servicesRef={servicesRef} teamRef={teamRef} contactRef={contactRef} />
      <Hero contactRef={contactRef} servicesRef={servicesRef} />
      <MainConcepts />
      <div ref={servicesRef}>
        <Services />
      </div>
      <Team ref={teamRef} />
      <Partners />
      <Contact ref={contactRef} />
    </main>
  );
}
