import React, { useState } from 'react';
import { Eye, MapPin, Calendar, Fuel, Settings, Palette, Phone, Heart, Share2, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';

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

interface CarCardProps {
  car: Car;
  viewMode: 'grid' | 'list';
}

const CarCard: React.FC<CarCardProps> = ({ car, viewMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const formatPrice = (price: string, currency: string) => {
    const numPrice = parseFloat(price);
    return `${numPrice.toLocaleString('ru-RU')} ${currency}`;
  };

  const formatMileage = (mileage: number) => {
    return `${mileage.toLocaleString('ru-RU')} км`;
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex">
          {/* Image */}
          <div className="w-64 h-48 flex-shrink-0">
            <img
              src={car.imageUrl}
              alt={car.name}
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
                  <p className="text-gray-600">{car.brand} {car.model}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {formatPrice(car.price, car.currency)}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye className="w-4 h-4 mr-1" />
                    {car.views}
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {car.year} год
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Settings className="w-4 h-4 mr-2 text-gray-400" />
                  {formatMileage(car.mileage)}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Fuel className="w-4 h-4 mr-2 text-gray-400" />
                  {car.fuel}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Palette className="w-4 h-4 mr-2 text-gray-400" />
                  {car.color}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {car.location}
              </div>
              <div className="flex gap-2">
                <Link href={`/car/${car.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Подробнее
                </Link>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Связаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className={`w-full h-56 bg-gray-200 transition-all duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={car.imageUrl}
            alt={car.name}
            onLoad={() => setIsImageLoaded(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        {/* Status Badge */}
        {car.status === 'reserved' && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            Забронирован
          </div>
        )}
        {car.status === 'sold' && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            Продан
          </div>
        )}
        
        {/* Rating */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
          ★ {car.rating}
        </div>
        
        {/* Action Icons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-white transition-all duration-300 transform hover:scale-110">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-500 hover:bg-white transition-all duration-300 transform hover:scale-110">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {car.name}
            </h3>
            <p className="text-gray-600 text-sm font-medium">{car.brand} {car.model} • {car.year} год</p>
          </div>
          <div className="text-right ml-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              {formatPrice(car.price, car.currency)}
            </div>
          </div>
        </div>

        {/* Main Characteristics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">Год:</span>
            <span className="font-semibold">{car.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">Пробег:</span>
            <span className="font-semibold">{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Fuel className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">Топливо:</span>
            <span className="font-semibold">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Settings className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">КПП:</span>
            <span className="font-semibold">{car.transmission}</span>
          </div>
        </div>

        {/* Expandable Details */}
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <div className="border-t border-gray-100 pt-4 mb-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Тип кузова:</span>
                <span className="font-medium">{car.bodyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Цвет:</span>
                <span className="font-medium">{car.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Объем двигателя:</span>
                <span className="font-medium">{car.engineVolume}л</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Местоположение:</span>
                <span className="font-medium">{car.location}</span>
              </div>
            </div>
            {car.description && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">{car.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
        >
          <span>{isExpanded ? 'Свернуть' : 'Подробнее'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              {car.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Eye className="w-4 h-4 mr-1" />
              {car.views} просмотров
            </div>
          </div>

          <div className="flex gap-3">
            <Link 
              href={`/car/${car.id}`}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Подробнее
            </Link>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:block">Позвонить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;