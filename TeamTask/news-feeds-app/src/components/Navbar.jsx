import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHome, FiTrendingUp, FiLogOut, FiUser } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="sticky top-0 z-50 glass-panel !rounded-none !border-x-0 !border-t-0 px-6 py-4 flex justify-between items-center mb-8">
      <Link to="/" className="text-2xl font-bold text-gradient flex items-center gap-2">
        <FiTrendingUp className="text-primary" /> NewsFeed
      </Link>
      
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 text-blue-950 hover:text-blue-950 transition-colors">
          <FiHome /> Feeds
        </Link>
        <Link to="/trending" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
          <FiTrendingUp /> Trending Banner
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-400 bg-dark-bg px-3 py-1.5 rounded-full border border-white/5">
          <FiUser className="text-primary" /> {user.email.split('@')[0]}
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-slate-300 hover:text-secondary transition-colors text-sm"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
