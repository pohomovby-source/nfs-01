import React, { useState, useEffect } from 'react';
import { Car, Search, Phone, Menu, X, ChevronDown } from 'lucide-react';

interface SearchResult {
  id: number;
  name: string;
  type: string;
  year: number;
  price: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const mockSearchResults: SearchResult[] = [
    { id: 1, name: 'Toyota Camry', type: 'Седан', year: 2022, price: '45 000' },
    { id: 2, name: 'BMW X5', type: 'Кроссовер', year: 2021, price: '85 000' },
    { id: 3, name: 'Mercedes C-Class', type: 'Седан', year: 2023, price: '65 000' },
    { id: 4, name: 'Audi Q7', type: 'Внедорожник', year: 2022, price: '95 000' },
  ];

  const categories = {
    'Седаны': ['Toyota Camry', 'BMW 3 Series', 'Mercedes C-Class', 'Audi A4'],
    'Кроссоверы': ['BMW X5', 'Mercedes GLE', 'Audi Q7', 'Toyota RAV4'],
    'Внедорожники': ['Land Rover Defender', 'Jeep Wrangler', 'Toyota Land Cruiser'],
    'Спорткары': ['BMW M3', 'Mercedes AMG', 'Audi RS', 'Porsche 911'],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = mockSearchResults.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              NFS Auto
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}>
                  <span>{category}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu */}
                {activeCategory === category && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-2">
                      {categories[category].map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск автомобилей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-4 animate-in slide-in-from-top-2 duration-200">
                <div className="space-y-3">
                  {searchResults.map((car) => (
                    <div key={car.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <div>
                        <div className="font-semibold text-gray-900">{car.name}</div>
                        <div className="text-sm text-gray-500">{car.type} • {car.year}</div>
                      </div>
                      <div className="text-blue-600 font-semibold">${car.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+375291234567"
              className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+375 (29) 123-45-67</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="p-4 space-y-4">
              {Object.keys(categories).map((category) => (
                <div key={category} className="space-y-2">
                  <div className="font-semibold text-gray-900 px-3 py-2">{category}</div>
                  {categories[category].map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-6 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="tel:+375291234567"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+375 (29) 123-45-67</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;