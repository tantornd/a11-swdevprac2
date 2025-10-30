import { VenueItem } from "../../interface";

interface SingleVenueJson {
  success: boolean;
  data: VenueItem;
}

export default async function getVenue(vid: string): Promise<SingleVenueJson> {
  const response = await fetch(
    `https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues/${vid}`,
    {
      next: { revalidate: 60 }, // Cache for 60 seconds
      cache: 'no-store' // Force fresh data for testing
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch venue");
  }

  const venueJson: SingleVenueJson = await response.json();
  return venueJson;
}