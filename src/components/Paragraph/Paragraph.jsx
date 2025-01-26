import PropTypes from 'prop-types';

import './Paragraph.styles.scss';

const Paragraph = ({ variant = 'standard', text, customClasses = '' }) => {
  return (
    <p data-testid="Paragraph" className={`Paragraph ${variant} ${customClasses}`}>
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['standard', 'uppercase']),
  text: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
};

export default Paragraph;
