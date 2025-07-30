import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      title: 'Полная проверка автомобиля',
      description: 'Каждый автомобиль проходит детальную техническую диагностику и проверку документов перед покупкой. Мы гарантируем честность каждой сделки.',
      image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '100% проверенных авто'
    },
    {
      title: 'Прозрачное ценообразование',
      description: 'Никаких скрытых платежей. Все расходы обговариваются заранее и фиксируются в договоре. Вы знаете точную стоимость с самого начала.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '0 скрытых платежей'
    },
    {
      title: 'Быстрая доставка',
      description: 'Собственная логистическая сеть позволяет доставлять автомобили в кратчайшие сроки. Отслеживание груза в режиме реального времени.',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '2-4 недели доставка'
    },
    {
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все автомобили и полное сервисное сопровождение. Наша репутация - ваша уверенность в качестве.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: 'До 2 лет гарантии'
    },
    {
      title: 'Профессиональная команда',
      description: 'Опытные специалисты с многолетним стажем в автомобильной индустрии. Каждый сотрудник - эксперт в своей области.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '5+ лет опыта'
    },
    {
      title: 'Индивидуальный подход',
      description: 'Персональный менеджер ведет вашу сделку от начала до получения автомобиля. Консультации 24/7 и поддержка на каждом этапе.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '24/7 поддержка'
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему нам доверяются
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Преимущества работы с NFS Auto - ваша уверенность в правильном выборе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {reason.stats}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Готовы найти свой идеальный автомобиль?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Получите бесплатную консультацию и узнайте, как мы можем помочь вам приобрести автомобиль мечты
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Бесплатная консультация
                </button>
                <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Посмотреть каталог
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;