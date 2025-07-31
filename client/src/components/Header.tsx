import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { 
  Phone, Search, Menu, X, ChevronDown, Car as CarIcon, Truck, Ship, Building, 
  Grid3X3, Info, Package, MapPin, Mail, Clock, Heart, Star,
  FileText, HelpCircle, MessageCircle, Shield, Award, Zap
} from 'lucide-react';
import type { Car } from '@shared/schema';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [popularCars, setPopularCars] = useState<Car[]>([]);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Fetch popular cars for mega menu
    const fetchPopularCars = async () => {
      try {
        const response = await fetch('/api/cars/popular');
        if (response.ok) {
          const data = await response.json();
          setPopularCars(data.cars);
        }
      } catch (error) {
        console.error('Error fetching popular cars:', error);
      }
    };

    fetchPopularCars();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const catalogMenuItems = [
    {
      category: 'Популярные марки',
      icon: <Star className="w-4 h-4" />,
      items: [
        { name: 'Toyota', count: 30860, url: '#', popular: true },
        { name: 'BMW', count: 30139, url: '#', popular: true },
        { name: 'Mercedes-Benz', count: 37307, url: '#', popular: true },
        { name: 'Audi', count: 25000, url: '#', popular: true },
        { name: 'Honda', count: 22000, url: '#', popular: true },
        { name: 'Ford', count: 18000, url: '#', popular: true },
        { name: 'Volkswagen', count: 15000, url: '#', popular: true },
        { name: 'Lexus', count: 12000, url: '#', popular: true }
      ]
    },
    {
      category: 'Премиум сегмент',
      icon: <Award className="w-4 h-4" />,
      items: [
        { name: 'Porsche', count: 5500, url: '#' },
        { name: 'Ferrari', count: 865, url: '#' },
        { name: 'Lamborghini', count: 420, url: '#' },
        { name: 'Bentley', count: 511, url: '#' },
        { name: 'Rolls-Royce', count: 180, url: '#' },
        { name: 'McLaren', count: 95, url: '#' },
        { name: 'Aston Martin', count: 220, url: '#' },
        { name: 'Maserati', count: 340, url: '#' }
      ]
    },
    {
      category: 'Американские бренды',
      icon: <Zap className="w-4 h-4" />,
      items: [
        { name: 'Chevrolet', count: 32994, url: '#' },
        { name: 'Ford', count: 29000, url: '#' },
        { name: 'Dodge', count: 20462, url: '#' },
        { name: 'Cadillac', count: 15947, url: '#' },
        { name: 'Jeep', count: 18500, url: '#' },
        { name: 'Tesla', count: 8900, url: '#' },
        { name: 'Lincoln', count: 4200, url: '#' },
        { name: 'Chrysler', count: 3800, url: '#' }
      ]
    },
    {
      category: 'Японские марки',
      icon: <CarIcon className="w-4 h-4" />,
      items: [
        { name: 'Toyota', count: 30860, url: '#' },
        { name: 'Honda', count: 25000, url: '#' },
        { name: 'Nissan', count: 22000, url: '#' },
        { name: 'Mazda', count: 15000, url: '#' },
        { name: 'Subaru', count: 12000, url: '#' },
        { name: 'Mitsubishi', count: 8500, url: '#' },
        { name: 'Lexus', count: 12000, url: '#' },
        { name: 'Infiniti', count: 6500, url: '#' }
      ]
    },
    {
      category: 'Европейские марки',
      icon: <Shield className="w-4 h-4" />,
      items: [
        { name: 'BMW', count: 52373, url: '#' },
        { name: 'Mercedes-Benz', count: 45000, url: '#' },
        { name: 'Audi', count: 37307, url: '#' },
        { name: 'Volkswagen', count: 28000, url: '#' },
        { name: 'Volvo', count: 8500, url: '#' },
        { name: 'MINI', count: 5200, url: '#' },
        { name: 'Jaguar', count: 3400, url: '#' },
        { name: 'Land Rover', count: 4800, url: '#' }
      ]
    }
  ];

  const deliveryMenuItems = [
    {
      title: 'Морская доставка',
      description: 'Контейнерная доставка из портов США',
      icon: <Ship className="w-6 h-6" />,
      url: '#delivery',
      highlight: true
    },
    {
      title: 'Автомобильная доставка',
      description: 'Наземная логистика по территории США',
      icon: <Truck className="w-6 h-6" />,
      url: '#auto-delivery'
    },
    {
      title: 'Таможенное оформление',
      description: 'Полное сопровождение растаможки',
      icon: <Building className="w-6 h-6" />,
      url: '#customs'
    },
    {
      title: 'Страхование груза',
      description: 'Защита автомобиля в пути',
      icon: <Shield className="w-6 h-6" />,
      url: '#insurance'
    },
    {
      title: 'Отслеживание груза',
      description: 'Онлайн мониторинг доставки',
      icon: <Package className="w-6 h-6" />,
      url: '#tracking'
    }
  ];

  const informationMenuItems = [
    { name: 'О компании', icon: <Info className="w-4 h-4" />, url: '#about' },
    { name: 'Отзывы клиентов', icon: <MessageCircle className="w-4 h-4" />, url: '#reviews' },
    { name: 'Часто задаваемые вопросы', icon: <HelpCircle className="w-4 h-4" />, url: '#faq' },
    { name: 'Гарантии и условия', icon: <Shield className="w-4 h-4" />, url: '#guarantees' },
    { name: 'Новости', icon: <FileText className="w-4 h-4" />, url: '#news' },
    { name: 'Полезные статьи', icon: <FileText className="w-4 h-4" />, url: '#articles' }
  ];

  return (
    <header className={`bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-0' : ''}`}>
      {/* Top Contact Bar - Hide when scrolled */}
      <div className={`bg-gradient-to-r from-gray-800 to-gray-900 text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0' : 'py-2.5'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Пн-Пт 9:00-18:00, Сб-Вс 10:00-16:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@nfsauto.by" className="hover:text-yellow-400 transition-colors">
                  info@nfsauto.by
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>г. Минск</span>
              </div>
              <a 
                href="tel:+375447550011" 
                className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>+375 (44) 755 00 11</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className={`bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                <CarIcon className={`text-white transition-all duration-300 ${isScrolled ? 'w-5 h-5' : 'w-7 h-7'}`} />
              </div>
              <div>
                <h1 className={`font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                  NFS AUTO
                </h1>
                {!isScrolled && (
                  <p className="text-xs text-gray-500">Пригон авто из США</p>
                )}
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative group">
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
                <input
                  type="text"
                  placeholder="Поиск по марке, модели или VIN номеру..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full px-4 pl-12 pr-32 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all duration-300 text-gray-700 placeholder-gray-400 ${isScrolled ? 'py-2.5 text-sm' : 'py-3.5'}`}
                />
                <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${isScrolled ? 'py-2 text-sm' : 'py-2.5'}`}>
                  Найти
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all font-medium"
              >
                Главная
              </Link>
              <Link
                href="/catalog"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Каталог
              </Link>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Избранное</span>
              </button>
              
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Быстрый расчет</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Navigation Menu */}
      <nav className={`bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg transition-all duration-300 ${isScrolled ? 'py-1' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center">
            {/* Каталог с иконкой */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('catalog')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/catalog"
                className={`flex items-center space-x-2 px-6 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg mx-1 ${isScrolled ? 'py-3' : 'py-4'}`}
              >
                <Grid3X3 className="w-5 h-5" />
                <span>Каталог</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              {/* Enhanced Catalog Mega Menu */}
              {activeDropdown === 'catalog' && (
                <div className="absolute top-full left-0 w-screen max-w-7xl bg-white shadow-2xl border border-gray-100 z-50 rounded-2xl mt-2 overflow-hidden">
                  <div className="p-8">
                    <div className="grid grid-cols-6 gap-8">
                      {/* Brand Categories - 4 columns */}
                      {catalogMenuItems.map((column, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                              {column.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 text-sm">
                              {column.category}
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {column.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a
                                  href={item.url}
                                  className={`block text-sm hover:text-blue-600 transition-colors py-1.5 px-2 rounded-lg hover:bg-blue-50 ${
                                    'popular' in item && item.popular ? 'text-blue-700 font-medium' : 'text-gray-600'
                                  }`}
                                >
                                  <div className="flex justify-between items-center">
                                    <span>{item.name}</span>
                                    <span className="text-xs text-gray-400">
                                      {item.count.toLocaleString()}
                                    </span>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      
                      {/* Popular Cars Section - 2 columns */}
                      <div className="col-span-2 border-l border-gray-200 pl-8">
                        <div className="flex items-center space-x-2 mb-6">
                          <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                            <Star className="w-4 h-4" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm">
                            Популярные лоты
                          </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {popularCars.slice(0, 2).map((car) => (
                            <Link key={car.id} href={`/car/${car.id}`} className="group cursor-pointer block">
                              <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                                {car.imageUrl ? (
                                  <img 
                                    src={car.imageUrl} 
                                    alt={car.name}
                                    className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                ) : (
                                  <div className="w-full h-24 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <CarIcon className="w-8 h-8 text-gray-400" />
                                  </div>
                                )}
                                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                                  ★ {car.rating}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                                  {car.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {car.year} • {car.mileage?.toLocaleString()} км
                                </p>
                                <p className="font-bold text-blue-600 text-sm">
                                  ${parseFloat(car.price).toLocaleString()}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <Link
                            href="/catalog"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 text-center block text-sm"
                          >
                            Смотреть все лоты
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                      <Link
                        href="/catalog"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                      >
                        Смотреть все марки
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Доставка с иконкой */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('delivery')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center space-x-2 px-6 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg mx-1 ${isScrolled ? 'py-3' : 'py-4'}`}>
                <Truck className="w-5 h-5" />
                <span>Доставка</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Enhanced Delivery Dropdown */}
              {activeDropdown === 'delivery' && (
                <div className="absolute top-full left-0 w-96 bg-white shadow-2xl border border-gray-100 z-50 rounded-2xl mt-2 overflow-hidden">
                  <div className="p-6">
                    <div className="space-y-3">
                      {deliveryMenuItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          className={`flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group ${
                            item.highlight ? 'bg-blue-50 border border-blue-100' : ''
                          }`}
                        >
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            item.highlight 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-600 group-hover:text-white'
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold transition-colors ${
                              item.highlight ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-600'
                            }`}>
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Информация с иконкой */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('information')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center space-x-2 px-6 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg mx-1 ${isScrolled ? 'py-3' : 'py-4'}`}>
                <Info className="w-5 h-5" />
                <span>Информация</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Enhanced Information Dropdown */}
              {activeDropdown === 'information' && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-2xl border border-gray-100 z-50 rounded-2xl mt-2 overflow-hidden">
                  <div className="p-4">
                    <ul className="space-y-1">
                      {informationMenuItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.url}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 group"
                          >
                            <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                              {item.icon}
                            </div>
                            <span className="font-medium">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Остальные пункты меню */}
            <a href="#more" className={`flex items-center space-x-2 px-6 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg mx-1 ${isScrolled ? 'py-3' : 'py-4'}`}>
              <Package className="w-5 h-5" />
              <span>Услуги</span>
            </a>

            <a href="#contacts" className={`flex items-center space-x-2 px-6 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg mx-1 ${isScrolled ? 'py-3' : 'py-4'}`}>
              <Phone className="w-5 h-5" />
              <span>Контакты</span>
            </a>

            <a href="#usa-cars" className={`flex items-center space-x-2 px-6 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg mx-1 ${isScrolled ? 'py-3' : 'py-4'}`}>
              <CarIcon className="w-5 h-5" />
              <span>Авто из США</span>
            </a>

            <a href="#cars-available" className="flex items-center space-x-2 px-6 py-4 hover:bg-white/10 transition-all duration-300 font-medium rounded-lg mx-1">
              <Star className="w-5 h-5" />
              <span>В наличии</span>
            </a>

            <a href="#add-car" className="flex items-center space-x-2 px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-300 font-semibold rounded-xl mx-1 shadow-lg transform hover:scale-105">
              <Zap className="w-5 h-5" />
              <span>Добавить авто</span>
            </a>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-blue-800 rounded-lg m-4 overflow-hidden">
              <div className="p-4 space-y-2">
                <a href="#catalog" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                  <Grid3X3 className="w-5 h-5" />
                  <span>Каталог</span>
                </a>
                <a href="#delivery" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                  <Truck className="w-5 h-5" />
                  <span>Доставка</span>
                </a>
                <a href="#information" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                  <Info className="w-5 h-5" />
                  <span>Информация</span>
                </a>
                <a href="#more" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                  <Package className="w-5 h-5" />
                  <span>Услуги</span>
                </a>
                <a href="#contacts" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/10 rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Контакты</span>
                </a>
                <a href="#add-car" className="flex items-center space-x-3 py-3 px-4 bg-yellow-500 text-black rounded-lg font-semibold mt-4">
                  <Zap className="w-5 h-5" />
                  <span>Добавить авто</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;