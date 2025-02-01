import LoadingSpinner from './LoadingSpinner';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <LoadingSpinner {...props} />;

export default {
  title: 'Components/LoadingSpinner',
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

export const LoadingSpinnerDesktop = JSON.parse(JSON.stringify(Desktop));
LoadingSpinnerDesktop.args = {};

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

export const LoadingSpinnerMobile = JSON.parse(JSON.stringify(Mobile));
LoadingSpinnerMobile.args = {};
