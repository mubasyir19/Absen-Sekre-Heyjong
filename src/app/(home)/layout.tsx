import type { Metadata } from 'next';
import '../globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sekretariat Heyjong',
  description: 'Form Kunjungan Sekretariat Heyjong',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} relative mx-auto max-w-md`}>{children}</body>
    </html>
  );
}
