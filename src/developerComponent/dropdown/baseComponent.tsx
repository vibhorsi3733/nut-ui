import React, { useState, useRef, useEffect } from 'react';

interface DropdownCSS {
  container: string;
  button: string;
  menu: string;
  item: string;
  icon: string;
  checkbox?: string;
}

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
  selected?: boolean;
}

interface DropdownData {
  label: string;
  items: DropdownItem[];
  placement?: 'left' | 'right';
  multiSelect?: boolean;
}

interface DropdownProps {
  css: DropdownCSS;
  data: DropdownData;
}

const Dropdown: React.FC<DropdownProps> = ({ css, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(data.items.filter(item => item.selected).map(item => item.value))
  );
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

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;

    if (data.multiSelect) {
      // Multi-select: toggle selection
      const newSelected = new Set(selectedItems);
      if (newSelected.has(item.value)) {
        newSelected.delete(item.value);
      } else {
        newSelected.add(item.value);
      }
      setSelectedItems(newSelected);
      // Don't close dropdown in multi-select mode
    } else {
      // Single select: close dropdown and call onClick
      if (item.onClick) item.onClick();
      setIsOpen(false);
    }
  };

  const getButtonLabel = () => {
    if (data.multiSelect && selectedItems.size > 0) {
      const selectedLabels = data.items
        .filter(item => selectedItems.has(item.value))
        .map(item => item.label);
      return selectedLabels.length > 0 
        ? `${data.label} (${selectedLabels.length} selected)`
        : data.label;
    }
    return data.label;
  };

  return (
    <div className={css.container} ref={dropdownRef}>
      <button
        type="button"
        className={css.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {getButtonLabel()}
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
            const isSelected = data.multiSelect ? selectedItems.has(item.value) : false;
            
            return (
              <button
                key={item.value}
                type="button"
                className={`${css.item} ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
                role="menuitem"
              >
                {data.multiSelect && css.checkbox && (
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleItemClick(item)}
                    className={css.checkbox}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
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
