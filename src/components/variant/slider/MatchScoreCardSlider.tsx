'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Match Score Card Slider Variant Configuration
export const matchScoreCardSliderCSS = {
  container: "relative w-full",
  slide: "relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/90 via-purple-800/90 to-blue-900/90 backdrop-blur-sm border border-purple-700/50 p-3 sm:p-4 md:p-6 lg:p-8 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex flex-col",
  image: "w-full h-full object-cover",
  overlay: "",
  title: "",
  category: "",
  navigation: "absolute top-1/2 -translate-y-1/2 z-30",
  prevButton: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-pink-500 hover:bg-pink-50 flex items-center justify-center text-gray-800 transition-all duration-300 cursor-pointer shadow-lg -left-1 sm:-left-2 md:-left-4 lg:-left-6",
  nextButton: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-pink-500 hover:bg-pink-50 flex items-center justify-center text-gray-800 transition-all duration-300 cursor-pointer shadow-lg -right-1 sm:-right-2 md:-right-4 lg:-right-6"
};

export interface MatchScoreData {
  status: string;
  statusColor: string;
  league: string;
  matchType: string;
  date: string;
  time: string;
  team1: {
    name: string;
    logo: string;
    score: string;
    overs: string;
  };
  team2: {
    name: string;
    logo: string;
    score: string;
    overs: string;
  };
  summary: string;
  buttonText: string;
}

export const matchScoreCardSliderData = {
  slides: [
    {
      status: "Match Ended",
      statusColor: "bg-red-500",
      league: "Indian Premier League, 2025",
      matchType: "Final",
      date: "JUN 03, 2025",
      time: "19:30 (IST)",
      team1: {
        name: "Royal Challengers Bengaluru",
        logo: "https://via.placeholder.com/80/DC143C/FFFFFF?text=RCB",
        score: "190/9",
        overs: "(20.0)"
      },
      team2: {
        name: "Punjab Kings",
        logo: "https://via.placeholder.com/80/ED1B24/FFFFFF?text=PK",
        score: "184/7",
        overs: "(20.0)"
      },
      summary: "Royal Challengers Bengaluru beat Punjab Kings by 6 runs",
      buttonText: "MATCHCENTRE"
    },
    {
      status: "Match Ended",
      statusColor: "bg-red-500",
      league: "Indian Premier League, 2025",
      matchType: "Qualifier 2",
      date: "JUN 01, 2025",
      time: "19:30 (IST)",
      team1: {
        name: "Gujarat Titans",
        logo: "https://via.placeholder.com/80/1E3A8A/FFFFFF?text=GT",
        score: "208/6",
        overs: "(20.0)"
      },
      team2: {
        name: "Mumbai Indians",
        logo: "https://via.placeholder.com/80/004BA0/FFFFFF?text=MI",
        score: "203/6",
        overs: "(20.0)"
      },
      summary: "Gujarat Titans beat Mumbai Indians by 5 runs",
      buttonText: "MATCHCENTRE"
    },
    {
      status: "Live",
      statusColor: "bg-green-500",
      league: "Indian Premier League, 2025",
      matchType: "Qualifier 1",
      date: "MAY 30, 2025",
      time: "19:30 (IST)",
      team1: {
        name: "Chennai Super Kings",
        logo: "https://via.placeholder.com/80/FFFF00/000000?text=CSK",
        score: "175/8",
        overs: "(18.2)"
      },
      team2: {
        name: "Kolkata Knight Riders",
        logo: "https://via.placeholder.com/80/3A225D/FFFFFF?text=KKR",
        score: "142/5",
        overs: "(15.0)"
      },
      summary: "Chennai Super Kings need 34 runs in 30 balls",
      buttonText: "MATCHCENTRE"
    }
  ] as MatchScoreData[]
};

interface MatchScoreCardSliderProps {
  css: typeof matchScoreCardSliderCSS;
  data: typeof matchScoreCardSliderData;
}

export const MatchScoreCardSliderComponent: React.FC<MatchScoreCardSliderProps> = ({ css, data }) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <div className="w-full relative max-w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={1.05}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.1,
            spaceBetween: 16
          },
          768: {
            slidesPerView: 1.15,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 24
          }
        }}
        navigation={{
          prevEl: '.swiper-button-prev-match-score',
          nextEl: '.swiper-button-next-match-score'
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
      >
        {data.slides.map((match, index) => (
          <SwiperSlide key={index}>
            <div className={css.slide}>
              {/* Status Badge */}
              <div className="mb-3 sm:mb-4">
                <span className={`${match.statusColor} text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full inline-block`}>
                  {match.status}
                </span>
              </div>

              {/* League and Match Type */}
              <div className="mb-2">
                <p className="text-white/90 text-xs sm:text-sm font-medium line-clamp-1">{match.league}</p>
                <p className="text-white/70 text-xs mt-1">{match.matchType}</p>
              </div>

              {/* Date and Time */}
              <div className="mb-4 sm:mb-6">
                <p className="text-white/80 text-xs">
                  {match.date} • {match.time}
                </p>
              </div>

              {/* Teams and Scores */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-4">
                {/* Team 1 */}
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white p-1.5 sm:p-2 mb-1 sm:mb-2 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={match.team1.logo} 
                      alt={match.team1.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white text-[10px] sm:text-xs md:text-sm font-medium text-center mb-1 line-clamp-2 leading-tight">{match.team1.name}</p>
                  <p className="text-white text-base sm:text-lg md:text-xl font-bold">{match.team1.score}</p>
                  <p className="text-white/70 text-[10px] sm:text-xs">{match.team1.overs}</p>
                </div>

                {/* VS */}
                <div className="mx-2 sm:mx-4 md:mx-6 flex-shrink-0">
                  <span className="text-white/60 text-base sm:text-lg md:text-xl font-bold">VS</span>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white p-1.5 sm:p-2 mb-1 sm:mb-2 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={match.team2.logo} 
                      alt={match.team2.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-white text-[10px] sm:text-xs md:text-sm font-medium text-center mb-1 line-clamp-2 leading-tight">{match.team2.name}</p>
                  <p className="text-white text-base sm:text-lg md:text-xl font-bold">{match.team2.score}</p>
                  <p className="text-white/70 text-[10px] sm:text-xs">{match.team2.overs}</p>
                </div>
              </div>

              {/* Match Summary */}
              <div className="mb-4 sm:mb-6">
                <p className="text-white/90 text-xs sm:text-sm md:text-base text-center line-clamp-2">{match.summary}</p>
              </div>

              {/* Match Centre Button */}
              <div className="mt-auto">
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-xs sm:text-sm font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300">
                  {match.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation - Positioned on sides */}
      <button 
        className={`${css.prevButton} ${css.navigation} swiper-button-prev-match-score`}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className={`${css.nextButton} ${css.navigation} swiper-button-next-match-score`}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
