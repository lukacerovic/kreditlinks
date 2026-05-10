import { FiZap, FiTarget, FiShield } from 'react-icons/fi';

const concepts = [
  {
    icon: <FiZap />,
    title: 'Brzina i Efikasnost',
    body:
      'Vaše vreme je dragoceno, zato obezbeđujemo brzu i pouzdanu realizaciju kredita. Naš tim radi efikasno kako biste što pre dobili rešenje koje vam je potrebno.',
  },
  {
    icon: <FiTarget />,
    title: 'Vaše Potrebe',
    body:
      'Svakom klijentu pristupamo individualno i pažljivo biramo uslove koji odgovaraju specifičnim finansijskim potrebama i ciljevima. Naš tim pronalazi optimalne opcije za vaš konkretan slučaj.',
  },
  {
    icon: <FiShield />,
    title: 'Sigurnost',
    body:
      'Kredit Links je tu da osigura vaš pametan finansijski izbor, vodeći računa o tome da vaš kredit ne ugrozi vašu dugoročnu stabilnost. Pronalazimo rešenja koja su održiva i koja vam pružaju sigurnost u svakom koraku.',
  },
];

export default function MainConcepts() {
  return (
    <section className="mx-3 mt-6 sm:mx-5">
      <div className="grid gap-4 md:grid-cols-3">
        {concepts.map((c) => (
          <div key={c.title} className="kl-card p-6 sm:p-7">
            <div className="kl-icon-square mb-5">{c.icon}</div>
            <h3 className="text-xl font-semibold text-white">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
