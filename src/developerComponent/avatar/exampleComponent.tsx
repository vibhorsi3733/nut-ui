// Example: Using Avatar component in your application

import { Avatar } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const avatarCSS = {
    container: "",
    avatar: "relative inline-block h-10 w-10 rounded-full ring-2 ring-white",
    image: "h-full w-full rounded-full object-cover",
    fallback: "flex h-full w-full items-center justify-center rounded-full bg-gray-500 text-white text-sm font-medium",
    group: "flex -space-x-2"
  };

  // Define data object
  const avatarData = {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    alt: "User avatar",
    name: "John Doe"
  };

  // Use the component
  return (
    <div className="container mx-auto p-4">
      <Avatar css={avatarCSS} data={avatarData} />
    </div>
  );
}

export default MyPage;
