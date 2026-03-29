import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Auditorium Trade Centre - Event Venue Booking',
  description:
    'The largest trade centre in South India. Host your events, conferences, exhibitions, and celebrations at our state-of-the-art venue.',
  keywords:
    'event venue, conference hall, trade centre, auditorium, event booking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
