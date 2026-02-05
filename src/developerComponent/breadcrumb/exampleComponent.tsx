// Example: Using Breadcrumb component in your application

import { Breadcrumb } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const breadcrumbCSS = {
    container: "",
    list: "flex items-center space-x-2",
    item: "flex items-center",
    link: "text-sm text-gray-500 hover:text-gray-700",
    separator: "mx-2 text-gray-400",
    icon: "mr-1"
  };

  // Define data object
  const breadcrumbData = {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Current Page" }
    ],
    separator: "slash" as const
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Breadcrumb css={breadcrumbCSS} data={breadcrumbData} />
    </div>
  );
}

export default MyPage;
