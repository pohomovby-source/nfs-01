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

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
                ИДЕАЛЬНЫЙ АВТОМОБИЛЬ — ОТ ПОИСКА ДО ДОСТАВКИ!
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Подбор авто,
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  логистика,
                </span>
                <br />
                гарантия и регистрация
                <br />
                <span className="text-3xl lg:text-4xl text-gray-300">
                  — все под одной крышей
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Полный цикл услуг для покупки автомобиля из-за рубежа. 
                Честно, прозрачно, профессионально.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>ЗАКАЗАТЬ ЗВОНОК</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Смотреть видео</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
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
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative">
              {/* Main Car Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Премиум автомобиль"
                  className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl rounded-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">В наличии</div>
                    <div className="text-xs text-gray-600">Готов к доставке</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 -right-4 bg-yellow-500 text-black rounded-2xl p-4 shadow-xl animate-pulse">
                <div className="text-center">
                  <div className="text-2xl font-bold">от $25,000</div>
                  <div className="text-sm">Лучшие цены</div>
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