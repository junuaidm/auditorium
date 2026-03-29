'use client';

import Hero from '@/components/Hero';
import EventTypeCard from '@/components/EventTypeCard';
import AmenityCard from '@/components/AmenityCard';
import {
  FiMic,
  FiTrendingUp,
  FiAward,
  FiMapPin,
  FiSliders,
  FiTarget,
} from 'react-icons/fi';

const eventTypes = [
  {
    title: 'Business Conferences',
    description:
      'A truly engaging space to inspire your entrepreneurial spirit and host professional gatherings.',
    icon: '🤝',
    color: 'border-blue-500',
  },
  {
    title: 'Entertainment Events',
    description:
      'Sweep your audience off their feet with our elegant entertainment space and world-class amenities.',
    icon: '🎭',
    color: 'border-purple-500',
  },
  {
    title: 'Sports Events',
    description:
      'Enjoy the thrills, movements & spirit of sporting events in all their glory.',
    icon: '⚽',
    color: 'border-green-500',
  },
  {
    title: 'Motor Shows',
    description:
      'Create an exhilarating experience for motor shows & attract your target audience.',
    icon: '🏎️',
    color: 'border-red-500',
  },
  {
    title: 'Trade Exhibitions',
    description:
      'Extensive commercial space designed to increase the footfall of your trade events.',
    icon: '🏪',
    color: 'border-yellow-500',
  },
  {
    title: 'Wedding Functions',
    description:
      'Elevate your wedding celebrations to the next level & make memories of a lifetime.',
    icon: '💒',
    color: 'border-pink-500',
  },
];

const amenities = [
  {
    title: 'Strategic Location',
    description:
      'Strategically placed at the heart of the city to endorse an event-friendly culture. Well connected by air, road, & rail.',
    icon: <FiMapPin />,
  },
  {
    title: 'State-of-the-art Amenities',
    description:
      'Extensive range of amenities to give you a unique experience that redefines your events.',
    icon: <FiAward />,
  },
  {
    title: 'Highly Customizable',
    description:
      'Create your event the way you envisioned it with complete customization of the venue.',
    icon: <FiSliders />,
  },
  {
    title: 'On-site Branding',
    description:
      'Boost the visibility of your brand & get it to thousands of potential customers every day.',
    icon: <FiTarget />,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Event Types Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Unrivaled Event Spaces Designed for Business Events
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Host any type of event with our versatile and well-equipped venue
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {eventTypes.map((event, index) => (
              <EventTypeCard
                key={index}
                title={event.title}
                description={event.description}
                icon={event.icon}
                color={event.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Why Choose Auditorium Trade Centre
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Experience excellence with our comprehensive facilities and
              services
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {amenities.map((amenity, index) => (
              <AmenityCard
                key={index}
                title={amenity.title}
                description={amenity.description}
                icon={amenity.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-amber-600 to-amber-800 text-white'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to Book Your Event?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-2xl mx-auto'>
            Get in touch with our team today to discuss your event requirements
          </p>
          <button className='bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition'>
            Get Started Now
          </button>
        </div>
      </section>

      {/* Floor Plan Preview */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center'>
            Our Venue Layout
          </h2>
          <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
            <div className='bg-gray-200 rounded-lg h-96 flex items-center justify-center'>
              <div className='text-center'>
                <p className='text-gray-600 text-xl mb-4'>
                  70,000+ Square Feet of Premium Event Space
                </p>
                <a
                  href='/floor-plan'
                  className='inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition'
                >
                  View Interactive Floor Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 md:py-20 bg-white'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Stay Updated
          </h2>
          <p className='text-gray-600 mb-8'>
            Subscribe to our newsletter for exclusive offers and event updates
          </p>
          <form className='flex flex-col sm:flex-row gap-3'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-600'
              required
            />
            <button
              type='submit'
              className='bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition'
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
