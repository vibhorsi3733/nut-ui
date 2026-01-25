import React from 'react';

// Define TypeScript interfaces
interface CardStyle {
  container?: string;
  header?: string;
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  image?: string;
}

interface CardData {
  title?: string;
  description?: string;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
}

interface CardProps {
  style?: CardStyle;
  data: CardData;
  className?: string;
}

const Card: React.FC<CardProps> = ({ style = {}, data, className = '' }) => {
  // Default styles for the card components with white background and black text
  const defaultStyles: CardStyle = {
    container: `bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff] ${className}`,
    header: 'p-4 sm:p-5 md:p-6 pb-3 sm:pb-4',
    title: 'text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2',
    description: 'text-gray-600 text-xs sm:text-sm',
    content: 'p-4 sm:p-5 md:p-6 pt-2 sm:pt-3',
    footer: 'p-4 sm:p-5 md:p-6 pt-2 sm:pt-3 text-xs sm:text-sm text-[#5f52ff]',
    image: 'w-full h-auto object-cover',
  };

  // Merge default styles with custom styles
  const mergedStyles = {
    container: `${defaultStyles.container} ${style.container || ''}`,
    header: `${defaultStyles.header} ${style.header || ''}`,
    title: `${defaultStyles.title} ${style.title || ''}`,
    description: `${defaultStyles.description} ${style.description || ''}`,
    content: `${defaultStyles.content} ${style.content || ''}`,
    footer: `${defaultStyles.footer} ${style.footer || ''}`,
    image: `${defaultStyles.image} ${style.image || ''}`,
  };

  return (
    <div className={mergedStyles.container}>
      {data.imageUrl && (
        <img 
          src={data.imageUrl} 
          alt={data.imageAlt || 'Card image'} 
          className={mergedStyles.image}
        />
      )}
      
      {(data.title || data.description) && (
        <div className={mergedStyles.header}>
          {data.title && <h3 className={mergedStyles.title}>{data.title}</h3>}
          {data.description && <p className={mergedStyles.description}>{data.description}</p>}
        </div>
      )}
      
      {data.content && (
        <div className={mergedStyles.content}>
          {typeof data.content === 'string' ? <p>{data.content}</p> : data.content}
        </div>
      )}
      
      {data.footer && (
        <div className={mergedStyles.footer}>
          {typeof data.footer === 'string' ? <p>{data.footer}</p> : data.footer}
        </div>
      )}
    </div>
  );
};

export default Card;