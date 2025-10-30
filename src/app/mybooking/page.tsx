'use client';

import BookingList from '@/components/BookingList';

export default function MyBookingPage() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a] overflow-x-hidden">
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12 w-full">
          My Bookings
        </h1>
        <BookingList />
      </div>
    </div>
  );
}
