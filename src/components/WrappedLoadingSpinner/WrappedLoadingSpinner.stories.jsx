import WrappedLoadingSpinner from './WrappedLoadingSpinner';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <WrappedLoadingSpinner {...props} />;

export default {
  title: 'Components/WrappedLoadingSpinner',
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

export const WrappedLoadingSpinnerDesktop = JSON.parse(JSON.stringify(Desktop));
WrappedLoadingSpinnerDesktop.args = {};

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

export const WrappedLoadingSpinnerMobile = JSON.parse(JSON.stringify(Mobile));
WrappedLoadingSpinnerMobile.args = {};
