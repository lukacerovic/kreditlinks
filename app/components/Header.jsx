'use client';

import { useEffect, useRef, useState } from 'react';
import { MdOutlineMail, MdCall } from 'react-icons/md';
import { PiCertificateDuotone } from 'react-icons/pi';
import { FaLocationDot } from 'react-icons/fa6';
import { FiSun, FiMoon, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';

const Header = ({ servicesRef, teamRef, contactRef }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const dropdownRef = useRef(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('kl-theme', next);
    } catch (e) {}
  };

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <header className="site-header sticky top-0 z-40 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <div className="flex items-center gap-2">
          <img src="/images/klGoldLogo.png" alt="Kredit Links" className="h-9 w-auto" />
          <span className="hidden text-sm font-semibold tracking-wide text-tx-1 sm:inline">
            KreditLinks
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollTo(servicesRef)}
            className="text-sm text-tx-2 transition hover:text-accent"
          >
            Usluge
          </button>
          <button
            onClick={() => scrollTo(teamRef)}
            className="text-sm text-tx-2 transition hover:text-accent"
          >
            Tim
          </button>
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setShowDropdown((p) => !p)}
              aria-expanded={showDropdown}
              className="text-sm text-tx-2 transition hover:text-accent"
            >
              Kontakt
            </button>
            {showDropdown && (
              <div
                className="dropdown absolute right-0 top-full mt-3 w-[300px] rounded-2xl border border-line bg-surface p-4 text-sm text-tx-2 shadow-card"
              >
                <p className="mb-2 flex items-center gap-2"><MdOutlineMail className="text-accent" /> cerovicljiljana@gmail.com</p>
                <p className="mb-2 flex items-center gap-2"><MdOutlineMail className="text-accent" /> kreditlinks@office.com</p>
                <p className="mb-2 flex items-center gap-2"><MdCall className="text-accent" /> +381 642502283</p>
                <p className="mb-2 flex items-center gap-2"><PiCertificateDuotone className="text-accent" /> Matični broj: 67889134</p>
                <p className="mb-2 flex items-center gap-2"><PiCertificateDuotone className="text-accent" /> PIB: 114834045</p>
                <p className="flex items-center gap-2"><FaLocationDot className="text-accent" /> Bulevar Heroja sa Košara 8, Beograd</p>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Uključi svetlu temu' : 'Uključi tamnu temu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-tx-2 transition hover:border-line-strong hover:text-accent"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => scrollTo(contactRef)} className="btn-gold hidden sm:inline-flex !py-2 !px-4 text-sm">
            Kontaktirajte nas
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-tx-1 md:hidden"
            onClick={() => setMobileOpen((p) => !p)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Zatvori meni' : 'Otvori meni'}
          >
            {mobileOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="dropdown border-t border-line bg-surface px-5 pb-7 pt-2 md:hidden">
          <nav aria-label="Glavna navigacija" className="divide-y divide-line">
            <button
              className="flex min-h-[48px] w-full items-center justify-between py-3 text-left text-base font-medium text-tx-1"
              onClick={() => scrollTo(servicesRef)}
            >
              Usluge <FiChevronRight className="text-tx-3" />
            </button>
            <button
              className="flex min-h-[48px] w-full items-center justify-between py-3 text-left text-base font-medium text-tx-1"
              onClick={() => scrollTo(teamRef)}
            >
              Tim <FiChevronRight className="text-tx-3" />
            </button>
            <button
              className="flex min-h-[48px] w-full items-center justify-between py-3 text-left text-base font-medium text-tx-1"
              onClick={() => scrollTo(contactRef)}
            >
              Kontakt <FiChevronRight className="text-tx-3" />
            </button>
          </nav>

          <button onClick={() => scrollTo(contactRef)} className="btn-gold mt-4 w-full sm:hidden">
            Kontaktirajte nas
          </button>

          <p className="mt-6 text-[11px] uppercase tracking-widest text-tx-3">Kontakt informacije</p>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="tel:+381642502283"
              className="flex min-h-[48px] items-center gap-3 rounded-xl border border-line bg-surface-3 px-4 py-3 text-sm text-tx-1"
            >
              <MdCall className="shrink-0 text-lg text-accent" /> +381 64 250 2283
            </a>
            <a
              href="mailto:cerovicljiljana@gmail.com"
              className="flex min-h-[48px] items-center gap-3 rounded-xl border border-line bg-surface-3 px-4 py-3 text-sm text-tx-1"
            >
              <MdOutlineMail className="shrink-0 text-lg text-accent" /> cerovicljiljana@gmail.com
            </a>
            <a
              href="mailto:kreditlinks@office.com"
              className="flex min-h-[48px] items-center gap-3 rounded-xl border border-line bg-surface-3 px-4 py-3 text-sm text-tx-1"
            >
              <MdOutlineMail className="shrink-0 text-lg text-accent" /> kreditlinks@office.com
            </a>
            <div className="flex min-h-[48px] items-center gap-3 rounded-xl border border-line bg-surface-3 px-4 py-3 text-sm text-tx-2">
              <FaLocationDot className="shrink-0 text-lg text-accent" /> Bulevar Heroja sa Košara 8, Beograd
            </div>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-widest text-tx-3">Podaci o agenciji</p>
          <div className="mt-3 rounded-xl border border-line bg-surface-3 px-4 py-3">
            <p className="flex min-h-[32px] items-center gap-3 text-sm text-tx-2">
              <PiCertificateDuotone className="shrink-0 text-lg text-accent" /> Matični broj: 67889134
            </p>
            <p className="flex min-h-[32px] items-center gap-3 text-sm text-tx-2">
              <PiCertificateDuotone className="shrink-0 text-lg text-accent" /> PIB: 114834045
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
