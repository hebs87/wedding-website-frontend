import Gallery from './Gallery';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = () => <Gallery />;

export default {
  title: 'Pages/Gallery',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {};
