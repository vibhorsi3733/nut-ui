'use client';

import React from 'react';
import Card from '@/components/Card';

interface NewsCardComponentProps {
  css: any;
  data: any;
}

const NewsCardComponent: React.FC<NewsCardComponentProps> = ({ css, data }) => {
  return (
    <div className="relative">
      <Card css={css} data={data} />
    </div>
  );
};

export default NewsCardComponent;
