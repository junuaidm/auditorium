'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          The Largest Trade Centre in South India
        </h1>
        <p className='text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto'>
          Unrivaled event spaces designed for business events, celebrations, and
          unforgettable experiences
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition'>
            Book Your Event
          </button>
          <Link
            href='/events'
            className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition'
          >
            View Events Calendar
          </Link>
        </div>
      </div>

      {/* Decorative background */}
      <div className='absolute inset-0 opacity-10 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4'></div>
      </div>
    </section>
  );
}
