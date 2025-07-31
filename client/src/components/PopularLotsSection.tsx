import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, DollarSign, Gauge, Settings, Fuel, Palette } from 'lucide-react';

const PopularLotsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lots = [
    {
      id: 1,
      name: '2017 Fiat 500X Trekking',
      vin: 'ZFBCFXCB5HP517978',
      price: 0,
      date: '2024-11-11',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: '2.4L',
        mileage: '95,000 км',
        transmission: 'АКПП',
        drive: 'AWD',
        fuel: 'Бензин',
        color: 'Красный'
      }
    },
    {
      id: 2,
      name: '1967 Chevrolet Impala',
      vin: '168877D213648',
      price: 0,
      date: '1970-01-01',
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: '5.7L V8',
        mileage: '125,000 км',
        transmission: 'МКПП',
        drive: 'RWD',
        fuel: 'Бензин',
        color: 'Синий'
      }
    },
    {
      id: 3,
      name: '2023 Jeep Grand Cherokee Laredo',
      vin: '1C4RJHAG1P8804740',
      price: 0,
      date: '2024-10-30',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: '3.6L V6',
        mileage: '15,000 км',
        transmission: 'АКПП',
        drive: 'AWD',
        fuel: 'Бензин',
        color: 'Черный'
      }
    },
    {
      id: 4,
      name: '2018 Honda Civic Ex-L',
      vin: 'JHMFC1F77JX034973',
      price: 0,
      date: '1970-01-01',
      image: 'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: '1.5L Turbo',
        mileage: '68,000 км',
        transmission: 'CVT',
        drive: 'FWD',
        fuel: 'Бензин',
        color: 'Белый'
      }
    },
    {
      id: 5,
      name: '2023 Honda Cr-V Sport Touring',
      vin: '7FARS6H96PE024696',
      price: 9500,
      date: '2024-07-24',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: '1.5L Turbo',
        mileage: '25,000 км',
        transmission: 'CVT',
        drive: 'AWD',
        fuel: 'Бензин',
        color: 'Серебро'
      }
    },
    {
      id: 6,
      name: '2022 Chevrolet Equinox Awd',
      vin: '3GNAXTEV2NL139666',
      price: 0,
      date: '1970-01-01',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: '1.5L Turbo',
        mileage: '45,000 км',
        transmission: 'CVT',
        drive: 'AWD',
        fuel: 'Бензин',
        color: 'Белый'
      }
    },
    {
      id: 7,
      name: '2023 Tesla Model 3',
      vin: 'LRW3E1FA4PC845640',
      price: 0,
      date: '2024-10-29',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: 'Электро',
        mileage: '8,000 км',
        transmission: 'Автомат',
        drive: 'RWD',
        fuel: 'Электричество',
        color: 'Черный'
      }
    },
    {
      id: 8,
      name: '2016 Mercedes-Benz Glc',
      vin: 'WDC0G4KB2GF084924',
      price: 0,
      date: '2024-10-23',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      specs: {
        engine: '2.0L Turbo',
        mileage: '85,000 км',
        transmission: 'АКПП',
        drive: 'AWD',
        fuel: 'Бензин',
        color: 'Серый'
      }
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(lots.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const formatDate = (dateString: string) => {
    if (dateString === '1970-01-01') return 'Не указана';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };

  const formatPrice = (price: number) => {
    return price === 0 ? '0$' : `${price.toLocaleString()}$`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Популярные лоты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Актуальные предложения автомобилей с аукционов США
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {lots
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((lot) => (
                      <div
                        key={lot.id}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={lot.image}
                            alt={lot.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Price Badge */}
                          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {formatPrice(lot.price)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 group-hover:p-6 transition-all duration-300">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {lot.name}
                          </h3>
                          
                          <div className="text-sm text-gray-500 mb-3 font-mono">
                            VIN: {lot.vin}
                          </div>

                          <div className="flex items-center text-sm text-gray-600 mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{formatDate(lot.date)}</span>
                          </div>

                          {/* Expandable Specs */}
                          <div className="overflow-hidden transition-all duration-500 group-hover:max-h-32 max-h-0">
                            <div className="bg-gray-50 p-3 rounded-lg space-y-2 mt-3">
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex items-center space-x-1">
                                  <Settings className="w-3 h-3 text-blue-500" />
                                  <span className="font-medium">Двигатель:</span>
                                  <span>{lot.specs.engine}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Gauge className="w-3 h-3 text-green-500" />
                                  <span className="font-medium">Пробег:</span>
                                  <span>{lot.specs.mileage}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Settings className="w-3 h-3 text-purple-500" />
                                  <span className="font-medium">КПП:</span>
                                  <span>{lot.specs.transmission}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Fuel className="w-3 h-3 text-orange-500" />
                                  <span className="font-medium">Топливо:</span>
                                  <span>{lot.specs.fuel}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Settings className="w-3 h-3 text-red-500" />
                                  <span className="font-medium">Привод:</span>
                                  <span>{lot.specs.drive}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Palette className="w-3 h-3 text-purple-500" />
                                  <span className="font-medium">Цвет:</span>
                                  <span>{lot.specs.color}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            Узнать цену
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Смотреть все лоты
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularLotsSection;