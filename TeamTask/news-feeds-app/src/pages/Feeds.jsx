import React, { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiHeart, FiMessageCircle } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';

const Feeds = () => {
  const { news } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // useMemo hook for filtering data
  const filteredNews = useMemo(() => {
    return news.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.headline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [news, searchQuery, activeCategory]);

  const categories = ['All', ...new Set(news.map(item => item.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 px-4 max-w-[1200px] w-full mx-auto pb-12">
        
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 animate-fade-in">
          <div className="relative w-full md:w-96 group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search news..." 
              className="input-field pl-12 bg-dark-surface/50 backdrop-blur-md border-white/5 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            <FiFilter className="text-slate-400 mr-2 shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
                    : 'bg-dark-surface text-slate-300 hover:bg-white/10 border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((post, index) => (
              <div 
                key={post.id} 
                className="glass-panel group overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium border border-white/10">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-primary font-semibold mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 text-white group-hover:text-primary transition-colors">
                    <Link to={`/headlines/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
                    {post.headline}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <span className="flex items-center gap-1.5"><FiHeart className="text-secondary" /> {post.likes}</span>
                      <span className="flex items-center gap-1.5"><FiMessageCircle className="text-blue-400" /> {post.comments.length}</span>
                    </div>
                    <Link to={`/headlines/${post.id}`} className="text-sm text-primary font-medium hover:underline">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-400 animate-fade-in">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No news found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feeds;
