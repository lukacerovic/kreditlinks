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
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="modal" />
        <div id="errorModal" />
      </body>
    </html>
  );
}
