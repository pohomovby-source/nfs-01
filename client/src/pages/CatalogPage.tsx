import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useLocation, Link } from 'wouter';
import { ChevronDown, Filter, Grid, List, Search, X, SlidersHorizontal, Car, Settings, Phone, Heart, Share2, Star, Eye, Calendar, Fuel, MapPin } from 'lucide-react';
import CarCard from '../components/CarCard';
import FilterSidebar from '../components/FilterSidebar';

interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  currency: string;
  mileage: number;
  fuel: string;
  transmission: string;
  bodyType: string;
  color: string;
  engineVolume: string;
  description: string;
  status: string;
  location: string;
  imageUrl: string;
  rating: string;
  views: number;
}

const CatalogPage = () => {
  const params = useParams();
  const [location] = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [displayedCars, setDisplayedCars] = useState(6);
  const [sortBy, setSortBy] = useState('default');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [filters, setFilters] = useState({
    brand: '',
    priceFrom: '',
    priceTo: '',
    yearFrom: '',
    yearTo: '',
    fuel: '',
    transmission: '',
    bodyType: '',
    search: ''
  });

  // Popular tags for quick filtering
  const popularTags = [
    { label: 'Новые (2020+)', filter: { yearFrom: '2020' } },
    { label: 'До $20,000', filter: { priceTo: '20000' } },
    { label: 'BMW', filter: { brand: 'BMW' } },
    { label: 'Mercedes-Benz', filter: { brand: 'Mercedes-Benz' } },
    { label: 'Автомат', filter: { transmission: 'Автомат' } },
    { label: 'Седан', filter: { bodyType: 'Седан' } },
    { label: 'Внедорожник', filter: { bodyType: 'Внедорожник' } },
    { label: 'Бензин', filter: { fuel: 'Бензин' } },
  ];

  // Sorting options
  const sortOptions = [
    { value: 'default', label: 'По умолчанию' },
    { value: 'price_asc', label: 'Цена: по возрастанию' },
    { value: 'price_desc', label: 'Цена: по убыванию' },
    { value: 'year_desc', label: 'Год: сначала новые' },
    { value: 'year_asc', label: 'Год: сначала старые' },
    { value: 'mileage_asc', label: 'Пробег: по возрастанию' },
    { value: 'rating_desc', label: 'По рейтингу' },
    { value: 'views_desc', label: 'По популярности' },
  ];

  const { data: carsData, isLoading } = useQuery({
    queryKey: ['/api/cars'],
    enabled: true,
  });

  const cars: Car[] = (carsData as any)?.cars || [];

  // Filter and sort cars
  const filteredAndSortedCars = cars
    .filter((car: Car) => {
      if (filters.brand && car.brand.toLowerCase() !== filters.brand.toLowerCase()) return false;
      if (filters.priceFrom && parseFloat(car.price) < parseFloat(filters.priceFrom)) return false;
      if (filters.priceTo && parseFloat(car.price) > parseFloat(filters.priceTo)) return false;
      if (filters.yearFrom && car.year < parseInt(filters.yearFrom)) return false;
      if (filters.yearTo && car.year > parseInt(filters.yearTo)) return false;
      if (filters.fuel && car.fuel.toLowerCase() !== filters.fuel.toLowerCase()) return false;
      if (filters.transmission && car.transmission.toLowerCase() !== filters.transmission.toLowerCase()) return false;
      if (filters.bodyType && car.bodyType.toLowerCase() !== filters.bodyType.toLowerCase()) return false;
      if (filters.search && !car.name.toLowerCase().includes(filters.search.toLowerCase()) && 
          !car.brand.toLowerCase().includes(filters.search.toLowerCase()) &&
          !car.model.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    })
    .sort((a: Car, b: Car) => {
      switch (sortBy) {
        case 'price_asc':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price_desc':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'year_desc':
          return b.year - a.year;
        case 'year_asc':
          return a.year - b.year;
        case 'mileage_asc':
          return a.mileage - b.mileage;
        case 'rating_desc':
          return parseFloat(b.rating) - parseFloat(a.rating);
        case 'views_desc':
          return b.views - a.views;
        default:
          return 0;
      }
    });

  const categoryTitle = params.category ? 
    (params.category === 'avtomobil' ? 'Автомобили' : 
     params.category.charAt(0).toUpperCase() + params.category.slice(1)) : 
    'Каталог автомобилей';

  // Get popular cars (top rated)
  const popularCars = cars
    .filter(car => parseFloat(car.rating) >= 4.5)
    .slice(0, 4);

  const handleTagClick = (tagFilter: any) => {
    setFilters(prev => ({ ...prev, ...tagFilter }));
  };

  const loadMoreCars = () => {
    setDisplayedCars(prev => prev + 6);
  };

  const resetFilters = () => {
    setFilters({
      brand: '', priceFrom: '', priceTo: '', yearFrom: '', yearTo: '', 
      fuel: '', transmission: '', bodyType: '', search: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="py-4 border-b border-blue-500/20">
            <nav className="text-sm text-blue-100">
              <span className="hover:text-white cursor-pointer transition-colors">Главная</span>
              <span className="mx-2 text-blue-300">/</span>
              <span className="text-yellow-300 font-medium">{categoryTitle}</span>
            </nav>
          </div>
          
          {/* Hero Content */}
          <div className="py-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Car className="w-8 h-8 text-yellow-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{categoryTitle}</h1>
                <p className="text-blue-100 text-lg">Подберите автомобиль своей мечты из {filteredAndSortedCars.length} доступных вариантов</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 group-focus-within:text-yellow-300 transition-colors w-5 h-5" />
                <input
                  type="text"
                  placeholder="Поиск по марке, модели или характеристикам..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:border-yellow-300 focus:bg-white/20 transition-all duration-300 text-white placeholder-blue-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Popular Tags */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Популярные фильтры</h2>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag, index) => {
              const isActive = Object.entries(tag.filter).some(([key, value]) => 
                filters[key as keyof typeof filters] === value
              );
              return (
                <button
                  key={index}
                  onClick={() => handleTagClick(tag.filter)}
                  className={`px-4 py-2 border rounded-xl transition-all duration-300 text-sm font-medium ${
                    isActive 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg transform scale-105' 
                      : 'bg-white border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
            {Object.values(filters).some(value => value !== '') && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-red-100 border border-red-300 rounded-xl hover:bg-red-200 transition-all duration-300 text-sm font-medium text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4 inline mr-1" />
                Сбросить все
              </button>
            )}
          </div>
        </div>

        {/* Active Filters Display */}
        {Object.values(filters).some(value => value !== '') && (
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-blue-900">Активные фильтры</h3>
              <button
                onClick={resetFilters}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                Очистить все
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (!value) return null;
                const filterLabels = {
                  brand: 'Марка',
                  priceFrom: 'Цена от',
                  priceTo: 'Цена до',
                  yearFrom: 'Год от',
                  yearTo: 'Год до',
                  fuel: 'Топливо',
                  transmission: 'КПП',
                  bodyType: 'Кузов',
                  search: 'Поиск'
                };
                return (
                  <div key={key} className="flex items-center gap-1 bg-white border border-blue-300 rounded-lg px-3 py-1.5 text-xs">
                    <span className="text-blue-600 font-medium">{filterLabels[key as keyof typeof filterLabels]}:</span>
                    <span className="text-gray-700">{value}</span>
                    <button
                      onClick={() => setFilters(prev => ({ ...prev, [key]: '' }))}
                      className="text-blue-500 hover:text-blue-700 ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Controls Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            {/* Filter Toggle & View Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  isFilterOpen 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Фильтры</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:block">Сетка</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:block">Список</span>
                </button>
              </div>
            </div>

            {/* Results Count & Sort */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="text-gray-600">
                  Найдено: <span className="font-semibold text-blue-600">{filteredAndSortedCars.length}</span> автомобилей
                </div>
                
                {/* Sorting indicator */}
                {sortBy !== 'default' && (
                  <div className="flex items-center gap-2 text-sm bg-green-100 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 font-medium">Сортировка применена</span>
                  </div>
                )}

                {/* Quick stats */}
                {cars.length > 0 && (
                  <div className="hidden md:flex items-center gap-4 text-sm text-gray-500">
                    <span>Всего в каталоге: {cars.length}</span>
                    <span>•</span>
                    <span>Показывается: {Math.min(displayedCars, filteredAndSortedCars.length)}</span>
                  </div>
                )}
              </div>
              
              {/* Custom Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 font-medium text-gray-700"
                >
                  <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showSortDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showSortDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 py-2 animate-in slide-in-from-top">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Сортировать по</span>
                    </div>
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center justify-between ${
                          sortBy === option.value ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        <span>{option.label}</span>
                        {sortBy === option.value && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className={`transition-all duration-500 ease-in-out ${
            isFilterOpen 
              ? 'w-80 opacity-100 transform translate-x-0' 
              : 'w-0 opacity-0 transform -translate-x-full overflow-hidden'
          }`}>
            <div className="sticky top-6">
              <FilterSidebar 
                filters={filters} 
                setFilters={setFilters}
                cars={cars}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className={`grid gap-6 ${
                isFilterOpen 
                  ? 'grid-cols-1 xl:grid-cols-2' 
                  : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
              }`}>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                    <div className="bg-gray-300 h-56"></div>
                    <div className="p-6 space-y-4">
                      <div className="bg-gray-300 h-5 rounded w-3/4"></div>
                      <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                      <div className="bg-gray-300 h-6 rounded w-1/3"></div>
                      <div className="space-y-2">
                        <div className="bg-gray-300 h-3 rounded w-full"></div>
                        <div className="bg-gray-300 h-3 rounded w-2/3"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-gray-300 h-10 rounded flex-1"></div>
                        <div className="bg-gray-300 h-10 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredAndSortedCars.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Автомобили не найдены</h3>
                <p className="text-gray-600 mb-6">Попробуйте изменить параметры поиска или фильтры</p>
                <button 
                  onClick={() => {
                    setFilters({
                      brand: '', priceFrom: '', priceTo: '', yearFrom: '', yearTo: '', 
                      fuel: '', transmission: '', bodyType: '', search: ''
                    });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 transition-all duration-300 mb-8 ${
                  isFilterOpen 
                    ? (viewMode === 'grid' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1') 
                    : (viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1')
                }`}>
                  {filteredAndSortedCars.slice(0, displayedCars).map((car: Car, index) => (
                    <div 
                      key={car.id}
                      className="animate-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CarCard 
                        car={car} 
                        viewMode={viewMode}
                      />
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {displayedCars < filteredAndSortedCars.length && (
                  <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <p className="text-gray-600 mb-4">
                      Показано {displayedCars} из {filteredAndSortedCars.length} автомобилей
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(displayedCars / filteredAndSortedCars.length) * 100}%` }}
                      ></div>
                    </div>
                    <button
                      onClick={loadMoreCars}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Показать еще ({filteredAndSortedCars.length - displayedCars} автомобилей)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Popular Cars Section */}
        {popularCars.length > 0 && (
          <div className="mt-16 mb-12">
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="text-center mb-8 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-500 fill-current animate-pulse" />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Популярные автомобили</h2>
                  <Star className="w-8 h-8 text-yellow-500 fill-current animate-pulse" />
                </div>
                <p className="text-gray-600 text-lg mb-4">Самые востребованные модели с высоким рейтингом</p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>Проверены экспертами</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="w-4 h-4" />
                    <span>Готовы к покупке</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {popularCars.slice(0, 2).map((car, index) => (
                  <div
                    key={car.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={car.imageUrl}
                        alt={car.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Action buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-white transition-all duration-300 transform hover:scale-110">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-500 hover:bg-white transition-all duration-300 transform hover:scale-110">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Rating badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {car.rating}
                      </div>
                      
                      {/* Status badge */}
                      <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        🔥 Хит продаж
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {car.name}
                          </h3>
                          <p className="text-gray-600 text-sm font-medium mb-3">{car.brand} {car.model} • {car.year} год</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {parseFloat(car.price).toLocaleString('ru-RU')} {car.currency}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">≈ {Math.round(parseFloat(car.price) * 0.95).toLocaleString('ru-RU')} ₽</div>
                        </div>
                      </div>
                      
                      {/* Key characteristics */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">Год:</span>
                          <span className="font-semibold">{car.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Settings className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">Пробег:</span>
                          <span className="font-semibold">{car.mileage?.toLocaleString()} км</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Fuel className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">Топливо:</span>
                          <span className="font-semibold">{car.fuel}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Eye className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-600">Просмотры:</span>
                          <span className="font-semibold">{car.views}</span>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <Link 
                          href={`/car/${car.id}`}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                        >
                          Подробнее
                        </Link>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                          <Phone className="w-4 h-4" />
                          Звонок
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Call to action section */}
              <div className="mt-8 text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Не нашли подходящий автомобиль?</h3>
                <p className="text-gray-600 mb-4">Наши эксперты помогут найти автомобиль вашей мечты или подберут аналогичные варианты</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Бесплатная консультация
                  </button>
                  <Link 
                    href="/catalog"
                    className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Посмотреть все авто
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Info Blocks with CTA */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Delivery Info */}
          <div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <Car className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Доставка из США</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Прямые поставки автомобилей из США с полным сопровождением сделки. 
              Срок доставки от 21 дня.
            </p>
            <button className="w-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white py-2 rounded-lg font-semibold transition-all duration-300 border border-blue-200 hover:border-blue-600">
              Узнать стоимость доставки
            </button>
          </div>

          {/* Warranty Info */}
          <div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
              <Settings className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Гарантия качества</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Все автомобили проходят тщательную проверку. 
              Предоставляем гарантию на техническое состояние.
            </p>
            <button className="w-full bg-green-50 hover:bg-green-600 text-green-600 hover:text-white py-2 rounded-lg font-semibold transition-all duration-300 border border-green-200 hover:border-green-600">
              Подробнее о гарантии
            </button>
          </div>

          {/* Support Info */}
          <div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
              <Phone className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Поддержка 24/7</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Наши специалисты готовы ответить на любые вопросы 
              и помочь с выбором автомобиля.
            </p>
            <button className="w-full bg-yellow-50 hover:bg-yellow-600 text-yellow-600 hover:text-white py-2 rounded-lg font-semibold transition-all duration-300 border border-yellow-200 hover:border-yellow-600">
              Связаться с экспертом
            </button>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="mt-16 mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы купить автомобиль мечты?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Более 10 лет помогаем клиентам найти идеальные автомобили из США, Кореи и Европы. 
                Полное сопровождение от покупки до получения ключей.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-blue-100">Довольных клиентов</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">21 день</div>
                  <div className="text-blue-100">Средний срок доставки</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">10 лет</div>
                  <div className="text-blue-100">Опыт работы</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Бесплатная консультация
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;