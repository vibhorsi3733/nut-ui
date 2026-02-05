import React from 'react';

interface SelectCSS {
  container: string;
  label: string;
  select: string;
  option: string;
  helperText: string;
  errorText: string;
}

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectData {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | string[];
  multiple?: boolean;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (value: string | string[]) => void;
}

interface SelectProps {
  css: SelectCSS;
  data: SelectData;
}

const Select: React.FC<SelectProps> = ({ css, data }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (data.onChange) {
      if (data.multiple) {
        const selected = Array.from(e.target.selectedOptions, option => option.value);
        data.onChange(selected);
      } else {
        data.onChange(e.target.value);
      }
    }
  };

  return (
    <div className={css.container}>
      {data.label && (
        <label className={css.label}>
          {data.label}
          {data.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        className={css.select}
        value={data.value}
        multiple={data.multiple}
        disabled={data.disabled}
        onChange={handleChange}
      >
        {data.placeholder && !data.multiple && (
          <option value="" disabled>
            {data.placeholder}
          </option>
        )}
        {data.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className={css.option}
          >
            {option.label}
          </option>
        ))}
      </select>
      {data.error && <p className={css.errorText}>{data.error}</p>}
      {!data.error && data.helperText && <p className={css.helperText}>{data.helperText}</p>}
    </div>
  );
};

export default Select;
