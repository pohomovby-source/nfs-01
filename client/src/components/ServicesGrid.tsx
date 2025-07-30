import React from 'react';
import { Car, Truck, CreditCard, Wrench, Shield, FileText, Phone, Globe, Clock, Award } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    { icon: Car, title: 'Подбор автомобилей', color: 'bg-blue-600', description: 'Персональный подбор под ваши потребности' },
    { icon: Globe, title: 'Доставка из-за рубежа', color: 'bg-green-600', description: 'Быстрая и безопасная доставка' },
    { icon: FileText, title: 'Оформление документов', color: 'bg-purple-600', description: 'Полное юридическое сопровождение' },
    { icon: Shield, title: 'Страхование', color: 'bg-red-600', description: 'ОСАГО и КАСКО по лучшим тарифам' },
    { icon: Truck, title: 'Логистика', color: 'bg-orange-600', description: 'Собственная логистическая сеть' },
    { icon: CreditCard, title: 'Кредитование', color: 'bg-indigo-600', description: 'Выгодные условия финансирования' },
    { icon: Wrench, title: 'Техосмотр', color: 'bg-teal-600', description: 'Профессиональная диагностика' },
    { icon: Phone, title: 'Консультации', color: 'bg-pink-600', description: '24/7 поддержка клиентов' },
    { icon: Clock, title: 'Быстрое оформление', color: 'bg-yellow-600', description: 'Минимум времени на документы' },
    { icon: Award, title: 'Гарантия качества', color: 'bg-emerald-600', description: '100% проверенные автомобили' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Наши услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для покупки автомобиля из-за рубежа
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 sm:mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;