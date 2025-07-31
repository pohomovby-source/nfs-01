import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Все автомобили проходят тщательную проверку по базам Carfax и Autocheck'
    },
    {
      icon: Award,
      title: 'Опыт 8 лет',
      description: 'Более 8 лет успешной работы на рынке пригона автомобилей из США'
    },
    {
      icon: Clock,
      title: 'Быстрая доставка',
      description: 'Среднее время доставки от покупки до получения - 45-60 дней'
    },
    {
      icon: Users,
      title: '500+ клиентов',
      description: 'Довольные клиенты - наша главная рекомендация и гордость'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              О компании <span className="text-blue-600">NFS AUTO</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-gray-900">NFS AUTO</strong> - это надежный партнер в вопросах покупки и доставки автомобилей с американских аукционов. 
                Мы специализируемся на полном цикле услуг: от подбора и покупки до доставки и растаможки.
              </p>
              
              <p>
                Наша команда состоит из профессионалов с многолетним опытом работы в автомобильной индустрии. 
                Мы знаем все тонкости процесса пригона автомобилей и готовы поделиться этими знаниями с нашими клиентами.
              </p>
              
              <p>
                За годы работы мы завоевали доверие сотен клиентов благодаря честности, профессионализму и индивидуальному подходу к каждому заказу. 
                Ваша мечта об идеальном автомобиле - наша профессиональная задача.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1200+</div>
                <div className="text-gray-600">Пригнанных автомобилей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="https://nfsauto.by/wp-content/uploads/2024/10/nfsauto-o-kompanii.jpg"
                alt="О компании NFS Auto"
                className="w-full h-64 object-cover rounded-xl mb-6"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600';
                }}
              />
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Почему выбирают нас?
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <advantage.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы начать поиск своего автомобиля?
            </h3>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами для бесплатной консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Бесплатная консультация
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;