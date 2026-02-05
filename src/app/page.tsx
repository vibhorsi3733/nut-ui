'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import { components } from '@/config/components';
import { variants } from '@/config/variants';
import { imageCardCSS, imageCardData } from '@/components/variant/card';
import { newsSliderCSS, newsSliderData, NewsSliderComponent } from '@/components/variant/slider';
import { scoreBoardCSS, scoreBoardData } from '@/components/variant/table';
import { popularSearchesCSS, popularSearchesData, PopularSearchesComponent } from '@/components/variant/chip';
import { videoCardCSS, videoCardData, VideoCardComponent } from '@/components/variant/clipCard';
import { basicMapCSS, basicMapData, BasicMapComponent } from '@/components/variant/map';

const HomePage = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const getComponentPreview = (componentId: string) => {
    switch (componentId) {
      case 'card':
        return <Card css={imageCardCSS as any} data={imageCardData as any} />;
      case 'slider':
        return <NewsSliderComponent css={newsSliderCSS as any} data={newsSliderData as any} />;
      case 'table':
        return null; // Table preview is complex
      case 'chip':
        return <PopularSearchesComponent css={popularSearchesCSS as any} data={popularSearchesData as any} />;
      case 'clipCard':
        return <VideoCardComponent css={videoCardCSS as any} data={videoCardData as any} />;
      case 'map':
        return <BasicMapComponent css={basicMapCSS as any} data={basicMapData as any} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#5f52ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#5f52ff]/20 group-hover:shadow-[#5f52ff]/30 transition-shadow">
                <span className="text-white font-bold text-xs sm:text-sm">N</span>
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white">NUT UI</span>
            </Link>
            <nav className="flex items-center space-x-3 sm:space-x-6">
              <Link href="/component-library" className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Components
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/generic-components" className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Generic Components
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a href="#" className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                Docs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group">
                GitHub
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5f52ff] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5f52ff]/10 dark:bg-[#5f52ff]/20 border border-[#5f52ff]/20 mb-6 sm:mb-8">
              <div className="w-2 h-2 rounded-full bg-[#5f52ff] animate-pulse"></div>
              <span className="text-xs font-mono font-medium text-[#5f52ff] dark:text-[#818cf8]">v1.0.0 • TypeScript • React</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 leading-[1.1]">
              Build Modern UIs
              <br />
              <span className="bg-gradient-to-r from-[#5f52ff] via-[#7c3aed] to-[#5f52ff] bg-clip-text text-transparent">
                Faster
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              A production-ready component library built with <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">React</span>, <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">TypeScript</span>, and <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">Tailwind CSS</span>. 
              Copy, customize, and ship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/component-library"
                className="group relative px-6 py-3 bg-gradient-to-r from-[#5f52ff] to-[#7c3aed] text-white rounded-lg hover:from-[#6d5fff] hover:to-[#8b4efd] transition-all font-semibold text-sm sm:text-base shadow-lg shadow-[#5f52ff]/20 hover:shadow-[#5f52ff]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Browse Components
              </Link>
              <a 
                href="https://github.com/vibhorsi3733/nut-ui" 
                className="px-6 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-semibold text-sm sm:text-base hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Code Example */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-900 dark:bg-gray-950 rounded-xl border border-gray-800 dark:border-gray-700 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-400 ml-2">example.tsx</span>
              </div>
              {/* Code Content */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono text-gray-300">
                  <code>
                    <span className="text-purple-400">import</span> <span className="text-blue-400">{'{'}</span> Card <span className="text-blue-400">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@nut-ui/components'</span>{'\n'}
                    <span className="text-purple-400">import</span> <span className="text-blue-400">{'{'}</span> cardCSS, cardData <span className="text-blue-400">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@nut-ui/variants'</span>{'\n\n'}
                    <span className="text-purple-400">function</span> <span className="text-yellow-400">MyComponent</span><span className="text-gray-500">()</span> <span className="text-blue-400">{'{'}</span>{'\n'}
                    {'  '}<span className="text-purple-400">return</span> <span className="text-gray-500">(</span>{'\n'}
                    {'    '}<span className="text-gray-500">&lt;</span><span className="text-yellow-400">Card</span>{'\n'}
                    {'      '}<span className="text-purple-400">css</span><span className="text-gray-500">=</span><span className="text-blue-400">{'{'}</span>cardCSS<span className="text-blue-400">{'}'}</span>{'\n'}
                    {'      '}<span className="text-purple-400">data</span><span className="text-gray-500">=</span><span className="text-blue-400">{'{'}</span>cardData<span className="text-blue-400">{'}'}</span>{'\n'}
                    {'    '}<span className="text-gray-500">/&gt;</span>{'\n'}
                    {'  '}<span className="text-gray-500">)</span>{'\n'}
                    <span className="text-blue-400">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {components.length}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                Components
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {variants.length}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                Variants
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                100%
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                TypeScript
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                0
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                Dependencies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Component Library
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Production-ready components with TypeScript support and full customization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {components.slice(0, 6).map((component, index) => {
              const componentVariants = variants.filter(v => v.componentId === component.id);
              const preview = getComponentPreview(component.id);
              const isHovered = hoveredComponent === component.id;

              return (
                <Link
                  key={component.id}
                  href={`/component-library/${component.id}`}
                  onMouseEnter={() => setHoveredComponent(component.id)}
                  onMouseLeave={() => setHoveredComponent(null)}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 hover:shadow-xl hover:shadow-[#5f52ff]/10 dark:hover:shadow-[#5f52ff]/20 hover:-translate-y-1"
                >
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5f52ff] via-[#7c3aed] to-[#5f52ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#5f52ff] transition-colors mb-1">
                          {component.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {component.description}
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 flex-shrink-0">
                        {componentVariants.length}
                      </span>
                    </div>
                    
                    {/* Preview */}
                    {preview && (
                      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden h-32 flex items-center justify-center p-2">
                        <div className="w-full max-w-full scale-75 origin-center">
                          {preview}
                        </div>
                      </div>
                    )}
                    
                    {/* Tech Stack */}
                    <div className="mt-4 flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        React
                      </span>
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        TS
                      </span>
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/component-library"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-semibold text-sm sm:text-base"
            >
              View All Components
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Built for Developers
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to build production-ready interfaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5f52ff]/10 to-[#7c3aed]/10 dark:from-[#5f52ff]/20 dark:to-[#7c3aed]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5f52ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Copy & Paste</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                No npm installs. Copy the code directly into your project and start building immediately.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5f52ff]/10 to-[#7c3aed]/10 dark:from-[#5f52ff]/20 dark:to-[#7c3aed]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5f52ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">TypeScript First</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Full TypeScript support with comprehensive type definitions and IntelliSense.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5f52ff]/10 to-[#7c3aed]/10 dark:from-[#5f52ff]/20 dark:to-[#7c3aed]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5f52ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Fully Customizable</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Built with Tailwind CSS. Modify styles, props, and behavior to match your design system.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5f52ff]/10 to-[#7c3aed]/10 dark:from-[#5f52ff]/20 dark:to-[#7c3aed]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5f52ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Zero Dependencies</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                No external dependencies. Just React, TypeScript, and Tailwind CSS. Lightweight and fast.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5f52ff]/10 to-[#7c3aed]/10 dark:from-[#5f52ff]/20 dark:to-[#7c3aed]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5f52ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Accessible</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Built with accessibility in mind. WCAG compliant components that work for everyone.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-[#5f52ff]/50 dark:hover:border-[#5f52ff]/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5f52ff]/10 to-[#7c3aed]/10 dark:from-[#5f52ff]/20 dark:to-[#7c3aed]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#5f52ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Production Ready</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Battle-tested components used in production. Reliable, performant, and well-documented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 sm:py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#5f52ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#5f52ff]/20">
                <span className="text-white font-bold text-xs sm:text-sm">N</span>
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white">NUT UI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NUT UI. Built with React, TypeScript, and Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
