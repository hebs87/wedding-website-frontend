import WeddingVenueImage from 'assets/images/wedding-venue.jpg';
import MealVenueImage from 'assets/images/meal-venue.jpg';
import PartyVenueImage from 'assets/images/party-venue.jpg';

export const WEDDING_VENUE_DETAILS = {
  name: "St George's Hall Register Office",
  description: ["St George's Hall, Liverpool", 'Join us for our intimate ceremony'],
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
  description: ['Riva Blu, Liverpool'],
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
  description: ['Ten Streets Wine, Liverpool'],
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
