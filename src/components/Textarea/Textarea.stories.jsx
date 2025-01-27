import { useState } from 'react';
import Textarea from './Textarea';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => {
  const [val, setVal] = useState('');
  const [error, setError] = useState('');

  const onChange = (name, value) => {
    console.log(name, value);
    setVal(value);
    setError(value ? '' : 'This field is required');
  };

  return (
    <Textarea
      label="Additional info"
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
  title: 'Components/Textarea',
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

export const TextareaDesktop = JSON.parse(JSON.stringify(Desktop));
TextareaDesktop.args = {};

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

export const TextareaMobile = JSON.parse(JSON.stringify(Mobile));
TextareaMobile.args = {};
