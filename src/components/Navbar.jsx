import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const analyticsSubItems = [
	{ name: 'Generative & Agentic AI', path: '/analytics/GenerativeAI' },
    { name: 'Healthcare Analytics', path: '/analytics/healthcare' },
    { name: 'Supply Chain Analytics', path: '/analytics/supply-chain' },
    { name: 'Automotive Analytics', path: '/analytics/automotive' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3" aria-label="AdMyDa Analytics Home">
			<img
				src="/admyda-logo.png"
				alt="AdMyDa Analytics logo"
				className="h-16 w-auto md:h-16"
				loading="eager"
				draggable="false"
			  />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                AdMyDa Analytics
              </motion.div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  location.pathname.startsWith('/analytics')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onMouseEnter={() => setAnalyticsOpen(true)}
                onMouseLeave={() => setAnalyticsOpen(false)}
              >
                Analytics
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {analyticsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                  onMouseEnter={() => setAnalyticsOpen(true)}
                  onMouseLeave={() => setAnalyticsOpen(false)}
                >
                  <div className="py-1">
                    <Link
                      to="/analytics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Analytics Overview
                    </Link>
                    {analyticsSubItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <Link
              to="/training"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/training')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Training
            </Link>
			
			<Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>

            <Link to="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/analytics"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Analytics
              </Link>
              {analyticsSubItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-6 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/training"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Training
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;