import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <Button {...props} />;

export default {
  title: 'Components/Button',
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

export const ButtonPrimaryDesktop = JSON.parse(JSON.stringify(Desktop));
ButtonPrimaryDesktop.args = {
  text: 'Submit',
  onClick: () => console.log('Primary button clicked'),
};

export const ButtonSecondaryDesktop = JSON.parse(JSON.stringify(Desktop));
ButtonSecondaryDesktop.args = {
  variant: 'secondary',
  text: 'Cancel',
  onClick: () => console.log('Secondary button clicked'),
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

export const ButtonPrimaryMobile = JSON.parse(JSON.stringify(Mobile));
ButtonPrimaryMobile.args = {
  text: 'Submit',
  onClick: () => console.log('Primary button clicked'),
};

export const ButtonSecondaryMobile = JSON.parse(JSON.stringify(Mobile));
ButtonSecondaryMobile.args = {
  variant: 'secondary',
  text: 'Cancel',
  onClick: () => console.log('Secondary button clicked'),
};
