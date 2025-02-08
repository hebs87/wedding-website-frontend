import ErrorMessage from './ErrorMessage';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <ErrorMessage text="This is an error" {...props} />;

export default {
  title: 'Components/ErrorMessage',
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

export const ErrorMessageDesktop = JSON.parse(JSON.stringify(Desktop));
ErrorMessageDesktop.args = {};

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

export const ErrorMessageMobile = JSON.parse(JSON.stringify(Mobile));
ErrorMessageMobile.args = {};
