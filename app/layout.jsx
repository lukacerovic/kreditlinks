import './globals.css';

export const metadata = {
  title: 'Kredit Links - Agencija za posredovanje u kreditnom zaduživanju',
  description:
    'Agencija Kredit Links, predvođena Ljiljanom Cerović, pruža profesionalne usluge u vezi sa kreditnim zaduživanjem i posredovanjem u komunikaciji sa bankama, investitorima i poreskim organima.',
  keywords:
    'Kredit Links, agencija, kreditno zaduživanje, posredovanje, komunikacija sa bankama, investitori, procenitelji, poreski organi',
  icons: {
    icon: '/kreditLinks.jpg',
  },
  openGraph: {
    title: 'Agencija Kredit Links - Profesionalno posredovanje u kreditnom zaduživanju',
    description:
      'Agencija Kredit Links nudi besplatno posredovanje u kreditnim uslovima i komunikaciji sa bankama, investitorima i poreskim organima. Siguran partner za vaše finansijske potrebe.',
    url: 'https://www.kreditlinks.com/',
  },
  twitter: {
    title: 'Agencija Kredit Links - Profesionalno posredovanje u kreditnom zaduživanju',
    description:
      'Kredit Links nudi usluge posredovanja u kreditima, komunikaciji sa bankama i investitorima, kao i besplatnu pomoć u vezi sa stambenim kreditima.',
    card: 'summary_large_image',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#070707' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const themeInitScript = `
(function () {
  try {
    var t = localStorage.getItem('kl-theme');
    if (t !== 'light' && t !== 'dark') {
      t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="sr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <div id="modal" />
        <div id="errorModal" />
      </body>
    </html>
  );
}
