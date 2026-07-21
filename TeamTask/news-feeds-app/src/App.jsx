import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Feeds from './pages/Feeds';
import Trending from './pages/Trending';
import Headlines from './pages/Headlines';
import Register from './pages/Register';
import './index.css';
import Navbar from './components/Navbar';

// A simple ProtectedRoute wrapper
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Feeds />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/trending" 
          element={
            <ProtectedRoute>
              <Trending />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/headlines/:id" 
          element={
            <ProtectedRoute>
              <Headlines />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
