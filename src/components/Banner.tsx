'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
  const router = useRouter();
  const { data: session } = useSession();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const bannerImages = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ];

  const handleBannerClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const handleSelectVenueClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push('/venue');
  };

  return (
    <div 
      className="relative h-[500px] w-full overflow-hidden cursor-pointer"
      onClick={handleBannerClick}
    >
      <div className="absolute inset-0 z-10">
        <Image
          src={bannerImages[currentImageIndex]}
          alt="Elegant venue space"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-20"></div>
      </div>
      
      {/* Welcome message for logged-in users */}
      {session?.user?.name && (
        <div className="absolute top-6 right-6 z-40 text-white text-lg font-medium">
          Welcome {session.user.name}
        </div>
      )}
      
      <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          where every event finds its venue
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md">
          Discover the perfect space for your special moments. From intimate gatherings 
          to grand celebrations, we offer exceptional venues tailored to make your event 
          unforgettable.
        </p>
      </div>
      <button
        onClick={handleSelectVenueClick}
        className="absolute bottom-6 right-6 z-40 bg-[#161616] hover:bg-[#262626] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
      >
        Select Venue
      </button>
    </div>
  );
}