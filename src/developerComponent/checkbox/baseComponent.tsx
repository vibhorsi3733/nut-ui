import React from 'react';

interface CheckboxCSS {
  container: string;
  checkbox: string;
  label: string;
  helperText: string;
  errorText: string;
  group: string;
  item: string;
}

interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CheckboxData {
  label?: string;
  checked?: boolean;
  value?: string;
  options?: CheckboxOption[];
  selectedValues?: string[];
  helperText?: string;
  error?: string;
  disabled?: boolean;
  onChange?: (checked: boolean, value?: string) => void;
  onMultiChange?: (values: string[]) => void;
}

interface CheckboxProps {
  css: CheckboxCSS;
  data: CheckboxData;
}

const Checkbox: React.FC<CheckboxProps> = ({ css, data }) => {
  const handleSingleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data.onChange) {
      data.onChange(e.target.checked, data.value);
    }
  };

  const handleMultiChange = (value: string, checked: boolean) => {
    if (data.onMultiChange && data.selectedValues) {
      const newValues = checked
        ? [...data.selectedValues, value]
        : data.selectedValues.filter(v => v !== value);
      data.onMultiChange(newValues);
    }
  };

  if (data.options && data.options.length > 0) {
    return (
      <div className={css.group}>
        {data.label && <label className={css.label}>{data.label}</label>}
        {data.options.map((option) => (
          <div key={option.value} className={css.item}>
            <input
              type="checkbox"
              id={`checkbox-${option.value}`}
              className={css.checkbox}
              checked={data.selectedValues?.includes(option.value) || false}
              disabled={option.disabled || data.disabled}
              onChange={(e) => handleMultiChange(option.value, e.target.checked)}
            />
            <label htmlFor={`checkbox-${option.value}`} className={css.label}>
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
          type="checkbox"
          id={`checkbox-${data.value || 'single'}`}
          className={css.checkbox}
          checked={data.checked || false}
          disabled={data.disabled}
          onChange={handleSingleChange}
        />
        {data.label && (
          <label htmlFor={`checkbox-${data.value || 'single'}`} className={css.label}>
            {data.label}
          </label>
        )}
      </div>
      {data.error && <p className={css.errorText}>{data.error}</p>}
      {!data.error && data.helperText && <p className={css.helperText}>{data.helperText}</p>}
    </div>
  );
};

export default Checkbox;
