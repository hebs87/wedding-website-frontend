import { cloneElement } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router';
import { AnimatePresence } from 'framer-motion';

// pages
import Home from 'pages/Home/Home';
import Wedding from 'pages/Wedding/Wedding';
import Party from 'pages/Party/Party';
import Gallery from 'pages/Gallery/Gallery';
import RSVP from 'pages/RSVP/RSVP';

// config
import { PATH_HOME, PATH_WEDDING, PATH_PARTY, PATH_GALLERY, PATH_RSVP, CODE_PARAM } from 'routes/paths';

const Router = () => {
  const elements = useRoutes([
    {
      path: PATH_HOME,
      element: <Home />,
      children: [
        { element: <Home />, index: true },
        {
          path: CODE_PARAM,
          element: <Home />,
        },
      ],
    },
    {
      path: PATH_WEDDING,
      element: <Wedding />,
      children: [
        { element: <Wedding />, index: true },
        {
          path: CODE_PARAM,
          element: <Wedding />,
        },
      ],
    },
    {
      path: PATH_PARTY,
      element: <Party />,
      children: [
        { element: <Party />, index: true },
        {
          path: CODE_PARAM,
          element: <Party />,
        },
      ],
    },
    {
      path: PATH_GALLERY,
      element: <Gallery />,
      children: [
        { element: <Gallery />, index: true },
        {
          path: CODE_PARAM,
          element: <Gallery />,
        },
      ],
    },
    {
      path: PATH_RSVP,
      element: <RSVP />,
      children: [
        { element: <RSVP />, index: true },
        {
          path: CODE_PARAM,
          element: <RSVP />,
        },
      ],
    },
    // Unknown routes - redirect to home
    {
      path: '*',
      element: <Navigate to={PATH_HOME} replace />,
    },
  ]);

  const location = useLocation();
  if (!elements) return null;
  return <AnimatePresence mode="wait">{cloneElement(elements, { key: location.pathname })}</AnimatePresence>;
};

export default Router;
