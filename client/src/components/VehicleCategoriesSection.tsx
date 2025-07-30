import React from 'react';

const VehicleCategoriesSection: React.FC = () => {
  const categories = [
    { name: 'Автобусы', count: '619', icon: '🚌', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-bus.png' },
    { name: 'Автомобили', count: '2 808 033', icon: '🚗', image: 'https://nfsauto.by/wp-content/uploads/2024/10/avtomobili01-nfsauto.png' },
    { name: 'Вездеходы', count: '4 304', icon: '🚙', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-vezdehodi.png' },
    { name: 'Водные мотоциклы', count: '1 305', icon: '🏄', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-aquabike.png' },
    { name: 'Грузовики', count: '69 525', icon: '🚚', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-gruzoviki.png' },
    { name: 'Дом на колесах', count: '22 228', icon: '🚐', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-domnakolesah.png' },
    { name: 'Лодки', count: '5 809', icon: '⛵', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-lodki.png' },
    { name: 'Мотоциклы', count: '35 984', icon: '🏍️', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-moto.png' },
    { name: 'Спецтехника', count: '3 158', icon: '🚜', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-specteh.png' },
    { name: 'Трейлеры', count: '14 560', icon: '🚛', image: 'https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-treileri.png' }
  ];

  return (
    <section className="py-12 bg-white" id="cars">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Категории транспорта
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите нужную категорию и найдите свой идеальный автомобиль
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 text-center">
                {/* Image */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="text-2xl hidden">
                    {category.icon}
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                  {category.name}
                </h3>

                {/* Count */}
                <div className="text-xl font-bold text-blue-600 group-hover:text-blue-700">
                  {category.count}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Смотреть все категории
          </button>
        </div>
      </div>
    </section>
  );
};

export default VehicleCategoriesSection;