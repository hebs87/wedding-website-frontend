/** @type { import('@storybook/react').Preview } */
import { BrowserRouter } from 'react-router';

import Container from 'components/Container/Container';

import 'tailwindcss/tailwind.css';
import 'styles/_styles.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Container>
        <Story />
      </Container>
    </BrowserRouter>
  ),
];
