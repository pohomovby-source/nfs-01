import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useLocation } from 'wouter';
import { ChevronDown, Filter, Grid, List, Search, X, SlidersHorizontal, Car } from 'lucide-react';
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

  const { data: carsData, isLoading } = useQuery({
    queryKey: ['/api/cars'],
    enabled: true,
  });

  const cars: Car[] = (carsData as any)?.cars || [];

  // Filter cars based on current filters
  const filteredCars = cars.filter((car: Car) => {
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
  });

  const categoryTitle = params.category ? 
    (params.category === 'avtomobil' ? 'Автомобили' : 
     params.category.charAt(0).toUpperCase() + params.category.slice(1)) : 
    'Каталог автомобилей';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
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
                <p className="text-blue-100 text-lg">Подберите автомобиль своей мечты из {filteredCars.length} доступных вариантов</p>
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

      <div className="max-w-7xl mx-auto px-4 py-8">
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
            <div className="flex items-center gap-4">
              <div className="text-gray-600">
                Найдено: <span className="font-semibold text-blue-600">{filteredCars.length}</span> автомобилей
              </div>
              
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>По умолчанию</option>
                <option>Сначала дешевые</option>
                <option>Сначала дорогие</option>
                <option>По году (новые)</option>
                <option>По году (старые)</option>
                <option>По пробегу</option>
              </select>
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
            ) : filteredCars.length === 0 ? (
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
              <div className={`grid gap-6 transition-all duration-300 ${
                isFilterOpen 
                  ? (viewMode === 'grid' ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1') 
                  : (viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1')
              }`}>
                {filteredCars.map((car: Car, index) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;