import React from 'react';

interface BadgeCSS {
  badge: string;
}

interface BadgeData {
  label: string;
  count?: number;
}

interface BadgeProps {
  css: BadgeCSS;
  data: BadgeData;
}

const Badge: React.FC<BadgeProps> = ({ css, data }) => {
  return (
    <span className={css.badge}>
      {data.label}
      {data.count !== undefined && data.count > 0 && (
        <span className="ml-1.5 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium">
          {data.count}
        </span>
      )}
    </span>
  );
};

export default Badge;
