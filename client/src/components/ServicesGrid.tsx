import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const services = [
    {
      title: 'Доставка автомобилей',
      description: 'Быстрая и безопасная доставка автомобилей из США, Кореи, Китая и Европы морским и автомобильным транспортом',
      icon: '🚢',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/dostavka-avto-nfs.jpg',
      features: ['Морская доставка', 'Страхование груза', 'Контейнерная перевозка', 'Отслеживание груза']
    },
    {
      title: 'Растаможка автомобилей',
      description: 'Полное таможенное сопровождение и оформление всех документов для ввоза автомобиля в Беларусь',
      icon: '📋',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/rastamozka-nfs.jpg',
      features: ['Таможенная очистка', 'Оформление документов', 'Сертификация', 'Постановка на учет']
    },
    {
      title: 'Покупка на аукционах',
      description: 'Участие в аукционах США, Кореи и других стран от вашего имени с профессиональным подходом',
      icon: '🎯',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/aukcioni-nfs.jpg',
      features: ['Участие в торгах', 'Анализ лотов', 'Проверка истории', 'Консультации']
    },
    {
      title: 'Гарантии и страхование',
      description: 'Комплексные гарантии качества и страхование на всех этапах покупки и доставки',
      icon: '🛡️',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/garantii-nfs.jpg',
      features: ['Гарантия качества', 'Страхование груза', 'Возврат средств', 'Техническая поддержка']
    },
    {
      title: 'Подбор новых автомобилей',
      description: 'Поиск и покупка новых автомобилей напрямую у дилеров в США, Корее, Китае и Европе',
      icon: '✨',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg',
      features: ['Новые авто', 'Дилерские цены', 'Полная гарантия', 'Заводская комплектация']
    },
    {
      title: 'Поиск редких моделей',
      description: 'Специализируемся на поиске редких и эксклюзивных автомобилей по всему миру',
      icon: '🏆',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg',
      features: ['Редкие модели', 'Коллекционные авто', 'Эксклюзивный поиск', 'Экспертная оценка']
    }
  ];

  return (
    <section className="py-16 bg-white" id="delivery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный комплекс услуг по пригону автомобилей из США, Кореи, Китая и Европы под ключ
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            className={`p-3 rounded-full border-2 transition-all duration-300 ${
              prevBtnEnabled 
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-sm text-gray-600 px-4">Листайте, чтобы увидеть все услуги</span>
          <button
            className={`p-3 rounded-full border-2 transition-all duration-300 ${
              nextBtnEnabled 
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] mr-6"
                style={{ animationDelay: `${index * 200}ms` }}
              >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Подробнее об услуге
                </button>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-3xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Нужна консультация по услугам?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Наши эксперты подберут оптимальный пакет услуг для вашего случая
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

export default ServicesGrid;