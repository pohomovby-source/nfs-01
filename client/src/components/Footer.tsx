import React from 'react';
import { Car, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Подбор автомобилей',
    'Доставка и растаможка',
    'Кредит и лизинг',
    'Техническая проверка',
    'Страхование',
    'Гарантийное обслуживание'
  ];

  const company = [
    'О нас',
    'Наша команда',
    'Блог',
    'Карьера',
    'Партнеры',
    'Отзывы'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">NFS Auto</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Честные автомобили из-за рубежа. Прозрачность и профессионализм в каждой сделке.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Компания</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+375291234567"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +375 (29) 123-45-67
                  </a>
                  <div className="text-sm text-gray-400">Звонки и WhatsApp</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@nfsauto.by"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    info@nfsauto.by
                  </a>
                  <div className="text-sm text-gray-400">Общие вопросы</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">г. Минск, ул. Примерная, 123</div>
                  <div className="text-sm text-gray-400">Офис продаж</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Пн-Пт: 9:00-19:00</div>
                  <div className="text-gray-300">Сб-Вс: 10:00-17:00</div>
                  <div className="text-sm text-gray-400">Время работы</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Получайте лучшие предложения</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Подпишитесь на нашу рассылку и первыми узнавайте о новых автомобилях и специальных предложениях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NFS Auto. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Правовая информация
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;