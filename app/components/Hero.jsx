'use client';

import { FiArrowRight } from 'react-icons/fi';

const scrollTo = (ref) => {
  if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const CreditCards = () => (
  <div className="cc-stack">
    <div className="cc cc-1">
      <div className="flex items-start justify-between">
        <div className="cc-chip" />
        <span className="text-[10px] uppercase tracking-widest text-white/40">Kredit Links</span>
      </div>
      <div className="cc-strip" />
      <div className="flex items-center justify-between text-[11px] text-white/50">
        <span>**** **** **** 1208</span>
        <span className="text-gold-400">VISA</span>
      </div>
    </div>
    <div className="cc cc-2">
      <div className="flex items-start justify-between">
        <div className="cc-chip" style={{ background: 'linear-gradient(135deg,#fff2c2 0%,#b88636 100%)' }} />
        <span className="text-[10px] uppercase tracking-widest text-black/60">Gold Tier</span>
      </div>
      <div className="cc-strip" style={{ background: 'rgba(0,0,0,0.18)' }} />
      <div className="flex items-center justify-between text-[11px] text-black/70">
        <span className="font-semibold">LJILJANA CEROVIĆ</span>
        <span>12/29</span>
      </div>
    </div>
    <div className="cc-coin">€</div>
  </div>
);

const Hero = ({ contactRef, servicesRef }) => (
  <section className="hero-shell relative mx-3 mt-3 overflow-hidden rounded-[28px] bg-surface-2 sm:mx-5">
    <div className="absolute inset-0 bg-hero-radial" />
    <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-12 pb-16 sm:px-10 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:pt-20 md:pb-24 lg:px-16">
      <div className="flex flex-col justify-center">
        <span className="section-pill mb-6 w-fit">Besplatne konsultacije</span>
        <h1 className="headline">
          Najbolji <span className="gold-text">kreditni</span> uslovi i besplatne konsultacije za pametan izbor.
        </h1>
        <p className="subhead mt-6 max-w-xl">
          U Kredit Links-u verujemo da svaka finansijska odluka treba biti jasna, sigurna i prilagođena vašim potrebama.
          Kao stručni tim za posredovanje u kreditima, posvećeni smo tome da vam omogućimo najbolju ponudu koja odgovara
          vašoj situaciji i ciljevima. Uz pažljivu analizu i besplatne konsultacije, pomažemo vam da nađete povoljne
          kreditne uslove koji vam omogućavaju pametan i održiv finansijski izbor.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button onClick={() => scrollTo(contactRef)} className="btn-gold">
            Kontaktirajte nas <FiArrowRight />
          </button>
          <button onClick={() => scrollTo(servicesRef)} className="btn-outline">
            Pogledajte usluge
          </button>
        </div>
      </div>

      <div className="relative flex min-h-[340px] items-center justify-center md:min-h-[420px]">
        <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-gold-400/15 via-transparent to-transparent blur-2xl" />
        <CreditCards />
      </div>
    </div>
  </section>
);

export default Hero;
