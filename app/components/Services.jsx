'use client';

import { forwardRef } from 'react';
import { FiHome, FiCreditCard, FiSearch, FiFileText, FiPercent } from 'react-icons/fi';

const primary = [
  {
    icon: <FiHome />,
    title: 'Stambeni Krediti',
    body:
      'Namenjeni za kupovinu ili renoviranje nekretnine, uz mogućnosti varijabilnih ili fiksnih kamatnih stopa, kao i različite rokove otplate.',
  },
  {
    icon: <FiCreditCard />,
    title: 'Keš Krediti',
    body:
      'Keš krediti omogućavaju brz pristup gotovini za različite lične potrebe, bez obaveze navođenja svrhe korišćenja sredstava. Dostupni su u dinarima i eurima, sa fiksnim kamatnim stopama koje omogućavaju stabilne mesečne rate tokom celog perioda otplate.',
  },
];

const procedural = [
  {
    icon: <FiSearch />,
    title: 'Brze kreditne procene',
    body:
      'Procena kreditne sposobnosti klijenta na osnovu osnovnih informacija omogućava brz uvid u maksimalni iznos kredita koji klijent može dobiti.',
  },
  {
    icon: <FiFileText />,
    title: 'Priprema i organizacija dokumentacije',
    body:
      'Asistencija u prikupljanju i popunjavanju potrebne dokumentacije, što značajno ubrzava proces dobijanja kredita i štedi klijentovo vreme.',
  },
  {
    icon: <FiPercent />,
    title: 'Konsultacije u domenu poreskih olakšica',
    body:
      'Pružamo stručne konsultacije kako biste iskoristili sve mogućnosti za povrat poreza i poreske olakšice. Naš tim vam pomaže da razumete aktuelne propise i primenite rešenja prilagođena vašim potrebama, čime optimizujete svoje poreske obaveze.',
  },
];

const ServiceCard = ({ icon, title, body }) => (
  <div className="kl-card p-7 sm:p-8">
    <div className="kl-icon-square mb-5">{icon}</div>
    <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>
  </div>
);

const Services = forwardRef((_, ref) => (
  <section ref={ref} className="mx-3 mt-24 sm:mx-5 md:mt-32">
    <div className="mx-auto max-w-3xl text-center">
      <span className="section-pill mb-5">Usluge</span>
      <h2 className="headline">
        Stambeni i <span className="gold-text">keš</span> krediti.
      </h2>
      <p className="subhead mx-auto mt-5 max-w-2xl">
        U Kredit Links-u nudimo posredovanje za sve ključne tipove kreditnog zaduživanja, pomažući vam da odaberete
        kreditne uslove koji odgovaraju vašoj situaciji i dugoročnim ciljevima.
      </p>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {primary.map((s) => (
        <ServiceCard key={s.title} {...s} />
      ))}
    </div>

    <div className="mt-5 grid gap-5 md:grid-cols-3">
      {procedural.map((s) => (
        <ServiceCard key={s.title} {...s} />
      ))}
    </div>
  </section>
));

Services.displayName = 'Services';

export default Services;
