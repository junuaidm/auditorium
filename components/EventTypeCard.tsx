'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface EventTypeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export default function EventTypeCard({
  title,
  description,
  icon,
  color,
}: EventTypeCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden border-l-4 ${color}`}
    >
      <div className='p-6'>
        <div className={`text-5xl mb-4 ${color.replace('border', 'text')}`}>
          {icon}
        </div>
        <h3 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4'>{description}</p>
        <Link
          href='#'
          className='inline-block text-amber-600 font-semibold hover:text-amber-700 transition'
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
