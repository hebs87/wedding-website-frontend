import PropTypes from 'prop-types';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

import './Button.styles.scss';

const Button = ({ variant = 'primary', text, onClick, disabled, loading }) => {
  return (
    <button
      data-testid="Button"
      className={`Button duration-250 flex items-center rounded-[6px] text-[14px] transition-all hover:opacity-70 md:text-[16px] ${variant === 'primary' ? 'bg-title px-[30px] py-[10px] text-background' : 'border-[2px] border-text px-[28px] py-[8px]'} ${disabled ? 'bg-grey cursor-not-allowed opacity-70' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="inline-block translate-y-[1px]">{text}</span>
      {loading && (
        <span className="ml-[5px] mt-[2px]">
          <LoadingSpinner variant="secondary" />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
