import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, useLocation } from 'wouter';
import { ChevronDown, Filter, Grid, List, Search, X } from 'lucide-react';
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

  const cars = (carsData as any)?.cars || [];

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
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <span>Главная</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">{categoryTitle}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{categoryTitle}</h1>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск по марке, модели..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">
              {/* Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  isFilterOpen 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Filter className="w-4 h-4" />
                Фильтры
              </button>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Results count */}
              <span className="text-gray-600 text-sm whitespace-nowrap">
                {filteredCars.length} автомобилей
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <div className={`transition-all duration-300 ${isFilterOpen ? 'w-80' : 'w-0 overflow-hidden'}`}>
            <FilterSidebar 
              filters={filters} 
              setFilters={setFilters}
              cars={cars}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 animate-pulse">
                    <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                    <div className="space-y-3">
                      <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                      <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                      <div className="bg-gray-300 h-6 rounded w-1/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredCars.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">Автомобили не найдены</div>
                <div className="text-gray-600">Попробуйте изменить параметры поиска</div>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 lg:grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
                {filteredCars.map((car: Car) => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    viewMode={viewMode}
                  />
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