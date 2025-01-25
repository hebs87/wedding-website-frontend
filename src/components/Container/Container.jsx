import PropTypes from 'prop-types';

import './Container.styles.scss';

const Container = ({ children }) => {
  return (
    <div data-testid="Container" className="h-screen w-full bg-background">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
