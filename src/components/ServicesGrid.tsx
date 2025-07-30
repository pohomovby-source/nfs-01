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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Этапы сотрудничества с NFS AUTO
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для покупки автомобиля из-за рубежа
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
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