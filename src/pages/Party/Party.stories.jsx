import Party from './Party';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = () => <Party />;

export default {
  title: 'Pages/Party',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {};
