import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import App from './App.jsx';
import InvitationContextProvider from 'contexts/InvitationContext/InvitationContextProvider';

// imports tailwindcss
import 'styles/_styles.scss';

// Enable redirect for S3
const history = createBrowserHistory();
const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
if (path) history.replace(path);

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BrowserRouter>
      <InvitationContextProvider>
        <App />
      </InvitationContextProvider>
    </BrowserRouter>
  </ErrorBoundary>,
);
