import PropTypes from 'prop-types';

import './ErrorMessage.styles.scss';

const ErrorMessage = ({ text, customClasses = '' }) => {
  return (
    <span data-testid="ErrorMessage" className={`ErrorMessage inline-block text-[12px] text-error ${customClasses}`}>
      {text}
    </span>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
};

export default ErrorMessage;
