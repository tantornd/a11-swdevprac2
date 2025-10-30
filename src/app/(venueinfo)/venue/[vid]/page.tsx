import Image from 'next/image';
import getVenue from '@/libs/getVenue';

interface PageProps {
  params: Promise<{
    vid: string;
  }>;
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  // Return empty array or mock IDs for build time
  // In production, you might want to fetch all venue IDs
  return [
    { vid: '67d044e0c0062950a985c509' },
    { vid: '67d04663c0062950a985c50c' },
    { vid: '67d047cec0062950a985c50f' }
  ];
}

export default async function VenueDetailPage({ params }: PageProps) {
  const { vid } = await params;
  
  try {
    // Fetch venue data from Backend API
    const venueJson = await getVenue(vid);
    const venue = venueJson.data;

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a]">
        <div className="max-w-4xl w-full mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src={venue.picture}
                alt={venue.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                {venue.name}
              </h1>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                <p><strong>Address:</strong> {venue.address}</p>
                <p><strong>District:</strong> {venue.district}</p>
                <p><strong>Province:</strong> {venue.province}</p>
                <p><strong>Postal Code:</strong> {venue.postalcode}</p>
                <p><strong>Tel:</strong> {venue.tel}</p>
                <p><strong>Daily Rate:</strong> ฿{venue.dailyrate.toLocaleString()}</p>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Tel: {venue.tel}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">
                    Pricing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ฿{venue.dailyrate.toLocaleString()} per day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-600">Venue not found</h1>
      </div>
    );
  }
}