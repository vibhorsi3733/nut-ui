// Example: Using Badge component in your application

import { Badge } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const badgeCSS = {
    badge: "inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
  };

  // Define data object
  const badgeData = {
    label: "Badge",
    count: 5
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Badge css={badgeCSS} data={badgeData} />
    </div>
  );
}

export default MyPage;
