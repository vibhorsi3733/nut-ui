import React from 'react';

// Core Slider Component - Pure component with NO hardcoded CSS or data
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
  return (
    <div className={css.container}>
      {/* Slider content will be rendered by Swiper wrapper */}
      <div className="swiper-wrapper">
        {data.slides.map((slide, index) => (
          <div key={index} className={`swiper-slide ${css.slide}`}>
            {slide.imageUrl && (
              <img 
                src={slide.imageUrl} 
                alt={slide.imageAlt || slide.title} 
                className={css.image}
              />
            )}
            <div className={css.overlay}>
              {slide.title && <h3 className={css.title}>{slide.title}</h3>}
              {slide.category && <p className={css.category}>{slide.category}</p>}
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation */}
      <div className={css.navigation}>
        <button className={css.prevButton} aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className={css.nextButton} aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
