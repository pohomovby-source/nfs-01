import React, { useState } from 'react';

const BrandSelector: React.FC = () => {
  const brands = [
    { name: 'Toyota', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/touota-150x150.png' },
    { name: 'Ford', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/ford-150x150.png' },
    { name: 'Chevrolet', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/chevrolet1-150x150.png' },
    { name: 'Honda', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/honda-150x150.png' },
    { name: 'Nissan', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/nissan-150x150.png' },
    { name: 'Hyundai', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/hyundai-150x150.png' },
    { name: 'Kia', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/kia-150x150.png' },
    { name: 'Dodge', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/dodge-150x150.png' },
    { name: 'Jeep', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/jeep-150x150.png' },
    { name: 'GMC', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/gmc-150x150.jpg' },
    { name: 'Subaru', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/subaru-150x150.png' },
    { name: 'BMW', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/bmw-150x150.png' },
    { name: 'Volkswagen', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/wv-150x150.png' },
    { name: 'Mercedes-Benz', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/mercedesbenz-150x150.png' },
    { name: 'Mazda', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/mazda-150x150.png' },
    { name: 'Lexus', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/lexus-150x150.png' },
    { name: 'Chrysler', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/chrysler_original-150x150.png' },
    { name: 'RAM', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/ram-150x150.png' },
    { name: 'Buick', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/buick-150x150.png' },
    { name: 'Audi', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/audi-2-150x150.png' },
    { name: 'Acura', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/acura-150x150.png' },
    { name: 'Infiniti', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/infiniti-150x150.png' },
    { name: 'Cadillac', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/cadillac-150x150.png' },
    { name: 'Mitsubishi', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/micubisi-150x150.png' },
    { name: 'Tesla', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/tesla-150x150.png' },
    { name: 'Lincoln', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/lincoln-150x150.png' },
    { name: 'Volvo', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/volvo-150x150.png' },
    { name: 'Land Rover', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/land-rover-150x150.png' },
    { name: 'Harley-Davidson', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/harleydavidson-150x150.png' },
    { name: 'Pontiac', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/pontiac-150x150.png' },
    { name: 'MINI', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/mini-150x150.png' },
    { name: 'Scion', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/scion-150x150.png' },
    { name: 'Porsche', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/porsche-150x150.png' },
    { name: 'Mercury', logo: 'https://nfsauto.by/wp-content/uploads/2024/10/mercury-150x150.png' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Выберите марку
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Найдите автомобиль от ведущих производителей мира
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-blue-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square flex items-center justify-center mb-3">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzM0ODNmYSIvPgo8dGV4dCB4PSIzMiIgeT0iMzgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjEyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiI+Q0FSPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-center leading-tight">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Смотреть все марки
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandSelector;