'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { components } from '@/config/components';
import { variants } from '@/config/variants';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const pathname = usePathname();
  const [expandedComponents, setExpandedComponents] = useState<Set<string>>(
    new Set(components.map(c => c.id))
  );

  const toggleComponent = (componentId: string) => {
    const newExpanded = new Set(expandedComponents);
    if (newExpanded.has(componentId)) {
      newExpanded.delete(componentId);
    } else {
      newExpanded.add(componentId);
    }
    setExpandedComponents(newExpanded);
  };

  const isComponentActive = (componentId: string) => {
    return pathname?.startsWith(`/component-library/${componentId}`);
  };

  const isVariantActive = (variantId: string, componentId: string) => {
    return pathname === `/component-library/${componentId}/variants/${variantId}`;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800
          transform transition-transform duration-300 ease-in-out z-50
          overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="p-4">
          <div className="mb-6">
            <h2 className="font-display text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Components
            </h2>
            <nav className="space-y-1">
              {components.map((component) => {
                const componentVariants = variants.filter(
                  v => v.componentId === component.id
                );
                const isActive = isComponentActive(component.id);
                const isExpanded = expandedComponents.has(component.id);

                return (
                  <div key={component.id}>
                    <div className="flex items-center">
                      <Link
                        href={`/component-library/${component.id}`}
                        onClick={() => {
                          if (window.innerWidth < 1024 && onClose) {
                            onClose();
                          }
                        }}
                        className={`
                          flex-1 flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                          ${isActive
                            ? 'bg-[#5f52ff]/10 text-[#5f52ff] dark:text-[#818cf8]'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }
                        `}
                      >
                        <span>{component.name}</span>
                        {componentVariants.length > 0 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {componentVariants.length}
                          </span>
                        )}
                      </Link>
                      {componentVariants.length > 0 && (
                        <button
                          onClick={() => toggleComponent(component.id)}
                          className="ml-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <svg
                            className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                    {isExpanded && componentVariants.length > 0 && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-800 pl-3">
                        {componentVariants.map((variant) => {
                          const variantActive = isVariantActive(variant.id, component.id);
                          return (
                            <Link
                              key={variant.id}
                              href={`/component-library/${component.id}/variants/${variant.id}`}
                              onClick={() => {
                                if (window.innerWidth < 1024 && onClose) {
                                  onClose();
                                }
                              }}
                              className={`
                                block px-3 py-1.5 rounded text-xs transition-colors
                                ${variantActive
                                  ? 'text-[#5f52ff] dark:text-[#818cf8] font-semibold bg-[#5f52ff]/10'
                                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                                }
                              `}
                            >
                              {variant.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
