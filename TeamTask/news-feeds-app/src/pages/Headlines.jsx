import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiHeart, FiShare2, FiMessageCircle, FiArrowLeft, FiSend } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';

const Headlines = () => {
  const { id } = useParams();
  const { news, likePost, addComment, user } = useContext(AppContext);
  const [commentText, setCommentText] = useState('');

  const post = news.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2>Article not found.</h2>
      </div>
    );
  }

  const handleLike = () => {
    likePost(post.id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Share feature not supported on this browser. URL copied to clipboard instead!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(post.id, commentText);
    setCommentText('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg">
      <Navbar />
      
      <div className="max-w-4xl w-full mx-auto px-4 pb-20 animate-fade-in">
        
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8">
          <FiArrowLeft /> Back to Feeds
        </Link>

        {/* Article Header */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-dark-surface border border-white/10 text-primary text-sm font-bold rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
            <span>By <strong className="text-slate-200">{post.author}</strong></span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-10 shadow-2xl relative">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-50" />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            {post.content}
          </p>
        </div>

        {/* Action Bar (Like, Share, Comment count) */}
        <div className="flex items-center gap-6 py-6 border-y border-white/10 mb-12">
          <button 
            onClick={handleLike}
            className="flex items-center gap-2 text-slate-300 hover:text-secondary transition-colors group"
          >
            <div className="p-3 bg-dark-surface rounded-full group-hover:bg-secondary/20 transition-colors">
              <FiHeart className="text-xl group-active:scale-75 transition-transform" />
            </div>
            <span className="font-medium text-lg">{post.likes}</span>
          </button>

          <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors group"
          >
            <div className="p-3 bg-dark-surface rounded-full group-hover:bg-primary/20 transition-colors">
              <FiShare2 className="text-xl" />
            </div>
            <span className="font-medium">Share</span>
          </button>
          
          <div className="flex items-center gap-2 text-slate-300 ml-auto">
            <FiMessageCircle className="text-xl text-blue-400" />
            <span className="font-medium">{post.comments.length} Comments</span>
          </div>
        </div>

        {/* Comments Section */}
        <div className="glass-panel p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Discussion</h3>
          
          <form onSubmit={handleAddComment} className="flex gap-4 mb-10">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder={user ? "Add a comment..." : "Login to comment"}
              disabled={!user}
              className="flex-1 input-field"
            />
            <button 
              type="submit" 
              disabled={!user || !commentText.trim()}
              className="btn-primary !py-2 !px-4 flex items-center justify-center disabled:opacity-50"
            >
              <FiSend className="text-xl" />
            </button>
          </form>

          <div className="flex flex-col gap-6">
            {post.comments.length > 0 ? (
              post.comments.map((comment, index) => (
                <div key={index} className="flex gap-4 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
                    {comment.user.charAt(0).toUpperCase()}
                  </div>
                  <div className="bg-dark-surface p-4 rounded-2xl rounded-tl-none border border-white/5 w-full">
                    <h4 className="font-bold text-slate-200 mb-1">{comment.user}</h4>
                    <p className="text-slate-400">{comment.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-400 text-center py-4">No comments yet. Be the first to start the discussion!</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Headlines;
