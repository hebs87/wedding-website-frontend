import PropTypes from 'prop-types';

import './Heading.styles.scss';

const Heading = ({ variant = 'primary', text, customClasses = '' }) => {
  return (
    <h2
      data-testid="Heading"
      className={`Heading mb-[10px] font-Cooper text-title ${variant === 'primary' ? 'text-[32px] leading-[32px] md:text-[48px] md:leading-[48px]' : 'text-[18px] leading-[18px] md:text-[20px] md:leading-[20px]'} ${customClasses}`}
    >
      {text}
    </h2>
  );
};

Heading.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
};

export default Heading;
