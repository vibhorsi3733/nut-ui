// Example: Using Button component in your application

import { Button } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const buttonCSS = {
    button: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  };

  // Define data object
  const buttonData = {
    label: "Click me",
    onClick: () => console.log("Button clicked"),
    type: "button" as const
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Button css={buttonCSS} data={buttonData} />
    </div>
  );
}

export default MyPage;
