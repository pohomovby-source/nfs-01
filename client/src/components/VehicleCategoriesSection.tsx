import React from 'react';

const VehicleCategoriesSection: React.FC = () => {
  const categories = [
    { 
      name: 'Автобусы', 
      count: '619', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <rect x="12" y="20" width="40" height="24" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2"/>
          <rect x="8" y="36" width="48" height="4" rx="2" fill="#1D4ED8"/>
          <circle cx="20" cy="48" r="4" fill="#374151"/>
          <circle cx="44" cy="48" r="4" fill="#374151"/>
          <rect x="16" y="24" width="8" height="6" rx="1" fill="#60A5FA"/>
          <rect x="28" y="24" width="8" height="6" rx="1" fill="#60A5FA"/>
          <rect x="40" y="24" width="8" height="6" rx="1" fill="#60A5FA"/>
        </svg>
      )
    },
    { 
      name: 'Автомобили', 
      count: '2 808 033', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <path d="M12 32h40c2 0 4 2 4 4v8c0 2-2 4-4 4H12c-2 0-4-2-4-4v-8c0-2 2-4 4-4z" fill="#3B82F6"/>
          <path d="M16 32L20 20h24l4 12" stroke="#1D4ED8" strokeWidth="2" fill="#60A5FA"/>
          <circle cx="20" cy="48" r="4" fill="#374151"/>
          <circle cx="44" cy="48" r="4" fill="#374151"/>
          <rect x="20" y="24" width="6" height="4" rx="1" fill="#DBEAFE"/>
          <rect x="30" y="24" width="6" height="4" rx="1" fill="#DBEAFE"/>
        </svg>
      )
    },
    { 
      name: 'Вездеходы', 
      count: '4 304', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <rect x="10" y="28" width="44" height="12" rx="6" fill="#059669"/>
          <path d="M14 28L18 18h28l4 10" stroke="#047857" strokeWidth="2" fill="#10B981"/>
          <circle cx="18" cy="46" r="5" fill="#374151"/>
          <circle cx="46" cy="46" r="5" fill="#374151"/>
          <rect x="22" y="22" width="4" height="3" rx="1" fill="#D1FAE5"/>
          <rect x="30" y="22" width="4" height="3" rx="1" fill="#D1FAE5"/>
          <rect x="38" y="22" width="4" height="3" rx="1" fill="#D1FAE5"/>
        </svg>
      )
    },
    { 
      name: 'Водные мотоциклы', 
      count: '1 305', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <ellipse cx="32" cy="40" rx="20" ry="8" fill="#0EA5E9"/>
          <path d="M20 32c0-6 6-12 12-12s12 6 12 12v8H20v-8z" fill="#0284C7"/>
          <rect x="28" y="24" width="8" height="4" rx="2" fill="#38BDF8"/>
          <path d="M16 44c-4 2-8 4-8 8h48c0-4-4-6-8-8" fill="#0369A1"/>
        </svg>
      )
    },
    { 
      name: 'Грузовики', 
      count: '69 525', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="24" width="16" height="16" rx="2" fill="#DC2626"/>
          <rect x="24" y="28" width="28" height="12" rx="2" fill="#EF4444"/>
          <circle cx="16" cy="48" r="4" fill="#374151"/>
          <circle cx="44" cy="48" r="4" fill="#374151"/>
          <rect x="10" y="26" width="4" height="3" rx="1" fill="#FECACA"/>
          <rect x="10" y="32" width="4" height="3" rx="1" fill="#FECACA"/>
        </svg>
      )
    },
    { 
      name: 'Дом на колесах', 
      count: '22 228', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <rect x="12" y="20" width="40" height="20" rx="4" fill="#7C3AED"/>
          <rect x="8" y="36" width="48" height="4" rx="2" fill="#5B21B6"/>
          <circle cx="20" cy="48" r="4" fill="#374151"/>
          <circle cx="44" cy="48" r="4" fill="#374151"/>
          <rect x="16" y="24" width="6" height="4" rx="1" fill="#C4B5FD"/>
          <rect x="26" y="24" width="4" height="4" rx="1" fill="#C4B5FD"/>
          <rect x="34" y="24" width="6" height="4" rx="1" fill="#C4B5FD"/>
          <rect x="42" y="24" width="6" height="4" rx="1" fill="#C4B5FD"/>
        </svg>
      )
    },
    { 
      name: 'Лодки', 
      count: '5 809', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <path d="M8 44c0-4 4-8 8-8h32c4 0 8 4 8 8v4c0 2-2 4-4 4H12c-2 0-4-2-4-4v-4z" fill="#0891B2"/>
          <path d="M12 36L16 24h32l4 12" stroke="#0E7490" strokeWidth="2" fill="#06B6D4"/>
          <rect x="28" y="16" width="8" height="8" rx="1" fill="#67E8F9"/>
          <path d="M8 48c8 0 16 2 24 2s16-2 24-2" stroke="#0E7490" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      name: 'Мотоциклы', 
      count: '35 984', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <circle cx="18" cy="44" r="8" fill="#374151"/>
          <circle cx="46" cy="44" r="8" fill="#374151"/>
          <path d="M18 36h28l-4-12h-8l-2 6-6-6h-8z" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
          <rect x="28" y="20" width="8" height="4" rx="2" fill="#FCD34D"/>
          <line x1="26" y1="36" x2="38" y2="36" stroke="#D97706" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      name: 'Спецтехника', 
      count: '3 158', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <rect x="12" y="28" width="20" height="12" rx="2" fill="#F59E0B"/>
          <circle cx="16" cy="48" r="4" fill="#374151"/>
          <circle cx="28" cy="48" r="4" fill="#374151"/>
          <path d="M32 34h16l4-8h-8l-4 4-8 4z" fill="#FCD34D"/>
          <rect x="36" y="20" width="8" height="4" rx="1" fill="#FBBF24"/>
          <rect x="14" y="30" width="4" height="3" rx="1" fill="#FEF3C7"/>
        </svg>
      )
    },
    { 
      name: 'Трейлеры', 
      count: '14 560', 
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
          <rect x="16" y="24" width="36" height="16" rx="2" fill="#6B7280"/>
          <circle cx="24" cy="48" r="4" fill="#374151"/>
          <circle cx="44" cy="48" r="4" fill="#374151"/>
          <rect x="8" y="32" width="8" height="8" rx="1" fill="#9CA3AF"/>
          <rect x="20" y="28" width="6" height="4" rx="1" fill="#E5E7EB"/>
          <rect x="30" y="28" width="6" height="4" rx="1" fill="#E5E7EB"/>
          <rect x="40" y="28" width="6" height="4" rx="1" fill="#E5E7EB"/>
        </svg>
      )
    }
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
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-blue-200 relative backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 text-center">
                {/* Image */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 via-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-blue-200/30 group-hover:border-blue-300/50">
                  <div className="relative">
                    <div className="w-16 h-16 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                      {category.icon}
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                  {category.name}
                </h3>

                {/* Count */}
                <div className="text-xl font-bold text-blue-600 group-hover:text-blue-700 mb-3">
                  {category.count}
                </div>
                
                {/* Action Button - appears on hover */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  Смотреть
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
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