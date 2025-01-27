import { useState } from 'react';

import Checkbox from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => {
  const [checked, setChecked] = useState(false);

  const onChange = (name, checked) => {
    console.log(name, checked);
    setChecked(checked);
  };

  return <Checkbox name="test" checked={checked} onChange={onChange} text="This is a test checkbox" {...props} />;
};

export default {
  title: 'Components/Checkbox',
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

export const CheckboxDesktop = JSON.parse(JSON.stringify(Desktop));
CheckboxDesktop.args = {};

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

export const CheckboxMobile = JSON.parse(JSON.stringify(Mobile));
CheckboxMobile.args = {};
