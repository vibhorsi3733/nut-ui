import React from 'react';

interface AlertCSS {
  container: string;
  icon: string;
  title: string;
  message: string;
  closeButton: string;
}

interface AlertData {
  title?: string;
  message: string;
  showClose?: boolean;
  onClose?: () => void;
  icon?: React.ReactNode;
}

interface AlertProps {
  css: AlertCSS;
  data: AlertData;
}

const Alert: React.FC<AlertProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {data.icon && <div className={css.icon}>{data.icon}</div>}
      <div className="flex-1">
        {data.title && <h3 className={css.title}>{data.title}</h3>}
        <p className={css.message}>{data.message}</p>
      </div>
      {data.showClose && (
        <button
          onClick={data.onClose}
          className={css.closeButton}
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
