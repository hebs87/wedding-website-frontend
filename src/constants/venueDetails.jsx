import WeddingVenueImage from 'assets/images/wedding-venue.jpg';
import MealVenueImage from 'assets/images/meal-venue.jpg';
import PartyVenueImage from 'assets/images/party-venue.jpg';

export const WEDDING_VENUE_DETAILS = {
  name: "St George's Hall Register Office",
  location: "St George's Hall, Liverpool, L1 1JJ",
  description: [
    'Join us for our intimate ceremony, which will take place in the Grand Jury Room at 2pm.',
    'We ask that you arrive for 1:30pm.',
    'Please enter the building via the South Entrance to the hall, and head to the Power and Glory Landing.',
    'More information, including directions and where to park, can be found by clicking the links below.',
  ],
  image: WeddingVenueImage,
  links: [
    {
      variant: 'website',
      href: 'https://liverpool.gov.uk/births-marriage-deaths/how-to-find-us/',
    },
    {
      variant: 'directions',
      href: "https://www.google.com/maps/dir//st+george's+hall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x487b212920708c5d:0x3cdad38e75f01dab?sa=X&ved=1t:3061&ictx=111",
    },
    {
      variant: 'instagram',
      href: 'https://www.instagram.com/stgeorgeshall_liverpool/?hl=en',
    },
  ],
};

export const MEAL_VENUE_DETAILS = {
  name: 'Riva Blu',
  location: '1 Castle St, Liverpool, L2 4SW',
  description: [
    'Join us for our first date night as Mr & Mrs Hebbar!',
    "We will have exclusive access to 'The Bullion Room', which is located downstairs in the restaurant, from 4pm " +
      'till late.',
    'Here, we will be served delicious canapés and welcome drinks on arrival, and a fabulous three-course dinner. ' +
      'We will also have access to our own bar... cocktails anyone?!',
    'All we ask is that you bring your appetites and good vibes!',
    'More venue information, can be found by clicking the links below.',
  ],
  image: MealVenueImage,
  links: [
    {
      variant: 'website',
      href: 'https://rivablu.co.uk/our-restaurants/liverpool/',
    },
    {
      variant: 'directions',
      href: 'https://www.google.co.uk/maps/dir//Riva+Blu+Italian+Restaurant+%26+Bar,+Liverpool,+1+Castle+St,+Liverpool+L2+4SW/@53.4068683,-2.9936057,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487b212e00b147f3:0x747564b24119a071!2m2!1d-2.9910614!2d53.4068607?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      variant: 'instagram',
      href: 'https://www.instagram.com/rivablurestaurants/?hl=en',
    },
  ],
};

export const PARTY_VENUE_DETAILS = {
  name: 'Ten Streets Wine',
  location: '30 Dublin Street, Liverpool, L3 7DT',
  description: [
    'Join us for our happily ever after-party from 7pm, onwards, at the fabulous Ten Streets Wine!',
    'This is not to be mixed up with Ten Streets Social. Please make sure you are on Dublin Street and look for the Ten Streets Wine sign, pictured above.',
    "There is some on-road parking outside the venue, and it is a 3 minute (or a 20 minute walk if you're up for it) taxi journey from Sandhills Station.",
    'There will be plenty of alcoholic and non-alcoholic drinks to choose from, a cold buffet, and Pizzeria Miki will be making an appearance in his pizza van!',
    'And yes, there will be wedding cake for those with a sweet tooth!',
    'We ask that you bring your dancing shoes and a good vibes!',
    'We hope to see you there!',
  ],
  image: PartyVenueImage,
  links: [
    {
      variant: 'website',
      href: 'https://tenstreetswine.co.uk/pages/venue-hire',
    },
    {
      variant: 'directions',
      href: 'https://www.google.co.uk/maps/dir//Ten+Streets+Wine,+Ten+Streets+Wine+Tasting+Centre,+30+Dublin+St,+Liverpool+L3+7DT/@53.4199739,-3.0014319,17z/data=!3m1!5s0x487b214ad1b053b3:0x868936548798e007!4m8!4m7!1m0!1m5!1m1!1s0x487b2172a99a2ead:0x55acd45dbacbe267!2m2!1d-2.998857!2d53.4199739?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      variant: 'instagram',
      href: 'https://www.instagram.com/tenstreetswine/?hl=en',
    },
  ],
};

export const WEDDING_HOTELS = [
  {
    location: '62 Castle Street Hotel, 62 Castle Street, Liverpool, L2 7LQ',
    links: [
      {
        variant: 'website',
        href: 'https://62castlestreethotel.co.uk/',
      },
    ],
  },
  {
    location: '1 Water Street Hotel, 1 Water Street, Liverpool, L2 0RD',
    links: [
      {
        variant: 'website',
        href: 'https://www.liverpool-hotel.com/en/property/1-water-street.html',
      },
    ],
  },
  {
    location: 'Aloft, 1 North John St, Liverpool, L2 5QW',
    links: [
      {
        variant: 'website',
        href: 'https://www.marriott.com/en-us/hotels/lplal-aloft-liverpool/overview/',
      },
    ],
  },
];

export const PARTY_HOTELS = [
  {
    location: 'Titanic Hotel, Stanley Dock, Regent Road, Liverpool, L3 0AN',
    links: [
      {
        variant: 'website',
        href: 'https://www.titanichotelliverpool.com/',
      },
    ],
  },
  {
    location: 'Malmaison, 7 William Jessop Way, Liverpool, L3 1QZ',
    links: [
      {
        variant: 'website',
        href: 'https://www.malmaison.com/locations/liverpool/',
      },
    ],
  },
  {
    location: 'Melia, 43 Old Hall St, Liverpool, L3 9PP',
    links: [
      {
        variant: 'website',
        href: 'https://www.melia.com/en/hotels/united-kingdom/liverpool/innside-liverpool',
      },
    ],
  },
  {
    location: 'Radisson Blu, 107 Old Hall St, Liverpool, L3 9BD',
    links: [
      {
        variant: 'website',
        href: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-liverpool',
      },
    ],
  },
];
