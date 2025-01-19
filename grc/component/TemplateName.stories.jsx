import TemplateName from './TemplateName';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <TemplateName {...props} />;

export default {
  title: 'Components/TemplateName',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TemplateNameDesktop = {};
TemplateNameDesktop.args = {};

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

export const TemplateNameMobile = JSON.parse(JSON.stringify(Mobile));
TemplateNameMobile.args = {};
