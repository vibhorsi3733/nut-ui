// Example: Using Card component in your application

import { Card } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const cardCSS = {
    container: "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff]",
    header: "p-4 sm:p-5 md:p-6 pb-3 sm:pb-4",
    title: "text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2",
    description: "text-gray-600 text-xs sm:text-sm",
    content: "p-4 sm:p-5 md:p-6 pt-2 sm:pt-3",
    footer: "p-4 sm:p-5 md:p-6 pt-2 sm:pt-3 text-xs sm:text-sm text-[#5f52ff]",
    image: "w-full h-auto object-cover"
  };

  // Define data object with content
  const cardData = {
    title: "Card Title",
    description: "Card description",
    content: "Main content here",
    footer: "Footer text",
    imageUrl: "https://example.com/image.jpg",
    imageAlt: "Card image"
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Card css={cardCSS} data={cardData} />
    </div>
  );
}

export default MyPage;
