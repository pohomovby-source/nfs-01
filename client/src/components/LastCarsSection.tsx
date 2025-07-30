import React from 'react';
import { Calendar, MapPin, Fuel, Settings, CheckCircle, Clock, Truck } from 'lucide-react';

const LastCarsSection: React.FC = () => {
  const lastCars = [
    {
      id: 1,
      name: 'BMW X5 M Sport',
      price: '$68,500',
      year: 2022,
      location: 'Германия',
      fuel: 'Бензин',
      transmission: 'Автомат',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Доставлен',
      deliveryDate: '15 дней',
      client: 'Александр П.'
    },
    {
      id: 2,
      name: 'Mercedes GLE 350',
      price: '$72,000',
      year: 2023,
      location: 'США',
      fuel: 'Бензин',
      transmission: 'Автомат',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'В пути',
      deliveryDate: '7 дней',
      client: 'Мария И.'
    },
    {
      id: 3,
      name: 'Audi Q8 Quattro',
      price: '$85,000',
      year: 2022,
      location: 'Германия',
      fuel: 'Дизель',
      transmission: 'Автомат',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Оформление',
      deliveryDate: '3 дня',
      client: 'Дмитрий С.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Доставлен':
        return <CheckCircle className="w-4 h-4" />;
      case 'В пути':
        return <Truck className="w-4 h-4" />;
      case 'Оформление':
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Доставлен':
        return 'bg-green-500 text-white';
      case 'В пути':
        return 'bg-blue-500 text-white';
      case 'Оформление':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Последние заказы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Автомобили, которые мы недавно доставили нашим клиентам - реальные результаты нашей работы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lastCars.map((car, index) => (
            <div
              key={car.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Car Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ${getStatusColor(car.status)}`}>
                  {getStatusIcon(car.status)}
                  <span>{car.status}</span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full font-bold text-lg">
                  {car.price}
                </div>

                {/* Client Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  Клиент: {car.client}
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {car.name}
                </h3>

                <div className="space-y-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>Год выпуска:</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span>Откуда:</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Fuel className="w-4 h-4 text-orange-500" />
                      <span>Топливо:</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.fuel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-purple-500" />
                      <span>КПП:</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span>Срок доставки:</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.deliveryDate}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                    Заказать похожий
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="animate-in slide-in-from-bottom duration-1000 delay-200">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Доставленных авто</div>
            </div>
            <div className="animate-in slide-in-from-bottom duration-1000 delay-400">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="animate-in slide-in-from-bottom duration-1000 delay-600">
              <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">Дней средняя доставка</div>
            </div>
            <div className="animate-in slide-in-from-bottom duration-1000 delay-800">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Поддержка клиентов</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
            Посмотреть все заказы
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastCarsSection;