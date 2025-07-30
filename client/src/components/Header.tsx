import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { title: 'Доставка', href: '#delivery', icon: '🚚' },
    { title: 'Автомобили', href: '#cars', icon: '🚗' },
    { title: 'О компании', href: '#about', icon: 'ℹ️' },
    { title: 'Растаможка', href: '#customs', icon: '📋' },
    { title: 'Гарантии', href: '#guarantees', icon: '🛡️' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://nfsauto.by/wp-content/uploads/2024/10/cropped-logonfs.png" 
              alt="NFS Auto" 
              className="h-10 w-auto"
            />
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <Phone className="w-5 h-5" />
              <a href="tel:+375447550011" className="text-lg font-bold hover:text-blue-700 transition-colors">
                +375 (44) 755 00 11
              </a>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors">
              Обратный звонок
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Main Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t md:border-t-0 bg-white md:bg-transparent`}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-4 md:p-0 md:pb-4">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex flex-col items-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 text-center">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;