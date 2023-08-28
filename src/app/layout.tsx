import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Bingewise',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
