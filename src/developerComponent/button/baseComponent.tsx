import React from 'react';

interface ButtonCSS {
  button: string;
}

interface ButtonData {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonProps {
  css: ButtonCSS;
  data: ButtonData;
}

const Button: React.FC<ButtonProps> = ({ css, data }) => {
  return (
    <button
      type={data.type || 'button'}
      onClick={data.onClick}
      disabled={data.disabled}
      className={css.button}
    >
      {data.label}
    </button>
  );
};

export default Button;
