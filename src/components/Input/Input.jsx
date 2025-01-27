import PropTypes from 'prop-types';

import './Input.styles.scss';

const Input = ({ type = 'text', label, required, name, placeholder, value, onChange, error }) => {
  return (
    <div data-testid="Input" className="Input relative flex w-full flex-col gap-[5px]">
      {label && (
        <label htmlFor={name} className="text-[14px] text-title">
          {label}
          {required && ' *'}
        </label>
      )}
      <input
        className="border-grey-2 rounded-[5px] border-[1px] p-[10px] placeholder:text-text placeholder:opacity-50"
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && <span className="inline-block text-[12px] text-title">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number']),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
