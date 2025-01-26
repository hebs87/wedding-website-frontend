import Countdown from './Countdown';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <Countdown {...props} />;

export default {
  title: 'Components/Countdown',
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

export const CountdownWeddingDesktop = JSON.parse(JSON.stringify(Desktop));
CountdownWeddingDesktop.args = {};

export const CountdownPartyDesktop = JSON.parse(JSON.stringify(Desktop));
CountdownPartyDesktop.args = {
  variant: 'party',
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

export const CountdownWeddingMobile = JSON.parse(JSON.stringify(Mobile));
CountdownWeddingMobile.args = {};

export const CountdownPartyMobile = JSON.parse(JSON.stringify(Mobile));
CountdownPartyMobile.args = {
  variant: 'party',
};
