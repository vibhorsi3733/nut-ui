// Example: Using Checkbox component in your application

import { Checkbox } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const checkboxCSS = {
    container: "flex items-center",
    checkbox: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500",
    label: "ml-2 text-sm text-gray-700",
    helperText: "mt-1 text-sm text-gray-500",
    errorText: "mt-1 text-sm text-red-600",
    group: "space-y-2",
    item: "flex items-center"
  };

  // Define data object
  const checkboxData = {
    label: "I agree to the terms and conditions",
    checked: false,
    value: "agree"
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Checkbox css={checkboxCSS} data={checkboxData} />
    </div>
  );
}

export default MyPage;
