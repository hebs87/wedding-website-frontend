import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation, useRoutes } from 'react-router';
import { AnimatePresence } from 'framer-motion';

// pages
import Home from 'pages/Home/Home';
import OurStory from 'pages/OurStory/OurStory';
import Wedding from 'pages/Wedding/Wedding';
import Party from 'pages/Party/Party';
import RSVP from 'pages/RSVP/RSVP';
import Gallery from 'pages/Gallery/Gallery';

// config
import { PATH_HOME, PATH_OUR_STORY, PATH_WEDDING, PATH_PARTY, PATH_RSVP, CODE_PARAM } from 'routes/paths';

const Router = ({ isGallery }) => {
  const LandingPage = isGallery ? Gallery : Home;

  const elements = useRoutes([
    {
      path: PATH_HOME,
      element: <LandingPage />,
      children: [
        { element: <LandingPage />, index: true },
        {
          path: CODE_PARAM,
          element: <LandingPage />,
        },
      ],
    },
    !isGallery && {
      path: PATH_OUR_STORY,
      element: <OurStory />,
      children: [
        { element: <OurStory />, index: true },
        {
          path: CODE_PARAM,
          element: <OurStory />,
        },
      ],
    },
    !isGallery && {
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
    !isGallery && {
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
    !isGallery && {
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

Router.propTypes = {
  isGallery: PropTypes.bool.isRequired,
};

export default Router;
