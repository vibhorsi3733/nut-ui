'use client';

import React from 'react';
import Card from '@/components/Card';

interface PriceCardComponentProps {
  css: typeof import('./priceCardVarient').priceCardVarientCSS;
  data: typeof import('./priceCardVarient').priceCardVarientData;
}

export const PriceCardComponent: React.FC<PriceCardComponentProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {/* Image with Discount Banner */}
      <div className="relative">
        <img
          src={data.imageUrl}
          alt={data.imageAlt || 'Product image'}
          className={css.image}
        />
        {/* Discount Banner */}
        <div className="absolute top-4 right-4 bg-pink-500 text-white font-semibold px-3 py-1 rounded text-sm sm:text-base">
          Discount -30%
        </div>
      </div>

      {/* Title */}
      {data.title && (
        <div className={css.header}>
          <h3 className={css.title}>{data.title}</h3>
        </div>
      )}

      {/* Content (Price) */}
      {data.content && (
        <div className={css.content}>
          {typeof data.content === 'string' ? <p>{data.content}</p> : data.content}
        </div>
      )}

      {/* Footer (Buy Now Button) */}
      {data.footer && (
        <div className={css.footer}>
          {typeof data.footer === 'string' ? <p>{data.footer}</p> : data.footer}
        </div>
      )}
    </div>
  );
};

export default PriceCardComponent;
