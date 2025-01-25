import Navbar from './Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => (
  <div className="min-h-[2000px] bg-background">
    <Navbar {...props} />
  </div>
);

export default {
  title: 'Components/Navbar',
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

export const NavbarDesktop = JSON.parse(JSON.stringify(Desktop));
NavbarDesktop.args = {};

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

export const NavbarMobile = JSON.parse(JSON.stringify(Mobile));
NavbarMobile.args = {};
