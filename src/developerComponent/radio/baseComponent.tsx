import React from 'react';

interface RadioCSS {
  container: string;
  radio: string;
  label: string;
  helperText: string;
  errorText: string;
  group: string;
  item: string;
}

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioData {
  name: string;
  label?: string;
  value?: string;
  options?: RadioOption[];
  selectedValue?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

interface RadioProps {
  css: RadioCSS;
  data: RadioData;
}

const Radio: React.FC<RadioProps> = ({ css, data }) => {
  const handleChange = (value: string) => {
    if (data.onChange) {
      data.onChange(value);
    }
  };

  if (data.options && data.options.length > 0) {
    return (
      <div className={css.group}>
        {data.label && <label className={css.label}>{data.label}</label>}
        {data.options.map((option) => (
          <div key={option.value} className={css.item}>
            <input
              type="radio"
              id={`radio-${data.name}-${option.value}`}
              name={data.name}
              className={css.radio}
              value={option.value}
              checked={data.selectedValue === option.value}
              disabled={option.disabled || data.disabled}
              onChange={() => handleChange(option.value)}
            />
            <label htmlFor={`radio-${data.name}-${option.value}`} className={css.label}>
              {option.label}
            </label>
          </div>
        ))}
        {data.error && <p className={css.errorText}>{data.error}</p>}
        {!data.error && data.helperText && <p className={css.helperText}>{data.helperText}</p>}
      </div>
    );
  }

  return (
    <div className={css.container}>
      <div className="flex items-center">
        <input
          type="radio"
          id={`radio-${data.name}-${data.value || 'single'}`}
          name={data.name}
          className={css.radio}
          value={data.value}
          checked={data.selectedValue === data.value}
          disabled={data.disabled}
          onChange={() => handleChange(data.value || '')}
        />
        {data.label && (
          <label htmlFor={`radio-${data.name}-${data.value || 'single'}`} className={css.label}>
            {data.label}
          </label>
        )}
      </div>
      {data.error && <p className={css.errorText}>{data.error}</p>}
      {!data.error && data.helperText && <p className={css.helperText}>{data.helperText}</p>}
    </div>
  );
};

export default Radio;
