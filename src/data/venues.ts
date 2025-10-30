export interface Venue {
  vid: string;
  venueName: string;
  imgSrc: string;
  description: string;
  capacity: string;
  features: string;
}

// Array of venue objects for CardPanel
export const venuesArray: Venue[] = [
  {
    vid: '001',
    venueName: 'The Bloom Pavilion',
    imgSrc: '/img/bloom.jpg',
    description: 'An elegant pavilion surrounded by beautiful gardens, perfect for sophisticated gatherings and memorable celebrations.',
    capacity: 'Up to 300 guests',
    features: 'Garden views, Natural lighting, Full catering kitchen'
  },
  {
    vid: '002',
    venueName: 'Spark Space',
    imgSrc: '/img/sparkspace.jpg',
    description: 'A modern, versatile venue designed to inspire creativity and innovation for your special events.',
    capacity: 'Up to 150 guests',
    features: 'State-of-the-art AV system, Flexible layout, High-speed WiFi'
  },
  {
    vid: '003',
    venueName: 'The Grand Table',
    imgSrc: '/img/grandtable.jpg',
    description: 'A luxurious dining venue offering an exquisite atmosphere for intimate gatherings and grand celebrations.',
    capacity: 'Up to 200 guests',
    features: 'Premium dining setup, Wine cellar, Private chef service'
  }
];

// Map of venue objects for detail pages
export const venueData = new Map<string, Venue>(
  venuesArray.map(venue => [venue.vid, venue])
);