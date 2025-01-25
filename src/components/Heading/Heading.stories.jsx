import Heading from './Heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <Heading {...props} />;

export default {
  title: 'Components/Heading',
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

export const HeadingPrimaryDesktop = JSON.parse(JSON.stringify(Desktop));
HeadingPrimaryDesktop.args = {
  text: 'Hello World',
};

export const HeadingSecondaryDesktop = JSON.parse(JSON.stringify(Desktop));
HeadingSecondaryDesktop.args = {
  variant: 'secondary',
  text: 'Hello World',
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

export const HeadingPrimaryMobile = JSON.parse(JSON.stringify(Mobile));
HeadingPrimaryMobile.args = {
  text: 'Hello World',
};

export const HeadingSecondaryMobile = JSON.parse(JSON.stringify(Mobile));
HeadingSecondaryMobile.args = {
  variant: 'secondary',
  text: 'Hello World',
};
