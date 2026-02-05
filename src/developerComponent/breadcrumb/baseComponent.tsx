import React from 'react';

interface BreadcrumbCSS {
  container: string;
  list: string;
  item: string;
  link: string;
  separator: string;
  icon: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbData {
  items: BreadcrumbItem[];
  separator?: 'slash' | 'chevron' | 'dot';
}

interface BreadcrumbProps {
  css: BreadcrumbCSS;
  data: BreadcrumbData;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ css, data }) => {
  const getSeparator = () => {
    switch (data.separator) {
      case 'chevron':
        return (
          <svg className={css.separator} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        );
      case 'dot':
        return <span className={css.separator}>•</span>;
      default:
        return <span className={css.separator}>/</span>;
    }
  };

  return (
    <nav className={css.container}>
      <ol className={css.list}>
        {data.items.map((item, index) => (
          <li key={index} className={css.item}>
            {index > 0 && getSeparator()}
            {item.href ? (
              <a href={item.href} className={css.link}>
                {item.icon && <span className={css.icon}>{item.icon}</span>}
                {item.label}
              </a>
            ) : (
              <span className={css.link}>
                {item.icon && <span className={css.icon}>{item.icon}</span>}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
