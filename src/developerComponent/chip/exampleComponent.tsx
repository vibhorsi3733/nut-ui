// Example: Using Chip component in your application

import { Chip } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const chipCSS = {
    container: "w-full",
    chip: "inline-flex items-center gap-2 bg-purple-400/30 hover:bg-purple-400/40 px-3 py-1.5 rounded-full transition-colors cursor-pointer",
    text: "text-sm font-medium text-purple-900",
    icon: "w-4 h-4"
  };

  // Define data object with chip information
  const chipData = {
    label: "Popular Search",
    icon: (
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
    )
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Chip css={chipCSS} data={chipData} />
    </div>
  );
}

export default MyPage;
