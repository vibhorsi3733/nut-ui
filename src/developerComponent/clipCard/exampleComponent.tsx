// Example: Using ClipCard component in your application

import { ClipCard } from '@/developerComponent/componentCollection';

function MyPage() {
  // Define CSS object with all styling classes
  const clipCardCSS = {
    container: "w-full max-w-md mx-auto cursor-pointer group transition-transform hover:scale-[1.02]",
    imageWrapper: "relative w-full aspect-video rounded-lg overflow-hidden",
    image: "w-full h-full object-cover",
    overlay: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent",
    loginBadge: "absolute top-3 left-3 flex items-center gap-2 bg-purple-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full",
    loginIcon: "w-4 h-4 text-white",
    loginText: "text-white text-xs font-medium",
    playButton: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform",
    bottomOverlay: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4",
    caption: "text-white text-sm font-medium line-clamp-2",
    dateContainer: "flex items-center gap-2 mt-2",
    dateIcon: "w-4 h-4 text-white/80",
    dateText: "text-white/80 text-xs",
    shareButton: "absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors",
    shareIcon: "w-5 h-5 text-white"
  };

  // Define data object with video information
  const clipCardData = {
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    imageAlt: "Video thumbnail",
    loginText: "Login to Watch",
    caption: "Exciting cricket match highlights",
    date: "26 Jan, 2026",
    redirectUrl: "https://example.com/video"
  };

  // Use the component
  // Note: Clicking the card will redirect to the URL specified in redirectUrl
  return (
    <div className="container mx-auto p-4">
      <ClipCard css={clipCardCSS} data={clipCardData} />
    </div>
  );
}

export default MyPage;
