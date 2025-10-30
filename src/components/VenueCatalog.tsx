import Link from 'next/link';
import VenueCard from './Card';
import { VenueJson } from '../../interface';

interface VenueCatalogProps {
  venuesJson: Promise<VenueJson> | VenueJson;
}

export default async function VenueCatalog({ venuesJson }: VenueCatalogProps) {
  // Await the Promise to get the actual VenueJson data
  const venues = await venuesJson;
  
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-8">
        {venues.data.map((venue) => (
          <Link
            key={venue.id}
            href={`/venue/${venue.id}`}
            className="w-[360px] sm:w-[380px] max-w-full"
          >
            <VenueCard
              venueName={venue.name}
              imgSrc={venue.picture}
              // Don't pass rating and onRatingChange props
            />
          </Link>
        ))}
      </div>
    </div>
  );
}