'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Define TypeScript interfaces
interface SliderCSS {
  container: string;
  slide: string;
  image: string;
  overlay: string;
  title: string;
  category: string;
  navigation: string;
  prevButton: string;
  nextButton: string;
}

interface SlideData {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  category?: string;
}

interface SliderData {
  slides: SlideData[];
}

interface SliderProps {
  css: SliderCSS;
  data: SliderData;
}

const Slider: React.FC<SliderProps> = ({ css, data }) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 24
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 40
          }
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom'
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {data.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={css.slide}>
              <img 
                src={slide.imageUrl} 
                alt={slide.imageAlt || slide.title} 
                className={css.image}
              />
              <div className={css.overlay}>
                {slide.category && <p className={css.category}>{slide.category}</p>}
                {slide.title && <h3 className={css.title}>{slide.title}</h3>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation - Positioned relative to slider container */}
      <div className={css.navigation}>
        <button 
          className={`${css.prevButton} swiper-button-prev-custom`}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className={`${css.nextButton} swiper-button-next-custom`}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;

// Usage Example:
/*
import Slider from '@/components/user_visible_code/Slider';

const MyComponent = () => {
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

  return (
    <Slider css={sliderCSS} data={sliderData} />
  );
};

export default MyComponent;
*/
