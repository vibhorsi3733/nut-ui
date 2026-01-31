// Example: Using Slider component in your application

// Step 1: Install Swiper (if not already installed)
// npm install swiper

// Step 2: Import the component and Swiper dependencies
import { Slider } from '@/developerComponent/componentCollection';
import 'swiper/css';
import 'swiper/css/navigation';

function MyPage() {
  // Step 3: Define CSS object with all styling classes
  const sliderCSS = {
    container: "relative w-full",
    slide: "relative overflow-hidden rounded-xl h-[400px] sm:h-[500px] md:h-[600px]",
    image: "w-full h-full object-cover",
    overlay: "absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent",
    title: "text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2",
    category: "text-white/80 text-xs sm:text-sm uppercase tracking-wider",
    navigation: "absolute bottom-4 right-4 z-10 flex gap-2",
    prevButton: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300",
    nextButton: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
  };

  // Step 4: Define data object with slides array
  const sliderData = {
    slides: [
      {
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        imageAlt: "Cricket match",
        title: "Vaibhav Sooryavanshi's knock steadies India in clash against Bangladesh at U19 World Cup 2026",
        category: "News"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        imageAlt: "Cricket player",
        title: "Ravi Bishnoi leads India to victory",
        category: "News"
      }
    ]
  };

  // Step 5: Use the component
  return (
    <div className="container mx-auto p-4">
      <Slider css={sliderCSS} data={sliderData} />
    </div>
  );
}

export default MyPage;
