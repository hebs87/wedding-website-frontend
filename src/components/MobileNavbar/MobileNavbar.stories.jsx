import MobileNavbar from './MobileNavbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <MobileNavbar {...props} />;

export default {
  title: 'Components/MobileNavbar',
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

export const MobileNavbarDesktop = JSON.parse(JSON.stringify(Desktop));
MobileNavbarDesktop.args = {};

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

export const MobileNavbarMobile = JSON.parse(JSON.stringify(Mobile));
MobileNavbarMobile.args = {};
