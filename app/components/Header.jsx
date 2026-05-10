'use client';

import { useEffect, useRef, useState } from 'react';
import { MdOutlineMail, MdCall } from 'react-icons/md';
import { PiCertificateDuotone } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';

const Header = ({ servicesRef, teamRef, contactRef }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <div className="flex items-center gap-2">
          <img src="/images/klGoldLogo.png" alt="Kredit Links" className="h-9 w-auto" />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
            KreditLinks
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollTo(servicesRef)}
            className="text-sm text-white/80 transition hover:text-gold-400"
          >
            Usluge
          </button>
          <button
            onClick={() => scrollTo(teamRef)}
            className="text-sm text-white/80 transition hover:text-gold-400"
          >
            Tim
          </button>
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setShowDropdown((p) => !p)}
              className="text-sm text-white/80 transition hover:text-gold-400"
            >
              Kontakt
            </button>
            {showDropdown && (
              <div
                className="dropdown absolute right-0 top-full mt-3 w-[300px] rounded-2xl border border-white/10 bg-ink-800/95 p-4 text-sm text-white/90 shadow-card backdrop-blur"
              >
                <p className="mb-2 flex items-center gap-2"><MdOutlineMail className="text-gold-400" /> cerovicljiljana@gmail.com</p>
                <p className="mb-2 flex items-center gap-2"><MdOutlineMail className="text-gold-400" /> kreditlinks@office.com</p>
                <p className="mb-2 flex items-center gap-2"><MdCall className="text-gold-400" /> +381 642502283</p>
                <p className="mb-2 flex items-center gap-2"><PiCertificateDuotone className="text-gold-400" /> Matični broj: 67889134</p>
                <p className="mb-2 flex items-center gap-2"><PiCertificateDuotone className="text-gold-400" /> PIB: 114834045</p>
                <p className="flex items-center gap-2"><FaLocationDot className="text-gold-400" /> Bulevar Heroja sa Košara 8, Beograd</p>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo(contactRef)} className="btn-gold hidden sm:inline-flex !py-2 !px-4 text-sm">
            Kontaktirajte nas
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Otvori meni"
          >
            <span className="text-lg">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-ink-900/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-white/90">
            <button className="text-left" onClick={() => scrollTo(servicesRef)}>Usluge</button>
            <button className="text-left" onClick={() => scrollTo(teamRef)}>Tim</button>
            <button className="text-left" onClick={() => scrollTo(contactRef)}>Kontakt</button>
            <div className="mt-2 rounded-xl border border-white/10 bg-ink-800/60 p-3 text-xs text-white/80">
              <p className="mb-1 flex items-center gap-2"><MdOutlineMail className="text-gold-400" /> cerovicljiljana@gmail.com</p>
              <p className="mb-1 flex items-center gap-2"><MdCall className="text-gold-400" /> +381 642502283</p>
              <p className="flex items-center gap-2"><FaLocationDot className="text-gold-400" /> Bulevar Heroja sa Košara 8, Beograd</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
