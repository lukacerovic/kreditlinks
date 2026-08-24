import { MdOutlineMail, MdCall } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { FiFileText } from 'react-icons/fi';

const Footer = () => (
  <footer className="mt-24 border-t border-line md:mt-32">
    <div className="mx-auto w-full max-w-6xl px-5 py-12">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src="/images/klGoldLogo.png" alt="Kredit Links" className="h-9 w-auto" />
            <span className="text-sm font-semibold tracking-wide text-tx-1">KreditLinks</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-tx-2">
            Agencija za posredovanje u kreditnom zaduživanju — besplatne konsultacije i podrška od
            donošenja odluke do realizacije kredita.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest text-tx-3">Kontakt</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a href="tel:+381642502283" className="flex items-center gap-2 text-tx-2 transition hover:text-accent">
              <MdCall className="shrink-0 text-accent" /> +381 64 250 2283
            </a>
            <a href="mailto:cerovicljiljana@gmail.com" className="flex items-center gap-2 text-tx-2 transition hover:text-accent">
              <MdOutlineMail className="shrink-0 text-accent" /> cerovicljiljana@gmail.com
            </a>
            <a href="mailto:kreditlinks@office.com" className="flex items-center gap-2 text-tx-2 transition hover:text-accent">
              <MdOutlineMail className="shrink-0 text-accent" /> kreditlinks@office.com
            </a>
            <p className="flex items-center gap-2 text-tx-2">
              <FaLocationDot className="shrink-0 text-accent" /> Bulevar Heroja sa Košara 8, Beograd
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest text-tx-3">Dokumenti i podaci</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a
              href="/opsti-uslovi-politika-privatnosti.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tx-2 transition hover:text-accent"
            >
              <FiFileText className="shrink-0 text-accent" /> Opšti uslovi i politika privatnosti
            </a>
            <a
              href="/anketniList.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tx-2 transition hover:text-accent"
            >
              <FiFileText className="shrink-0 text-accent" /> Anketni list
            </a>
            <p className="text-tx-2">Matični broj: 67889134</p>
            <p className="text-tx-2">PIB: 114834045</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-line pt-6 text-xs text-tx-3">
        © {new Date().getFullYear()} Agencija Kredit Links. Sva prava zadržana.
      </div>
    </div>
  </footer>
);

export default Footer;
