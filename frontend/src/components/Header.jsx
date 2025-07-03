import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">MeetGenie</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</Link>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a>
            <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</Link>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a>
              <Link to="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link to="/login" className="text-gray-600 hover:text-purple-600 transition-colors">Login</Link>
                <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-center">Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;