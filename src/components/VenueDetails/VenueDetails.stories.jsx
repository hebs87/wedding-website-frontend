import VenueDetails from './VenueDetails';

import { WEDDING_VENUE_DETAILS } from 'constants/venueDetails';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <VenueDetails {...props} />;

export default {
  title: 'Components/VenueDetails',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const Desktop = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#FFF',
        },
      ],
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};

export const VenueDetailsDesktop = JSON.parse(JSON.stringify(Desktop));
VenueDetailsDesktop.args = {
  ...WEDDING_VENUE_DETAILS,
};

const Mobile = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#FFF',
        },
      ],
    },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const VenueDetailsMobile = JSON.parse(JSON.stringify(Mobile));
VenueDetailsMobile.args = {
  ...WEDDING_VENUE_DETAILS,
};
