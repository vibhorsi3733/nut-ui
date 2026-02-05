import React from 'react';

interface InputCSS {
  container: string;
  label: string;
  input: string;
  helperText: string;
  errorText: string;
}

interface InputData {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea';
  rows?: number;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}

interface InputProps {
  css: InputCSS;
  data: InputData;
}

const Input: React.FC<InputProps> = ({ css, data }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (data.onChange) {
      data.onChange(e.target.value);
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
      {data.type === 'textarea' ? (
        <textarea
          className={css.input}
          placeholder={data.placeholder}
          value={data.value}
          rows={data.rows || 4}
          disabled={data.disabled}
          onChange={handleChange}
        />
      ) : (
        <input
          type={data.type || 'text'}
          className={css.input}
          placeholder={data.placeholder}
          value={data.value}
          disabled={data.disabled}
          onChange={handleChange}
        />
      )}
      {data.error && <p className={css.errorText}>{data.error}</p>}
      {!data.error && data.helperText && <p className={css.helperText}>{data.helperText}</p>}
    </div>
  );
};

export default Input;
