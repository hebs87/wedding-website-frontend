import TemplateName from './TemplateName';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = () => <TemplateName />;

export default {
  title: 'Pages/TemplateName',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {};
