'use client';

import { forwardRef } from 'react';

const Team = forwardRef((_, ref) => (
  <section ref={ref} className="mx-3 mt-24 sm:mx-5 md:mt-32">
    <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
      <div className="kl-card relative overflow-hidden p-3">
        <div className="relative w-full overflow-hidden rounded-2xl">
          <img
            src="/images/ljiljana.jpeg"
            alt="Ljiljana Cerović"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[11px] uppercase tracking-widest text-gold-400">Osnivač i direktor</p>
            <p className="mt-1 text-xl font-semibold text-white">Ljiljana Cerović</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <span className="section-pill mb-5 w-fit">Naš Tim</span>
        <h2 className="headline">
          Naš <span className="gold-text">Tim</span>.
        </h2>
        <div className="mt-6 space-y-5 text-white/70">
          <p className="text-base leading-relaxed">
            Agencija <span className="font-semibold text-white">Kredit Links</span>, koju predvodi{' '}
            <span className="font-semibold text-white">Ljiljana Cerović</span>, prepoznatljiva je po stručnosti,
            usredsređenosti na potrebe klijenata i širokoj bazi kontakata iz bankarsko-finansijske oblasti.
          </p>
          <p className="text-base leading-relaxed">
            Dobro utemeljen koncept Agencije i sve navedene vrednosti klijentima obezbeđuju sigurnog partnera na koga se
            mogu osloniti od momenta donošenja odluke o kreditnom zaduživanju do realizacije plasmana kod izabrane
            poslovne banke.
          </p>
          <p className="text-base leading-relaxed">
            Pored posredovanja na relaciji klijent-banka, Agencija Kredit Links svojim klijentima nudi i besplatne
            usluge posredovanja u komunikaciji sa investitorima, proceniteljima i poreskim organima, kako u procesu
            apliciranja za stambeni kredit, tako i neposredno nakon njegove realizacije.
          </p>
        </div>
      </div>
    </div>
  </section>
));

Team.displayName = 'Team';

export default Team;
