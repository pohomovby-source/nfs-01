import React from 'react';

const BrandSelector: React.FC = () => {
  const brands = [
    { name: 'Toyota', count: '150+', logo: '🚗' },
    { name: 'BMW', count: '120+', logo: '🚙' },
    { name: 'Mercedes', count: '95+', logo: '🚐' },
    { name: 'Audi', count: '85+', logo: '🚕' },
    { name: 'Lexus', count: '70+', logo: '🚗' },
    { name: 'Porsche', count: '45+', logo: '🏎️' },
    { name: 'Volvo', count: '60+', logo: '🚙' },
    { name: 'Jaguar', count: '35+', logo: '🚗' },
    { name: 'Land Rover', count: '55+', logo: '🚙' },
    { name: 'Infiniti', count: '40+', logo: '🚗' },
    { name: 'Acura', count: '30+', logo: '🚕' },
    { name: 'Cadillac', count: '25+', logo: '🚐' },
    { name: 'Genesis', count: '20+', logo: '🚗' },
    { name: 'Lincoln', count: '18+', logo: '🚙' },
    { name: 'Alfa Romeo', count: '15+', logo: '🏎️' },
    { name: 'Maserati', count: '12+', logo: '🚗' },
    { name: 'Bentley', count: '8+', logo: '🚕' },
    { name: 'Rolls-Royce', count: '5+', logo: '🚐' },
    { name: 'Ferrari', count: '10+', logo: '🏎️' },
    { name: 'Lamborghini', count: '7+', logo: '🏎️' },
    { name: 'McLaren', count: '6+', logo: '🏎️' },
    { name: 'Aston Martin', count: '4+', logo: '🚗' },
    { name: 'Bugatti', count: '2+', logo: '🏎️' },
    { name: 'Koenigsegg', count: '1+', logo: '🏎️' }
  ];

  const bodyTypes = [
    { name: 'Седан', count: '245+' },
    { name: 'Хэтчбек', count: '180+' },
    { name: 'Универсал', count: '120+' },
    { name: 'Кроссовер', count: '320+' },
    { name: 'Внедорожник', count: '150+' },
    { name: 'Купе', count: '85+' },
    { name: 'Кабриолет', count: '45+' },
    { name: 'Минивэн', count: '60+' }
  ];

  const transmissions = [
    { name: 'Механическая', count: '180+' },
    { name: 'Автоматическая', count: '650+' },
    { name: 'Вариатор', count: '120+' },
    { name: 'Робот', count: '95+' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Brand Selection */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Выберите марку</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-blue-50 rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <div className="text-xs font-bold text-gray-700 group-hover:text-blue-600 transition-colors mb-1">
                  {brand.name}
                </div>
                <div className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
                  {brand.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Body Types */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Выберите тип кузова</h4>
            <div className="space-y-3">
              {bodyTypes.map((type, index) => (
                <label key={index} className="flex items-center justify-between cursor-pointer hover:bg-white p-3 rounded-lg transition-colors group">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{type.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-semibold">{type.count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Transmissions */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Выберите тип трансмиссии</h4>
            <div className="space-y-3">
              {transmissions.map((transmission, index) => (
                <label key={index} className="flex items-center justify-between cursor-pointer hover:bg-white p-3 rounded-lg transition-colors group">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{transmission.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-semibold">{transmission.count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Filters */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Дополнительные фильтры</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Год выпуска</label>
                <div className="flex space-x-2">
                  <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>От</option>
                    {Array.from({ length: 15 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <select className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>До</option>
                    {Array.from({ length: 15 }, (_, i) => 2024 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Цена, $</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="От"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="До"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Пробег, км</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="От"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="До"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-lg">
            Найти автомобили
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandSelector;