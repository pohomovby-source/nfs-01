import React from 'react';
import { Eye, MapPin, Calendar, Fuel, Settings, Palette } from 'lucide-react';

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
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Подробнее
                </button>
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        {car.status === 'reserved' && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
            Забронирован
          </div>
        )}
        {car.status === 'sold' && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Продан
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{car.name}</h3>
            <p className="text-gray-600 text-sm">{car.brand} {car.model}</p>
          </div>
          <div className="text-right ml-4">
            <div className="text-xl font-bold text-blue-600">
              {formatPrice(car.price, car.currency)}
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Год:</span>
            <span className="font-medium">{car.year}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Пробег:</span>
            <span className="font-medium">{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Топливо:</span>
            <span className="font-medium">{car.fuel}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">КПП:</span>
            <span className="font-medium">{car.transmission}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Цвет:</span>
            <span className="font-medium">{car.color}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t pt-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              {car.location}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Eye className="w-4 h-4 mr-1" />
              {car.views}
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Подробнее
            </button>
            <button className="flex-1 px-3 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
              Связаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;