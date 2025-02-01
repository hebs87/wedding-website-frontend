import PropTypes from 'prop-types';

import './Checkbox.styles.scss';

const Checkbox = ({ name, checked, onChange, text, error }) => {
  return (
    <div data-testid="Checkbox" className="Checkbox relative">
      <label htmlFor={name} className="flex cursor-pointer items-start">
        <input
          className="cursor-pointer"
          type="checkbox"
          id={name}
          checked={checked}
          onChange={(e) => onChange(name, e.target.checked)}
        />
        {text && <span className="ml-[5px] translate-y-[-2px]">{text}</span>}
      </label>
      {error && <span className="absolute bottom-[-15px] inline-block text-[12px] text-title">{error}</span>}
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  error: PropTypes.string,
};

export default Checkbox;
