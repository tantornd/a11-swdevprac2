'use client';

import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a]">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="relative text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Venue Booking
        </h1>
        
        <BookingForm />
      </div>
    </div>
  );
}