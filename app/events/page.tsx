'use client';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Conference 2026',
      date: 'April 15, 2026',
      type: 'Conference',
      time: '9:00 AM - 5:00 PM',
    },
    {
      id: 2,
      title: 'Annual Trade Expo',
      date: 'May 10, 2026',
      type: 'Exhibition',
      time: '10:00 AM - 6:00 PM',
    },
    {
      id: 3,
      title: 'Summer Entertainment Gala',
      date: 'June 20, 2026',
      type: 'Entertainment',
      time: '6:00 PM - 11:00 PM',
    },
    {
      id: 4,
      title: 'Sports Championship Finals',
      date: 'July 5, 2026',
      type: 'Sports',
      time: '2:00 PM - 9:00 PM',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center'>
        Events Calendar
      </h1>
      <p className='text-center text-gray-600 mb-12'>
        View upcoming events and book your participation
      </p>

      <div className='grid gap-6 md:grid-cols-2'>
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition'
          >
            <div className='flex items-start justify-between mb-4'>
              <div>
                <h3 className='text-xl font-bold text-gray-900'>
                  {event.title}
                </h3>
                <p className='text-amber-600 font-semibold mt-1'>
                  {event.type}
                </p>
              </div>
            </div>
            <p className='text-gray-600 mb-2'>📅 {event.date}</p>
            <p className='text-gray-600 mb-4'>🕐 {event.time}</p>
            <button className='bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition'>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
