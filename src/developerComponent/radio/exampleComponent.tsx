// Example: Using Radio component in your application

import { Radio } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const radioCSS = {
    container: "flex items-center",
    radio: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500",
    label: "ml-2 text-sm text-gray-700",
    helperText: "mt-1 text-sm text-gray-500",
    errorText: "mt-1 text-sm text-red-600",
    group: "space-y-2",
    item: "flex items-center"
  };

  // Define data object
  const radioData = {
    name: "plan",
    label: "Basic Plan",
    value: "basic"
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Radio css={radioCSS} data={radioData} />
    </div>
  );
}

export default MyPage;
