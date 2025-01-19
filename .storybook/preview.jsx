/** @type { import('@storybook/react').Preview } */
import { BrowserRouter } from 'react-router';

import Container from '../src/components/Container/Container';

import 'tailwindcss/tailwind.css';
import '../src/styles/_styles.scss';

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
