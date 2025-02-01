import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

import './WrappedLoadingSpinner.styles.scss';

const WrappedLoadingSpinner = () => {
  return (
    <div
      data-testid="WrappedLoadingSpinner"
      className="WrappedLoadingSpinner fixed flex h-screen w-screen items-center justify-center bg-transparent"
    >
      <LoadingSpinner variant="primary" size="2.5rem" />
    </div>
  );
};

WrappedLoadingSpinner.propTypes = {};

export default WrappedLoadingSpinner;
