const partnersLogo = [
  <img key="l1" src="/images/klGoldLogo.png" alt="partner" className="h-10 w-auto opacity-80" />,
  <p key="t1" className="text-xl tracking-wide text-white/70">Kredit Links</p>,
  <img key="l2" src="/images/klGoldLogo.png" alt="partner" className="h-10 w-auto opacity-80" />,
  <p key="t2" className="text-xl tracking-wide text-white/70">Kredit Links</p>,
  <img key="l3" src="/images/klGoldLogo.png" alt="partner" className="h-10 w-auto opacity-80" />,
  <p key="t3" className="text-xl tracking-wide text-white/70">Kredit Links</p>,
];

export default function Partners() {
  return (
    <section className="mx-3 mt-20 overflow-hidden rounded-2xl border border-white/5 bg-ink-800/60 py-5 sm:mx-5">
      <div className="partners-track">
        {[...partnersLogo, ...partnersLogo].map((partner, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center justify-center px-[3vw]"
            style={{ minWidth: '20vw' }}
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
