import { useState } from 'react';

import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => {
  const [val, setVal] = useState('');
  const [error, setError] = useState('');

  const onChange = (name, value) => {
    setVal(value);
    setError(value ? '' : 'This field is required');
  };

  return (
    <Input
      label="Code"
      required
      name="test"
      placeholder="Enter your value here"
      value={val}
      onChange={onChange}
      error={error}
      {...props}
    />
  );
};

export default {
  title: 'Components/Input',
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

export const InputDesktop = JSON.parse(JSON.stringify(Desktop));
InputDesktop.args = {};

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

export const InputMobile = JSON.parse(JSON.stringify(Mobile));
InputMobile.args = {};
