import React from 'react';

// Define TypeScript interfaces
interface CardCSS {
  container: string;
  header: string;
  title: string;
  description: string;
  content: string;
  footer: string;
  image: string;
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
  css: CardCSS;
  data: CardData;
}

const Card: React.FC<CardProps> = ({ css, data }) => {
  return (
    <div className={css.container}>
      {data.imageUrl && (
        <img 
          src={data.imageUrl} 
          alt={data.imageAlt || 'Card image'} 
          className={css.image}
        />
      )}
      
      {(data.title || data.description) && (
        <div className={css.header}>
          {data.title && <h3 className={css.title}>{data.title}</h3>}
          {data.description && <p className={css.description}>{data.description}</p>}
        </div>
      )}
      
      {data.content && (
        <div className={css.content}>
          {typeof data.content === 'string' ? <p>{data.content}</p> : data.content}
        </div>
      )}
      
      {data.footer && (
        <div className={css.footer}>
          {typeof data.footer === 'string' ? <p>{data.footer}</p> : data.footer}
        </div>
      )}
    </div>
  );
};

export default Card;

// Usage Example:
// <Card 
//   css={{
//     container: "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200",
//     header: "p-4 sm:p-5 md:p-6 pb-3 sm:pb-4",
//     title: "text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2",
//     description: "text-gray-600 text-xs sm:text-sm",
//     content: "p-4 sm:p-5 md:p-6 pt-2 sm:pt-3",
//     footer: "p-4 sm:p-5 md:p-6 pt-2 sm:pt-3 text-xs sm:text-sm text-[#5f52ff]",
//     image: "w-full h-auto object-cover"
//   }}
//   data={{
//     title: "Card Title",
//     description: "Card description",
//     content: "Main content here",
//     footer: "Footer text",
//     imageUrl: "https://example.com/image.jpg"
//   }}
// />
