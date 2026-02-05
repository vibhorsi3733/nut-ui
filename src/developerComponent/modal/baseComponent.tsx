import React, { useEffect } from 'react';

interface ModalCSS {
  overlay: string;
  container: string;
  header: string;
  title: string;
  closeButton: string;
  body: string;
  footer: string;
}

interface ModalData {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
}

interface ModalProps {
  css: ModalCSS;
  data: ModalData;
}

const Modal: React.FC<ModalProps> = ({ css, data }) => {
  useEffect(() => {
    if (data.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [data.isOpen]);

  if (!data.isOpen) return null;

  return (
    <div className={css.overlay} onClick={data.onClose}>
      <div className={css.container} onClick={(e) => e.stopPropagation()}>
        {(data.title || data.showCloseButton !== false) && (
          <div className={css.header}>
            {data.title && <h3 className={css.title}>{data.title}</h3>}
            {data.showCloseButton !== false && (
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
        )}
        <div className={css.body}>
          {data.children}
        </div>
        {data.footer && <div className={css.footer}>{data.footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
