'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import GenericSidebar from '@/components/GenericSidebar';
import { genericComponents } from '@/config/genericComponents';
import { genericVariants } from '@/config/genericVariants';
import { Button } from '@/developerComponent/componentCollection';
import { Badge } from '@/developerComponent/componentCollection';
import { Alert } from '@/developerComponent/componentCollection';
import { Avatar } from '@/developerComponent/componentCollection';
import { Input } from '@/developerComponent/componentCollection';
import { Dropdown } from '@/developerComponent/componentCollection';
import { Modal } from '@/developerComponent/componentCollection';
import { Tabs } from '@/developerComponent/componentCollection';
import { Breadcrumb } from '@/developerComponent/componentCollection';
import {
  primaryButtonCSS,
  primaryButtonData,
  secondaryButtonCSS,
  secondaryButtonData
} from '@/components/variant/button';
import {
  solidBadgeCSS,
  solidBadgeData,
  outlineBadgeCSS,
  outlineBadgeData
} from '@/components/variant/badge';
import {
  successAlertCSS,
  successAlertData,
  errorAlertCSS,
  errorAlertData
} from '@/components/variant/alert';
import {
  singleAvatarCSS,
  singleAvatarData,
  groupAvatarCSS,
  groupAvatarData
} from '@/components/variant/avatar';
import {
  textInputCSS,
  textInputData,
  textareaInputCSS,
  textareaInputData
} from '@/components/variant/input';
import {
  simpleDropdownCSS,
  simpleDropdownData,
  withIconsDropdownCSS,
  withIconsDropdownData
} from '@/components/variant/dropdown';
import {
  simpleModalCSS,
  simpleModalData,
  withFormModalCSS,
  withFormModalData
} from '@/components/variant/modal';
import {
  defaultTabsCSS,
  defaultTabsData,
  pillsTabsCSS,
  pillsTabsData
} from '@/components/variant/tabs';
import {
  simpleBreadcrumbCSS,
  simpleBreadcrumbData,
  withIconsBreadcrumbCSS,
  withIconsBreadcrumbData
} from '@/components/variant/breadcrumb';

const GenericComponentPage = () => {
  const params = useParams();
  const componentId = params.componentId as string;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Get component config dynamically
  const component = genericComponents.find(c => c.id === componentId);
  
  // Get all variants for this component dynamically
  const componentVariants = genericVariants.filter(v => v.componentId === componentId);

  if (!component) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Component Not Found</h1>
          <Link 
            href="/generic-components" 
            className="px-4 py-2 bg-[#5f52ff] text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Generic Components
          </Link>
        </div>
      </div>
    );
  }

  // Dynamic variant CSS and data mapping
  const getVariantConfig = (variantId: string) => {
    switch (componentId) {
      case 'button':
        switch (variantId) {
          case 'primary':
            return { css: primaryButtonCSS, data: primaryButtonData };
          case 'secondary':
            return { css: secondaryButtonCSS, data: secondaryButtonData };
          default:
            return null;
        }
      case 'badge':
        switch (variantId) {
          case 'solid':
            return { css: solidBadgeCSS, data: solidBadgeData };
          case 'outline':
            return { css: outlineBadgeCSS, data: outlineBadgeData };
          default:
            return null;
        }
      case 'alert':
        switch (variantId) {
          case 'success':
            return { css: successAlertCSS, data: successAlertData };
          case 'error':
            return { css: errorAlertCSS, data: errorAlertData };
          default:
            return null;
        }
      case 'avatar':
        switch (variantId) {
          case 'single':
            return { css: singleAvatarCSS, data: singleAvatarData };
          case 'group':
            return { css: groupAvatarCSS, data: groupAvatarData };
          default:
            return null;
        }
      case 'input':
        switch (variantId) {
          case 'text':
            return { css: textInputCSS, data: textInputData };
          case 'textarea':
            return { css: textareaInputCSS, data: textareaInputData };
          default:
            return null;
        }
      case 'dropdown':
        switch (variantId) {
          case 'simple':
            return { css: simpleDropdownCSS, data: simpleDropdownData };
          case 'withIcons':
            return { css: withIconsDropdownCSS, data: withIconsDropdownData };
          default:
            return null;
        }
      case 'modal':
        switch (variantId) {
          case 'simple':
            return { 
              css: simpleModalCSS, 
              data: { 
                isOpen: modalOpen,
                title: simpleModalData.title,
                children: simpleModalData.children,
                footer: simpleModalData.footer,
                onClose: () => setModalOpen(false),
                showCloseButton: simpleModalData.showCloseButton
              } 
            };
          case 'withForm':
            return { 
              css: withFormModalCSS, 
              data: { 
                isOpen: modalOpen,
                title: withFormModalData.title,
                children: withFormModalData.children,
                footer: withFormModalData.footer,
                onClose: () => setModalOpen(false),
                showCloseButton: withFormModalData.showCloseButton
              } 
            };
          default:
            return null;
        }
      case 'tabs':
        switch (variantId) {
          case 'default':
            return { css: defaultTabsCSS, data: defaultTabsData };
          case 'pills':
            return { css: pillsTabsCSS, data: pillsTabsData };
          default:
            return null;
        }
      case 'breadcrumb':
        switch (variantId) {
          case 'simple':
            return { css: simpleBreadcrumbCSS, data: simpleBreadcrumbData };
          case 'withIcons':
            return { css: withIconsBreadcrumbCSS, data: withIconsBreadcrumbData };
          default:
            return null;
        }
      default:
        return null;
    }
  };

  // Get component preview
  const getComponentPreview = (variantId: string) => {
    const variantConfig = getVariantConfig(variantId);
    if (!variantConfig) return null;

    const ComponentMap: Record<string, React.ComponentType<any>> = {
      button: Button,
      badge: Badge,
      alert: Alert,
      avatar: Avatar,
      input: Input,
      toggle: Toggle,
      dropdown: Dropdown,
      modal: Modal,
      tabs: Tabs,
      breadcrumb: Breadcrumb,
    };

    const Component = ComponentMap[componentId];
    if (!Component) return null;

    if (componentId === 'modal') {
      return (
        <>
          <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded">
            Open Modal
          </button>
          <Component css={variantConfig.css} data={variantConfig.data} />
        </>
      );
    }

    return <Component css={variantConfig.css} data={variantConfig.data} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle sidebar"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5f52ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#5f52ff]/20 group-hover:shadow-[#5f52ff]/30 transition-shadow">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white">NUT UI</span>
              </Link>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/component-library" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Components
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/generic-components" className="text-sm font-medium text-gray-900 dark:text-white relative">
                Generic Components
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5f52ff]"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <GenericSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-6">
            <Link 
              href="/generic-components" 
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
            >
              <svg className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-mono text-xs mr-2 opacity-60">&lt;</span>
              Back to Generic Components
            </Link>
          </div>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5f52ff]/10 dark:bg-[#5f52ff]/20 border border-[#5f52ff]/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#5f52ff] animate-pulse"></div>
              <span className="text-xs font-medium text-[#5f52ff] dark:text-[#818cf8]">{component.name}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {component.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {component.description}
            </p>
          </div>

          {componentVariants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentVariants.map((variant, index) => {
                const variantConfig = getVariantConfig(variant.id);
                if (!variantConfig) return null;

                return (
                  <Link
                    key={variant.id}
                    href={`/generic-components/${componentId}/variants/${variant.id}`}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 hover:shadow-xl hover:shadow-[#5f52ff]/10 dark:hover:shadow-[#5f52ff]/20 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5f52ff]/0 via-[#5f52ff]/0 to-[#5f52ff]/0 group-hover:from-[#5f52ff]/5 group-hover:via-[#5f52ff]/0 group-hover:to-[#5f52ff]/5 transition-all duration-300 pointer-events-none"></div>
                    
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5f52ff] via-[#7c3aed] to-[#5f52ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="p-6 relative z-10">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#5f52ff] transition-colors mb-2">
                          {variant.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {variant.description}
                        </p>
                      </div>
                      
                      {/* Live Preview */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-inner p-4 h-[180px]">
                        {/* Preview label */}
                        <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded text-xs font-mono text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50">
                          Preview
                        </div>
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-full max-w-full scale-90">
                            {getComponentPreview(variant.id)}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900/50 dark:to-transparent border-t border-gray-200 dark:border-gray-800 relative">
                      <div className="text-sm font-semibold text-[#5f52ff] flex items-center">
                        <span className="font-mono text-xs mr-2 opacity-60">&gt;</span>
                        View variant
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No variants available for this component.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GenericComponentPage;
