import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiActivity } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';

const Trending = () => {
  const { news } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sort by likes to get trending
  const trendingNews = [...news].sort((a, b) => b.likes - a.likes).slice(0, 3);

  // Auto-advance banner
  useEffect(() => {
    if (trendingNews.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [trendingNews.length]);

  if (trendingNews.length === 0) return null;

  const currentPost = trendingNews[currentIndex];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 px-4 max-w-[1200px] w-full mx-auto pb-12 flex flex-col justify-center">
        
        <div className="flex items-center gap-3 mb-6 animate-fade-in">
          <div className="p-3 bg-secondary/20 text-secondary rounded-full animate-pulse-glow">
            <FiActivity className="text-xl" />
          </div>
          <h2 className="text-3xl font-bold text-white">Trending Now</h2>
        </div>

        {/* Big Banner Area */}
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group animate-fade-in">
          
          {/* Background Image with animated scale */}
          <div 
            key={currentPost.id}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105 group-hover:scale-110"
            style={{ backgroundImage: `url(${currentPost.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end h-full">
            <div className="max-w-3xl animate-fade-in" key={`content-${currentPost.id}`}>
              <span className="inline-block px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full mb-4 shadow-lg">
                {currentPost.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                {currentPost.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 line-clamp-2 max-w-2xl">
                {currentPost.content}
              </p>
              
              <Link 
                to={`/headlines/${currentPost.id}`}
                className="inline-flex items-center gap-3 bg-white text-dark-bg px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Read Full Story <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-3">
            {trendingNews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-12 h-3 bg-primary shadow-[0_0_10px_rgba(99,102,241,0.8)]' 
                    : 'w-3 h-3 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trending;
