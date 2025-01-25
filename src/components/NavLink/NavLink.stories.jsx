import NavLink from './NavLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <NavLink {...props} />;

export default {
  title: 'Components/NavLink',
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

export const NavLinkDesktop = JSON.parse(JSON.stringify(Desktop));
NavLinkDesktop.args = {
  text: 'Home',
  path: '/',
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

export const NavLinkMobile = JSON.parse(JSON.stringify(Mobile));
NavLinkMobile.args = {
  text: 'Home',
  path: '/',
};
