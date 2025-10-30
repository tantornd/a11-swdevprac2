'use client';

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from '@mui/material';

interface VenueCardProps {
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: (rating: number | null) => void;
}

export default function VenueCard({ venueName, imgSrc, rating, onRatingChange }: VenueCardProps) {
  const handleRatingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <InteractiveCard>
      <div className="rounded-xl overflow-hidden max-w-md w-full transform transition duration-300">
        <div className="relative w-full h-[250px] sm:h-[200px] overflow-hidden">
          <Image
            src={imgSrc}
            alt={venueName}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-5">
          <h3 className="text-2xl font-bold text--gray-600 dark:text-gray-400 leading-snug mb-3 sm:text-xl">
            {venueName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-[0.95rem] leading-relaxed mb-4">
            Experience luxury and elegance at our exceptional venue.
          </p>
          {/* Only show Rating if props are provided */}
          {rating !== undefined && onRatingChange && (
            <div className="mb-4" onClick={handleRatingClick}>
              <Rating
                id={`${venueName} Rating`}
                name={`${venueName} Rating`}
                data-testid={`${venueName} Rating`}
                value={rating}
                onChange={(event, newValue) => {
                  onRatingChange(newValue);
                }}
                size="large"
                sx={{
                  '& .MuiRating-iconFilled': {
                    color: '#667eea',
                  },
                  '& .MuiRating-iconHover': {
                    color: '#5a67d8',
                  },
                }}
              />
            </div>
          )}
          
          <button className="w-full bg-[#161616] hover:bg-[#262626] active:scale-95 text-white font-semibold py-3 px-6 rounded-lg text-base transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </InteractiveCard>
  );
}