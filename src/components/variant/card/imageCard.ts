// Image Card Variant Configuration
export const imageCardCSS = {
  container: "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#5f52ff]",
  header: "p-4 sm:p-5 md:p-6 pb-3 sm:pb-4",
  title: "text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2",
  description: "text-black text-xs sm:text-sm",
  content: "p-4 sm:p-5 md:p-6 pt-2 sm:pt-3",
  footer: "p-4 sm:p-5 md:p-6 pt-2 sm:pt-3 text-xs sm:text-sm text-[#5f52ff]",
  image: "w-full h-auto object-cover"
};

export const imageCardData = {
  title: "Card with Image",
  description: "Card that includes an image",
  content: "This card includes an image at the top.",
  imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
  imageAlt: "Card image"
};
