import React from 'react';
import { X, ChevronDown, SlidersHorizontal } from 'lucide-react';

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

interface Filters {
  brand: string;
  priceFrom: string;
  priceTo: string;
  yearFrom: string;
  yearTo: string;
  fuel: string;
  transmission: string;
  bodyType: string;
  search: string;
}

interface FilterSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  cars: Car[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters, cars }) => {
  const clearFilters = () => {
    setFilters({
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
  };

  // Get unique values for filter options
  const brands = Array.from(new Set(cars.map(car => car.brand))).sort();
  const fuelTypes = Array.from(new Set(cars.map(car => car.fuel))).sort();
  const transmissions = Array.from(new Set(cars.map(car => car.transmission))).sort();
  const bodyTypes = Array.from(new Set(cars.map(car => car.bodyType).filter(Boolean))).sort();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 h-fit sticky top-6 slide-filter">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-blue-600" />
          Фильтры
        </h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all duration-300"
        >
          <X className="w-4 h-4" />
          Очистить
        </button>
      </div>

      <div className="space-y-6">
        {/* Brand */}
        <div className="bg-gray-50 rounded-xl p-4">
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Марка автомобиля
          </label>
          <select
            value={filters.brand}
            onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
          >
            <option value="">Любая марка</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="bg-gray-50 rounded-xl p-4">
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Цена, USD
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="От"
              value={filters.priceFrom}
              onChange={(e) => setFilters(prev => ({ ...prev, priceFrom: e.target.value }))}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
            />
            <input
              type="number"
              placeholder="До"
              value={filters.priceTo}
              onChange={(e) => setFilters(prev => ({ ...prev, priceTo: e.target.value }))}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
            />
          </div>
        </div>

        {/* Year Range */}
        <div className="bg-gray-50 rounded-xl p-4">
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Год выпуска
          </label>
          <div className="grid grid-cols-2 gap-3">
            <select
              value={filters.yearFrom}
              onChange={(e) => setFilters(prev => ({ ...prev, yearFrom: e.target.value }))}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
            >
              <option value="">От года</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              value={filters.yearTo}
              onChange={(e) => setFilters(prev => ({ ...prev, yearTo: e.target.value }))}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
            >
              <option value="">До года</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Fuel Type */}
        <div className="bg-gray-50 rounded-xl p-4">
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Тип топлива
          </label>
          <select
            value={filters.fuel}
            onChange={(e) => setFilters(prev => ({ ...prev, fuel: e.target.value }))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
          >
            <option value="">Любой тип</option>
            {fuelTypes.map(fuel => (
              <option key={fuel} value={fuel}>{fuel}</option>
            ))}
          </select>
        </div>

        {/* Transmission */}
        <div className="bg-gray-50 rounded-xl p-4">
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Коробка передач
          </label>
          <select
            value={filters.transmission}
            onChange={(e) => setFilters(prev => ({ ...prev, transmission: e.target.value }))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
          >
            <option value="">Любая</option>
            {transmissions.map(transmission => (
              <option key={transmission} value={transmission}>{transmission}</option>
            ))}
          </select>
        </div>

        {/* Body Type */}
        <div className="bg-gray-50 rounded-xl p-4">
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Тип кузова
          </label>
          <select
            value={filters.bodyType}
            onChange={(e) => setFilters(prev => ({ ...prev, bodyType: e.target.value }))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
          >
            <option value="">Любой тип</option>
            {bodyTypes.map(bodyType => (
              <option key={bodyType} value={bodyType}>{bodyType}</option>
            ))}
          </select>
        </div>

        {/* Quick Filters */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Быстрые фильтры
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters(prev => ({ ...prev, yearFrom: '2020' }));
                  } else {
                    setFilters(prev => ({ ...prev, yearFrom: '' }));
                  }
                }}
              />
              <span className="ml-2 text-sm text-gray-700">Новые (с 2020 года)</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters(prev => ({ ...prev, priceTo: '50000' }));
                  } else {
                    setFilters(prev => ({ ...prev, priceTo: '' }));
                  }
                }}
              />
              <span className="ml-2 text-sm text-gray-700">До $50,000</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters(prev => ({ ...prev, fuel: 'Гибрид' }));
                  } else {
                    setFilters(prev => ({ ...prev, fuel: '' }));
                  }
                }}
              />
              <span className="ml-2 text-sm text-gray-700">Гибрид</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;