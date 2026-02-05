import React, { useState, useRef, useEffect } from 'react';

interface DropdownCSS {
  container: string;
  button: string;
  menu: string;
  item: string;
  icon: string;
}

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

interface DropdownData {
  label: string;
  items: DropdownItem[];
  placement?: 'left' | 'right';
}

interface DropdownProps {
  css: DropdownCSS;
  data: DropdownData;
}

const Dropdown: React.FC<DropdownProps> = ({ css, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={css.container} ref={dropdownRef}>
      <button
        type="button"
        className={css.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {data.label}
        <svg 
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div 
          className={`${css.menu} ${data.placement === 'right' ? 'right-0' : 'left-0'} opacity-100 translate-y-0`}
          role="menu"
          aria-orientation="vertical"
        >
          {data.items.map((item, index) => {
            if (item.divider) {
              return <div key={index} className="border-t border-gray-200 dark:border-gray-700 my-1" />;
            }
            return (
              <button
                key={item.value}
                type="button"
                className={`${css.item} ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => {
                  if (!item.disabled) {
                    if (item.onClick) item.onClick();
                    setIsOpen(false);
                  }
                }}
                disabled={item.disabled}
                role="menuitem"
              >
                {item.icon && <span className={css.icon}>{item.icon}</span>}
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
