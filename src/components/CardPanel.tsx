'use client';

import { useReducer } from 'react';
import Link from 'next/link';
import VenueCard from './Card';
import { venuesArray } from '@/data/venues';

type RatingMap = Map<string, number>;

type RatingAction = 
  | { type: 'UPDATE_RATING'; venueName: string; rating: number }
  | { type: 'REMOVE_RATING'; venueName: string };

function ratingsReducer(state: RatingMap, action: RatingAction): RatingMap {
  switch (action.type) {
    case 'UPDATE_RATING': {
      const newState = new Map(state);
      newState.set(action.venueName, action.rating);
      return newState;
    }
    case 'REMOVE_RATING': {
      const newState = new Map(state);
      newState.delete(action.venueName);
      return newState;
    }
    default:
      return state;
  }
}

const initialRatings: RatingMap = new Map(
  venuesArray.map(venue => [venue.venueName, 0])
);

export default function VenueCardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  const handleRatingChange = (venueName: string, rating: number | null) => {
    dispatch({
      type: 'UPDATE_RATING',
      venueName,
      rating: rating || 0,
    });
  };

  const handleRemoveRating = (venueName: string) => {
    dispatch({
      type: 'REMOVE_RATING',
      venueName,
    });
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-8">
        {venuesArray.map((venue) => (
          <Link
            key={venue.vid}
            href={`/venue/${venue.vid}`}
            className="w-[360px] sm:w-[380px] max-w-full"
          >
            <VenueCard
              venueName={venue.venueName}
              imgSrc={venue.imgSrc}
              rating={ratings.get(venue.venueName) || 0}
              onRatingChange={(rating) => handleRatingChange(venue.venueName, rating)}
            />
          </Link>
        ))}
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Venue List with Ratings : {ratings.size}
          </p>
          {Array.from(ratings.entries()).map(([venueName, rating]) => (
            <div
              key={venueName}
              data-testid={venueName}
              onClick={() => handleRemoveRating(venueName)}
              className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {venueName} : {rating}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}