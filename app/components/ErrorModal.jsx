'use client';

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ErrorModal = ({ message, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;
  const target = document.getElementById('errorModal');
  if (!target) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl border border-red-400/20 bg-ink-800 p-7 shadow-2xl">
        <h2 className="mb-3 text-xl font-semibold text-white">Greška prilikom slanja forme</h2>
        <p className="text-sm leading-relaxed text-white/70">
          {message}
          <br /><br />
          Hvala na razumevanju, Vaš <span className="font-semibold text-gold-400">Kredit Links</span>.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Zatvori
        </button>
      </div>
    </div>,
    target
  );
};

export default ErrorModal;
