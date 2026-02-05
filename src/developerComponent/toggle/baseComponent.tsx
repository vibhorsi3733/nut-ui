import React from 'react';

interface ToggleCSS {
  container: string;
  toggle: string;
  label: string;
  helperText: string;
}

interface ToggleData {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  helperText?: string;
  onChange?: (checked: boolean) => void;
}

interface ToggleProps {
  css: ToggleCSS;
  data: ToggleData;
}

const Toggle: React.FC<ToggleProps> = ({ css, data }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data.onChange) {
      data.onChange(e.target.checked);
    }
  };

  return (
    <div className={css.container}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="toggle"
          className={css.toggle}
          checked={data.checked || false}
          disabled={data.disabled}
          onChange={handleChange}
        />
        {data.label && (
          <label htmlFor="toggle" className={css.label}>
            {data.label}
          </label>
        )}
      </div>
      {data.helperText && <p className={css.helperText}>{data.helperText}</p>}
    </div>
  );
};

export default Toggle;
