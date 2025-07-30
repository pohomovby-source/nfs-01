import React from 'react';
import { Star, Eye, Heart, Calendar, Fuel, Settings } from 'lucide-react';

const PopularCarsSection: React.FC = () => {
  const popularCars = [
    {
      id: 1,
      name: 'BMW X5 M Sport',
      price: '$68,500',
      year: 2022,
      mileage: '15,000 км',
      fuel: 'Бензин',
      transmission: 'Автомат',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      views: 1250,
      status: 'Доступен'
    },
    {
      id: 2,
      name: 'Mercedes GLE 350',
      price: '$72,000',
      year: 2023,
      mileage: '8,000 км',
      fuel: 'Бензин',
      transmission: 'Автомат',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      views: 980,
      status: 'Резерв'
    },
    {
      id: 3,
      name: 'Audi Q8 Quattro',
      price: '$85,000',
      year: 2022,
      mileage: '22,000 км',
      fuel: 'Дизель',
      transmission: 'Автомат',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      views: 1100,
      status: 'Доступен'
    },
    {
      id: 4,
      name: 'Lexus RX 350',
      price: '$58,000',
      year: 2022,
      mileage: '12,000 км',
      fuel: 'Гибрид',
      transmission: 'Автомат',
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      views: 1450,
      status: 'Доступен'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные лоты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Самые востребованные автомобили в нашем каталоге с проверенной историей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularCars.map((car, index) => (
            <div
              key={car.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  car.status === 'Доступен' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                }`}>
                  {car.status}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-lg">
                  {car.price}
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {car.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{car.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>Год:</span>
                    </div>
                    <span className="font-semibold">{car.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-purple-500" />
                      <span>Пробег:</span>
                    </div>
                    <span className="font-semibold">{car.mileage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Fuel className="w-4 h-4 text-orange-500" />
                      <span>Топливо:</span>
                    </div>
                    <span className="font-semibold">{car.fuel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-green-500" />
                      <span>КПП:</span>
                    </div>
                    <span className="font-semibold">{car.transmission}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>{car.views}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
            Посмотреть все автомобили
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCarsSection;