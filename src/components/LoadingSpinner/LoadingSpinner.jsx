import PropTypes from 'prop-types';

import './LoadingSpinner.styles.scss';

const LoadingSpinner = ({ variant = 'primary', size = '1rem' }) => {
  return (
    <div
      data-testid="LoadingSpinner"
      className={`LoadingSpinner text-primary inline-block animate-spin rounded-full border-solid align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${variant === 'primary' ? 'border-[4px] border-title border-r-transparent' : 'border-2 border-background border-r-transparent'}`}
      role="status"
      style={{ height: size, width: size }}
    />
  );
};

LoadingSpinner.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.string,
};

export default LoadingSpinner;
