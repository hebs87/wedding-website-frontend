import PropTypes from 'prop-types';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import './Textarea.styles.scss';

const Textarea = ({ label, required, name, placeholder, value, onChange, rows = 3, error }) => {
  return (
    <div data-testid="Textarea" className="Textarea flex w-full flex-col gap-[5px]">
      {label && (
        <label htmlFor={name} className="font-AmikoBold text-[14px] text-text">
          {label}
          {required && ' *'}
        </label>
      )}
      <textarea
        className="rounded-[5px] border-[1px] border-grey bg-transparent p-[10px] placeholder:text-text placeholder:opacity-50"
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        rows={rows}
      />
      {error && <ErrorMessage text={error} />}
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  error: PropTypes.string,
};

export default Textarea;
