import PropTypes from 'prop-types';

import './PageContainer.styles.scss';

const PageContainer = ({ children }) => {
  return (
    <div
      data-testid="PageContainer"
      className="PageContainer mx-auto mb-auto mt-[100px] w-full max-w-[1400px] px-[20px] pb-[20px] md:px-[50px] md:pb-[50px]"
    >
      {children}
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
