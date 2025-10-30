import Banner from '@/components/Banner';
import PromoteCard from '@/components/PromoteCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      
      {/* PromoteCard section */}
      <PromoteCard />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a]">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Welcome to Venue Explorer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find the perfect venue for your next event. Browse our collection of exceptional 
            spaces, each uniquely designed to create unforgettable experiences.
          </p>
        </section>
      </main>
    </div>
  );
}