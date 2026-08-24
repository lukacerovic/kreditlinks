'use client';

import { forwardRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FiSend, FiFileText, FiArrowRight } from 'react-icons/fi';
import ErrorModal from './ErrorModal';
import Loader from './Loader';

const Contact = forwardRef((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    privacy: false,
    lastName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    state: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePrivacyChange = (e) => {
    setFormData({ ...formData, privacy: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.username || !formData.lastName || !formData.email || !formData.phone || !formData.state) {
      setErrorMessage('Molimo Vas da popunite sva polja.');
      setIsErrorModalOpen(true);
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^(?:\+\d{1,3}\d{9}|0\d{9})$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage('Telefon nije u validnom formatu');
      setIsErrorModalOpen(true);
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Unesite validan email.');
      setIsErrorModalOpen(true);
      setIsLoading(false);
      return;
    }

    if (!formData.privacy) {
      setErrorMessage('Molimo Vas da pročitate i prihvatite politiku privatnosti.');
      setIsErrorModalOpen(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({
          username: '',
          lastName: '',
          email: '',
          dateOfBirth: '',
          phone: '',
          state: '',
          privacy: false,
        });
      } else {
        const result = await response.json().catch(() => ({}));
        setErrorMessage(result.message || 'Došlo je do greške prilikom slanja forme.');
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      setErrorMessage('Došlo je do greške prilikom slanja forme.');
      setIsErrorModalOpen(true);
    }

    setIsLoading(false);
  };

  const closeModal = () => setIsModalOpen(false);
  const closeErrorModal = () => setIsErrorModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const Modal = () => {
    if (!mounted) return null;
    const target = document.getElementById('modal');
    if (!target) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <div className="mx-4 w-full max-w-md rounded-2xl border border-line bg-surface p-7 shadow-2xl">
          <h2 className="mb-3 text-xl font-semibold text-tx-1">Vaša forma je uspešno poslata!</h2>
          <p className="text-sm leading-relaxed text-tx-2">
            Hvala Vam na ostavljenim informacijama. Očekujte naš odgovor u najskorijem roku.
            <br /><br />
            Srdačan pozdrav, Vaš <span className="font-semibold text-accent">Kredit Links</span>.
          </p>
          <button onClick={closeModal} className="btn-gold mt-6 w-full">Zatvori</button>
        </div>
      </div>,
      target
    );
  };

  return (
    <section ref={ref} className="mx-auto mt-24 w-full max-w-6xl px-3 sm:px-5 md:mt-32">
      <div className="kl-card relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-70" />
        <div className="relative grid gap-10 p-6 sm:p-10 md:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div className="flex flex-col justify-center">
            <span className="section-pill mb-5 w-fit">Kontakt</span>
            <h2 className="headline">
              Kontaktirajte <span className="gold-text">nas</span>.
            </h2>
            <p className="subhead mt-5 max-w-md">
              Popunite formu i očekujte odgovor sa naše strane u najskorijem roku.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="/opsti-uslovi-politika-privatnosti.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-line bg-surface-3 px-5 py-4 text-base text-tx-1 transition hover:border-[color:var(--accent-border)]"
              >
                <span className="flex items-center gap-3">
                  <FiFileText className="text-accent" /> Opšti Uslovi Poslovanja
                </span>
                <FiArrowRight className="opacity-60 transition group-hover:translate-x-1" />
              </a>
              <a
                href="/anketniList.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-line bg-surface-3 px-5 py-4 text-base text-tx-1 transition hover:border-[color:var(--accent-border)]"
              >
                <span className="flex items-center gap-3">
                  <FiFileText className="text-accent" /> Anketni List
                </span>
                <FiArrowRight className="opacity-60 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface-2 p-6 sm:p-7 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="field">
                <label>Ime</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Pera"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Prezime</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Perić"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label>Datum rođenja</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Opština</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Novi Beograd"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field sm:col-span-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="ime@primer.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field sm:col-span-2">
                <label>Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+381 64 250 2283"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label className="mt-5 flex items-center gap-3 text-xs text-tx-2">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handlePrivacyChange}
                className="h-5 w-5 accent-[var(--accent)]"
              />
              <span>
                Prihvatam{' '}
                <a
                  href="/opsti-uslovi-politika-privatnosti.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  politiku privatnosti
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="btn-gold mt-6 w-full"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : (<><FiSend /> Pošalji formu</>)}
            </button>
          </form>
        </div>
      </div>

      {isModalOpen && <Modal />}
      {isErrorModalOpen && <ErrorModal message={errorMessage} onClose={closeErrorModal} />}
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
