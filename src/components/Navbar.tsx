import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useCompanyStore from '../store/companyStore';
import useAuthStore from '../store/authStore';

const Navbar: React.FC = () => {
  const { companyInfo } = useCompanyStore();
  const { isLoggedIn, user, logout } = useAuthStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Teams', href: '/teams' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:rotate-6 transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}>
              {companyInfo?.logo || 'ITN'}
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled || !isHomePage 
                  ? 'text-gray-800' 
                  : 'text-white'
              }`}>
                {companyInfo?.name || 'Company'}
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled || !isHomePage 
                  ? 'text-gray-500' 
                  : 'text-gray-200'
              }`}>
                {companyInfo?.tagline || 'Tagline'}
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isScrolled || !isHomePage 
                    ? 'text-gray-600 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {link.name}
                {/* Active indicator */}
                {isActive(link.href) && (
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    isScrolled || !isHomePage ? 'bg-blue-600' : 'bg-white'
                  }`}></span>
                )}
                {/* Hover underline */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isScrolled || !isHomePage ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons - REGISTER SUDAH DIHAPUS */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                    isScrolled || !isHomePage
                      ? 'bg-gray-100 hover:bg-gray-200'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                    <span className={`font-medium ${
                      isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                    }`}>
                      {user?.name?.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled || !isHomePage
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled || !isHomePage
                    ? 'text-gray-600 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 focus:outline-none"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-gray-600' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - REGISTER SUDAH DIHAPUS */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-all duration-500 ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              {companyInfo?.logo || 'ITN'}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{companyInfo?.name}</h2>
            <p className="text-sm text-gray-500">{companyInfo?.tagline}</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-medium transition-colors hover:text-blue-600 ${
                  isActive(link.href) ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>


          <div className="flex flex-col space-y-3 w-64">
            {isLoggedIn ? (
              <>
                <div className="text-center text-gray-600 mb-2">
                  Hi, <span className="font-bold">{user?.name}</span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;