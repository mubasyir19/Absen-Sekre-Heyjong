import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import SidebarDash from '@/components/organism/SidebarDash';
import NavbarDash from '@/components/organism/NavbarDash';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard Kunjungan Sekretariat Heyjong',
  description: 'Kunjungan Sekretariat Heyjong',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} flex h-screen gap-x-4 bg-[#F4F5F0] p-2`}>
        <SidebarDash />
        <main className='flex flex-1 flex-col'>
          <NavbarDash />
          <section className='py-3'>{children}</section>
        </main>
      </body>
    </html>
  );
}
