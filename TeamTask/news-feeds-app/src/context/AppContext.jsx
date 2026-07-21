import React, { createContext, useState, useEffect } from 'react';
import { newsData as initialNews } from '../data/newsData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [news, setNews] = useState(() => {
    const storedNews = localStorage.getItem('newsData');
    return storedNews ? JSON.parse(storedNews) : initialNews;
  });
  
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('userData');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  useEffect(() => {
    if (!localStorage.getItem('newsData')) {
      localStorage.setItem('newsData', JSON.stringify(initialNews));
    }
  }, []);

  const login = (email, password) => {
    const userData = { email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isAuthenticated');
    setUser(null);
  };

  const likePost = (id) => {
    const updatedNews = news.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setNews(updatedNews);
    localStorage.setItem('newsData', JSON.stringify(updatedNews));
  };

  const addComment = (id, commentText) => {
    if (!user) return;
    const updatedNews = news.map(post => 
      post.id === id 
        ? { ...post, comments: [...post.comments, { user: user.email.split('@')[0], text: commentText }] }
        : post
    );
    setNews(updatedNews);
    localStorage.setItem('newsData', JSON.stringify(updatedNews));
  };

  return (
    <AppContext.Provider value={{ news, user, login, logout, likePost, addComment }}>
      {children}
    </AppContext.Provider>
  );
};
