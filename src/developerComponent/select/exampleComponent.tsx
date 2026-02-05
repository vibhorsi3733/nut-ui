// Example: Using Select component in your application

import { Select } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const selectCSS = {
    container: "w-full",
    label: "block text-sm font-medium text-gray-700 mb-1",
    select: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    option: "",
    helperText: "mt-1 text-sm text-gray-500",
    errorText: "mt-1 text-sm text-red-600"
  };

  // Define data object
  const selectData = {
    label: "Country",
    placeholder: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" }
    ],
    required: true
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Select css={selectCSS} data={selectData} />
    </div>
  );
}

export default MyPage;
