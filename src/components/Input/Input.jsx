import PropTypes from 'prop-types';

import './Input.styles.scss';

const Input = ({ type = 'text', label, required, name, placeholder, value, onChange, handleSubmit, error }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && handleSubmit) handleSubmit(e);
  };

  return (
    <div data-testid="Input" className="Input flex w-full flex-col gap-[5px]">
      {label && (
        <label htmlFor={name} className="font-AmikoBold text-[14px] text-text">
          {label}
          {required && ' *'}
        </label>
      )}
      <input
        className="rounded-[5px] border-[1px] border-grey-2 bg-transparent p-[10px] placeholder:text-text placeholder:opacity-50"
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onKeyDown={handleKeyDown}
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
  handleSubmit: PropTypes.func,
  error: PropTypes.string,
};

export default Input;
