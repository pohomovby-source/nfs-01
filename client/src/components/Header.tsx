import React, { useState, useRef, useEffect } from 'react';
import { Phone, Search, Menu, X, ChevronDown, Car, Truck, Ship, Building } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
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
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const catalogMenuItems = [
    {
      category: 'Марки',
      items: [
        { name: 'Acura (30860)', count: 30860, url: '#' },
        { name: 'Alfa Romeo (30139)', count: 30139, url: '#' },
        { name: 'Audi (37307)', count: 37307, url: '#' },
        { name: 'Bentley (6)', count: 6, url: '#' },
        { name: 'BMW (1)', count: 1, url: '#' },
        { name: 'Bugatti (145977)', count: 145977, url: '#' },
        { name: 'Chrysler (13059)', count: 13059, url: '#' },
        { name: 'Daewoo (4)', count: 4, url: '#' }
      ]
    },
    {
      category: 'A-E',
      items: [
        { name: 'Aro Romeo (30139)', count: 30139, url: '#' },
        { name: 'Arctic Cat (192)', count: 192, url: '#' },
        { name: 'Austin (25)', count: 25, url: '#' },
        { name: 'Avanti Coachworks (1)', count: 1, url: '#' },
        { name: 'Bajaj (3)', count: 3, url: '#' },
        { name: 'Bentley (511)', count: 511, url: '#' },
        { name: 'BMW (52373)', count: 52373, url: '#' },
        { name: 'BYD (1)', count: 1, url: '#' }
      ]
    },
    {
      category: 'Авто (C)',
      items: [
        { name: 'Acura (2)', count: 2, url: '#' },
        { name: 'Aro (162)', count: 162, url: '#' },
        { name: 'Bentley (5)', count: 5, url: '#' },
        { name: 'Big Dog (505)', count: 505, url: '#' },
        { name: 'Buick (37834)', count: 37834, url: '#' },
        { name: 'Ciencia (29)', count: 29, url: '#' },
        { name: 'Daewoo (36)', count: 36, url: '#' },
        { name: 'DeLorean (9)', count: 9, url: '#' }
      ]
    },
    {
      category: 'AM-мотоcy (6)',
      items: [
        { name: 'AM General (6)', count: 6, url: '#' },
        { name: 'Aprilia (200)', count: 200, url: '#' },
        { name: 'Bentley (191)', count: 191, url: '#' },
        { name: 'BMW (52373)', count: 52373, url: '#' },
        { name: 'Chevrolet (329943)', count: 329943, url: '#' },
        { name: 'Daihatsu (8)', count: 8, url: '#' },
        { name: 'Dodge (204627)', count: 204627, url: '#' },
        { name: 'Ferrari (865)', count: 865, url: '#' }
      ]
    },
    {
      category: 'АЧС (71)',
      items: [
        { name: 'Acura (2)', count: 2, url: '#' },
        { name: 'Ai (3)', count: 3, url: '#' },
        { name: 'Bentone (4)', count: 4, url: '#' },
        { name: 'Bombardier (9)', count: 9, url: '#' },
        { name: 'Cadillac (25947)', count: 25947, url: '#' },
        { name: 'Datsun (77)', count: 77, url: '#' },
        { name: 'Ducati (665)', count: 665, url: '#' },
        { name: 'Fiat (1369)', count: 1369, url: '#' }
      ]
    }
  ];

  const deliveryMenuItems = [
    {
      title: 'Доставка автомобилей',
      description: 'Морская и наземная доставка из США',
      icon: <Ship className="w-6 h-6" />,
      url: '#delivery'
    },
    {
      title: 'Растаможка',
      description: 'Полное таможенное оформление',
      icon: <Building className="w-6 h-6" />,
      url: '#customs'
    },
    {
      title: 'Логистика',
      description: 'Комплексные логистические решения',
      icon: <Truck className="w-6 h-6" />,
      url: '#logistics'
    },
    {
      title: 'Страхование',
      description: 'Страхование груза и автомобиля',
      icon: <Car className="w-6 h-6" />,
      url: '#insurance'
    }
  ];

  const informationMenuItems = [
    { name: 'О компании', url: '#about' },
    { name: 'Новости', url: '#news' },
    { name: 'Статьи', url: '#articles' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Отзывы', url: '#reviews' },
    { name: 'Гарантии', url: '#guarantees' }
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span>Работаем: Пн-Пт 9:00-18:00, Сб-Вс 10:00-16:00</span>
              <span>Email: info@nfsauto.by</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+375447550011" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+375 (44) 755 00 11</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://nfsauto.by/wp-content/uploads/2024/10/cropped-logonfs.png"
                alt="NFS AUTO"
                className="h-12 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTUwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjUwIiByeD0iOCIgZmlsbD0iIzM0ODNmYSIvPgo8dGV4dCB4PSI3NSIgeT0iMzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiPk5GUyBBVVRPPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Марка, Модель, VIN"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Найти
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center">
            {/* Каталог */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('catalog')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-2 px-6 py-4 hover:bg-blue-700 transition-colors">
                <span className="font-semibold">Каталог</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Catalog Mega Menu */}
              {activeDropdown === 'catalog' && (
                <div className="absolute top-full left-0 w-screen max-w-5xl bg-white shadow-2xl border border-gray-200 z-50">
                  <div className="p-6">
                    <div className="grid grid-cols-5 gap-6">
                      {catalogMenuItems.map((column, index) => (
                        <div key={index}>
                          <h3 className="font-bold text-gray-900 mb-4 text-sm">
                            {column.category}
                          </h3>
                          <ul className="space-y-2">
                            {column.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a
                                  href={item.url}
                                  className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Доставка */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('delivery')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-2 px-6 py-4 hover:bg-blue-700 transition-colors">
                <span className="font-semibold">Доставка</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Delivery Dropdown */}
              {activeDropdown === 'delivery' && (
                <div className="absolute top-full left-0 w-80 bg-white shadow-2xl border border-gray-200 z-50">
                  <div className="p-6">
                    <div className="space-y-4">
                      {deliveryMenuItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
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

            {/* Информация */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('information')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-2 px-6 py-4 hover:bg-blue-700 transition-colors">
                <span className="font-semibold">Информация</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Information Dropdown */}
              {activeDropdown === 'information' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-200 z-50">
                  <div className="p-4">
                    <ul className="space-y-2">
                      {informationMenuItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.url}
                            className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Еще */}
            <a href="#more" className="px-6 py-4 hover:bg-blue-700 transition-colors font-semibold">
              Еще
            </a>

            {/* Контакты */}
            <a href="#contacts" className="px-6 py-4 hover:bg-blue-700 transition-colors font-semibold">
              Контакты
            </a>

            {/* Авто из США */}
            <a href="#usa-cars" className="px-6 py-4 hover:bg-blue-700 transition-colors font-semibold">
              Авто из США
            </a>

            {/* Авто в наличии */}
            <a href="#cars-available" className="px-6 py-4 hover:bg-blue-700 transition-colors font-semibold">
              Авто в наличии
            </a>

            {/* Добавить авто */}
            <a href="#add-car" className="px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-black transition-colors font-semibold rounded-none">
              Добавить авто
            </a>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-blue-700 p-4">
              <div className="space-y-2">
                <a href="#catalog" className="block py-2 hover:text-yellow-400">Каталог</a>
                <a href="#delivery" className="block py-2 hover:text-yellow-400">Доставка</a>
                <a href="#information" className="block py-2 hover:text-yellow-400">Информация</a>
                <a href="#more" className="block py-2 hover:text-yellow-400">Еще</a>
                <a href="#contacts" className="block py-2 hover:text-yellow-400">Контакты</a>
                <a href="#usa-cars" className="block py-2 hover:text-yellow-400">Авто из США</a>
                <a href="#cars-available" className="block py-2 hover:text-yellow-400">Авто в наличии</a>
                <a href="#add-car" className="block py-2 bg-yellow-500 text-black px-4 rounded hover:bg-yellow-600">Добавить авто</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;