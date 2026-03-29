'use client';

export default function Gallery() {
  const images = [
    { id: 1, title: 'Conference Hall' },
    { id: 2, title: 'Grand Ballroom' },
    { id: 3, title: 'Exhibition Area' },
    { id: 4, title: 'Dining Hall' },
    { id: 5, title: 'Outdoor Venue' },
    { id: 6, title: 'Green Room' },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center'>
        Gallery
      </h1>
      <p className='text-center text-gray-600 mb-12'>
        Explore our state-of-the-art facilities
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {images.map((image) => (
          <div
            key={image.id}
            className='bg-gray-200 rounded-lg h-64 flex items-center justify-center hover:shadow-lg transition duration-300'
          >
            <div className='text-center'>
              <p className='text-gray-600 font-semibold'>{image.title}</p>
              <p className='text-gray-500 text-sm mt-2'>[Image placeholder]</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
