export const groupAvatarCSS = {
  container: "",
  avatar: "relative inline-block h-10 w-10 rounded-full ring-2 ring-white",
  image: "h-full w-full rounded-full object-cover",
  fallback: "flex h-full w-full items-center justify-center rounded-full bg-gray-500 text-white text-sm font-medium",
  group: "flex -space-x-2"
};

export const groupAvatarData = {
  avatars: [
    { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", name: "John Doe" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", name: "Jane Smith" },
    { name: "Bob Johnson" },
    { name: "Alice Williams" }
  ]
};
