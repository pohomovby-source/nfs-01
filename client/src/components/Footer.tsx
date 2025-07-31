import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Главная', href: '#' },
    { name: 'О компании', href: '#about' },
    { name: 'Услуги', href: '#delivery' },
    { name: 'Автомобили', href: '#cars' },
    { name: 'Контакты', href: '#contact' }
  ];

  const services = [
    'Пригон автомобилей из США',
    'Таможенное оформление',
    'Доставка автомобилей',
    'Страхование и гарантии',
    'Проверка истории авто',
    'Консультации экспертов'
  ];

  const popularBrands = [
    'Toyota', 'Honda', 'BMW', 'Mercedes-Benz', 
    'Audi', 'Lexus', 'Ford', 'Chevrolet'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://nfsauto.by/wp-content/uploads/2024/10/cropped-logonfs.png" 
                alt="NFS Auto" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              NFS AUTO - надежный партнер по пригону автомобилей из США. 
              8 лет опыта, 500+ довольных клиентов, честные цены и полные гарантии.
            </p>
            
            {/* Quick Contact */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h4 className="font-bold text-yellow-400 mb-4">Быстрая связь</h4>
              <div className="space-y-3">
                <a href="tel:+375447550011" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+375 (44) 755 00 11</span>
                </a>
                <a href="mailto:info@nfsauto.by" className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@nfsauto.by</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Навигация</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Сб-Вс: 10:00-16:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Наши услуги</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Brands & Location */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Популярные марки</h3>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {popularBrands.map((brand, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block">
                  {brand}
                </a>
              ))}
            </div>

            {/* Office Address */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h4 className="font-bold text-yellow-400 mb-4">Наш офис</h4>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">г. Минск</p>
                  <p className="text-gray-300 text-sm">ул. Примерная, 123</p>
                  <p className="text-gray-400 text-xs mt-2">Офис приема клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-gradient-to-r from-blue-600 to-yellow-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы найти свой идеальный автомобиль?
            </h3>
            <p className="text-white/90 mb-6">
              Свяжитесь с нами для бесплатной консультации по подбору и пригону автомобиля из США
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Бесплатная консультация
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} NFS AUTO. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;