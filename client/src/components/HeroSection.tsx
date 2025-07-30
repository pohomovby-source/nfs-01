import React, { useState } from 'react';
import { Search, Star, Shield, ChevronDown, Play, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [searchBrand, setSearchBrand] = useState('');
  const [yearFrom, setYearFrom] = useState('');
  const [priceMax, setPriceMax] = useState('');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Автомобиль"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/80 to-indigo-900/90"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                ИДЕАЛЬНЫЙ АВТОМОБИЛЬ — ОТ ПОИСКА ДО ДОСТАВКИ!
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                Подбор авто,
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  логистика,
                </span>
                <br />
                гарантия и регистрация
                <br />
                <span className="text-xl lg:text-2xl text-gray-300">
                  — все под одной крышей
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Полный цикл услуг для покупки автомобиля из-за рубежа. 
                Честно, прозрачно, профессионально.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>ЗАКАЗАТЬ ЗВОНОК</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Смотреть видео</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <div>
                  <div className="text-sm text-gray-300">Гарантия качества</div>
                  <div className="font-semibold">100% проверка</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="text-sm text-gray-300">Рейтинг</div>
                  <div className="font-semibold">4.9 из 5</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Car Showcase */}
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300 lg:mt-0 mt-8">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main Car Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Премиум автомобиль"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-2 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">В наличии</div>
                    <div className="text-xs text-gray-600">Готов к доставке</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-2 bg-yellow-500 text-black rounded-xl p-3 shadow-xl z-20">
                <div className="text-center">
                  <div className="text-lg font-bold">от $25,000</div>
                  <div className="text-xs">Лучшие цены</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;