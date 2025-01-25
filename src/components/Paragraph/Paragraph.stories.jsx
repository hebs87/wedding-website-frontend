import Paragraph from './Paragraph';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const Component = (props) => <Paragraph {...props} />;

export default {
  title: 'Components/Paragraph',
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

export const ParagraphStandardDesktop = JSON.parse(JSON.stringify(Desktop));
ParagraphStandardDesktop.args = {
  text: 'This is an example paragraph',
};

export const ParagraphUppercaseDesktop = JSON.parse(JSON.stringify(Desktop));
ParagraphUppercaseDesktop.args = {
  variant: 'uppercase',
  text: 'This is an example paragraph',
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

export const ParagraphStandardMobile = JSON.parse(JSON.stringify(Mobile));
ParagraphStandardMobile.args = {
  text: 'This is an example paragraph',
};

export const ParagraphUppercaseMobile = JSON.parse(JSON.stringify(Mobile));
ParagraphUppercaseMobile.args = {
  variant: 'uppercase',
  text: 'This is an example paragraph',
};
