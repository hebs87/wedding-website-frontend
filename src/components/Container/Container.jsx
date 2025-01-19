import PropTypes from 'prop-types';

import './Container.styles.scss';

const Container = ({ children }) => {
  return (
    <div data-testid="Container" className="h-screen w-full bg-black">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
