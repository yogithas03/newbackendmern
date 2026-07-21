import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login delay
    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Decorative background elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] z-0 animate-float"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] z-0 animate-float" style={{ animationDelay: '-5s' }}></div>

      <div className="glass-panel w-full max-w-[420px] p-12 z-10 flex flex-col gap-8 animate-fade-in mx-4">
        <div className="text-center">
          <h1 className="text-gradient text-4xl font-bold mb-2">NewsFeed</h1>
          <p className="text-slate-400 text-sm">Welcome back! Stay updated with the latest news.</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="relative flex items-center group">
            <FiMail className="absolute left-5 text-slate-400 text-lg transition-colors group-focus-within:text-primary" />
            <input 
              type="email" 
              className="input-field pl-12" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative flex items-center group">
            <FiLock className="absolute left-5 text-slate-400 text-lg transition-colors group-focus-within:text-primary" />
            <input 
              type="password" 
              className="input-field pl-12" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm mt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-400">
              <input type="checkbox" className="w-4 h-4 accent-primary cursor-pointer" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary font-medium hover:text-primary-hover transition-colors">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="btn-primary flex justify-center items-center gap-2 mt-4 h-12 w-full group"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Sign In <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <div className="text-center text-sm text-slate-400 mt-2">
          <p>Don't have an account? <Link to="/register" className="text-secondary font-semibold hover:opacity-80 transition-opacity">Create one</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
