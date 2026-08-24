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
      <div className="mx-4 w-full max-w-md rounded-2xl border border-red-400/30 bg-surface p-7 shadow-2xl">
        <h2 className="mb-3 text-xl font-semibold text-tx-1">Greška prilikom slanja forme</h2>
        <p className="text-sm leading-relaxed text-tx-2">
          {message}
          <br /><br />
          Hvala na razumevanju, Vaš <span className="font-semibold text-accent">Kredit Links</span>.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full border border-line bg-surface-3 px-5 py-3 font-semibold text-tx-1 transition hover:border-line-strong"
        >
          Zatvori
        </button>
      </div>
    </div>,
    target
  );
};

export default ErrorModal;
