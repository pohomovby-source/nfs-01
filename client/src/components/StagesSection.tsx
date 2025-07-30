import React from 'react';
import { ArrowRight } from 'lucide-react';

const StagesSection: React.FC = () => {
  const stages = [
    {
      id: 1,
      title: 'Консультация и подбор',
      description: 'Определяем ваши потребности и подбираем идеальный автомобиль под ваш бюджет и требования',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Персональный менеджер проводит детальную консультацию'
    },
    {
      id: 2,
      title: 'Проверка и оценка',
      description: 'Полная техническая диагностика автомобиля и проверка всех документов на подлинность',
      image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Независимая экспертиза состояния автомобиля'
    },
    {
      id: 3,
      title: 'Покупка и оформление',
      description: 'Безопасная сделка с полным юридическим сопровождением и оформлением документов',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Прозрачные условия без скрытых платежей'
    },
    {
      id: 4,
      title: 'Доставка и регистрация',
      description: 'Организация логистики, таможенное оформление и постановка автомобиля на учет',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: 'Полное сопровождение до получения номеров'
    }
  ];

  const additionalStages = [
    {
      title: 'Финансирование',
      description: 'Помощь в получении кредита на выгодных условиях от банков-партнеров',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Страхование',
      description: 'Оформление ОСАГО и КАСКО по лучшим тарифам с максимальным покрытием',
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Сервисное обслуживание',
      description: 'Техническое обслуживание и ремонт в сертифицированных сервисных центрах',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Этапы сотрудничества с NFS AUTO
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Пошаговый процесс покупки автомобиля из-за рубежа с полным сопровождением
          </p>
        </div>

        {/* Main Stages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-32 sm:h-40 overflow-hidden">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Step Number */}
                <div className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg">
                  {stage.id}
                </div>

                {/* Arrow for flow */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-2 text-sm line-clamp-3">
                  {stage.description}
                </p>
                <p className="text-blue-600 text-xs font-semibold">
                  {stage.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 text-center">
            Дополнительные услуги
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalStages.map((stage, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="p-4">
                  <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {stage.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StagesSection;