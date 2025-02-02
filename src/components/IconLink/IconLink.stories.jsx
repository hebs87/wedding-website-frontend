import IconLink from './IconLink';

import { WEDDING_VENUE_DETAILS } from 'constants/venueDetails';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <IconLink {...props} />;

export default {
  title: 'Components/IconLink',
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

export const IconLinkWebsiteDesktop = JSON.parse(JSON.stringify(Desktop));
IconLinkWebsiteDesktop.args = {
  ...WEDDING_VENUE_DETAILS.links[0],
};

export const IconLinkDirectionsDesktop = JSON.parse(JSON.stringify(Desktop));
IconLinkDirectionsDesktop.args = {
  ...WEDDING_VENUE_DETAILS.links[1],
};

export const IconLinkInstagramDesktop = JSON.parse(JSON.stringify(Desktop));
IconLinkInstagramDesktop.args = {
  ...WEDDING_VENUE_DETAILS.links[2],
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

export const IconLinkWebsiteMobile = JSON.parse(JSON.stringify(Mobile));
IconLinkWebsiteMobile.args = {
  ...WEDDING_VENUE_DETAILS.links[0],
};

export const IconLinkDirectionsMobile = JSON.parse(JSON.stringify(Mobile));
IconLinkDirectionsMobile.args = {
  ...WEDDING_VENUE_DETAILS.links[1],
};

export const IconLinkInstagramMobile = JSON.parse(JSON.stringify(Mobile));
IconLinkInstagramMobile.args = {
  ...WEDDING_VENUE_DETAILS.links[2],
};
