import { PATH_HOME, PATH_OUR_STORY, PATH_WEDDING, PATH_PARTY, PATH_RSVP, PATH_GALLERY } from 'routes/paths';

export const DESKTOP_NAV_LINKS = [
  {
    text: 'Our Story',
    path: PATH_OUR_STORY,
  },
  {
    text: 'Wedding',
    path: PATH_WEDDING,
  },
  {
    text: 'Party',
    path: PATH_PARTY,
  },
  {
    text: 'RSVP',
    path: PATH_RSVP,
  },
  {
    text: 'Gallery',
    path: PATH_GALLERY,
  },
];

export const MOBILE_NAV_LINKS = [
  {
    text: 'Home',
    path: PATH_HOME,
  },
  ...DESKTOP_NAV_LINKS,
];
