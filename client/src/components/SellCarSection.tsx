import React from 'react';
import { Car, Camera, FileText, DollarSign, Clock, Award, Users, CheckCircle } from 'lucide-react';

const SellCarSection: React.FC = () => {
  const sellSteps = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Фотосъемка',
      description: 'Профессиональные фото вашего автомобиля',
      time: '1 день'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Оценка и документы',
      description: 'Техническая оценка и подготовка документов',
      time: '2-3 дня'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Поиск покупателя',
      description: 'Размещение на международных площадках',
      time: '1-4 недели'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Продажа',
      description: 'Безопасная сделка и получение денег',
      time: '1-2 дня'
    }
  ];

  const benefits = [
    'Международная экспозиция',
    'Профессиональная оценка',
    'Безопасные сделки',
    'Максимальная цена',
    'Полное сопровождение',
    'Быстрые сроки'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Продайте свой автомобиль
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы поможем продать ваш автомобиль на международном рынке по максимальной цене. 
            Полное сопровождение от оценки до передачи денег.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Почему выбирают нас?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-8 rounded-3xl text-white">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-12 h-12 text-yellow-400" />
                <div>
                  <h4 className="text-xl font-bold">Гарантия лучшей цены</h4>
                  <p className="text-green-100">Или вернем разницу</p>
                </div>
              </div>
              <p className="text-green-100">
                Если найдете предложение лучше в течение 30 дней - доплатим разницу!
              </p>
            </div>
          </div>

          {/* Right side - Process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Процесс продажи
            </h3>
            
            {sellSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                      <div className="flex items-center space-x-1 text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span>{step.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Connecting line */}
                {index < sellSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-green-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
            <Car className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы продать свой автомобиль?
            </h3>
            <p className="text-gray-600 mb-6">
              Получите бесплатную оценку прямо сейчас
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Получить оценку
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300">
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCarSection;