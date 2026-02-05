// Example: Using Alert component in your application

import { Alert } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const alertCSS = {
    container: "rounded-md bg-green-50 p-4 flex items-start",
    icon: "flex-shrink-0",
    title: "text-sm font-medium text-green-800",
    message: "text-sm text-green-700 mt-1",
    closeButton: "ml-auto flex-shrink-0 rounded-md text-green-400 hover:text-green-500"
  };

  // Define data object
  const alertData = {
    title: "Success",
    message: "Your changes have been saved.",
    showClose: true,
    onClose: () => console.log("Alert closed")
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Alert css={alertCSS} data={alertData} />
    </div>
  );
}

export default MyPage;
