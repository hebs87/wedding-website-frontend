import EnterCodeBlock from './EnterCodeBlock';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <EnterCodeBlock {...props} />;

export default {
  title: 'Components/EnterCodeBlock',
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

export const EnterCodeBlockDesktop = JSON.parse(JSON.stringify(Desktop));
EnterCodeBlockDesktop.args = {};

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

export const EnterCodeBlockMobile = JSON.parse(JSON.stringify(Mobile));
EnterCodeBlockMobile.args = {};
