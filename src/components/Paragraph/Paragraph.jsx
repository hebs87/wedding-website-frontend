import PropTypes from 'prop-types';

import './Paragraph.styles.scss';

const Paragraph = ({ variant = 'standard', text }) => {
  return (
    <p data-testid="Paragraph" className={`Paragraph ${variant}`}>
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['standard', 'uppercase']),
  text: PropTypes.string.isRequired,
};

export default Paragraph;
