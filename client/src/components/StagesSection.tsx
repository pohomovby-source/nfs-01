import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight, Play, Clock } from 'lucide-react';

const StagesSection: React.FC = () => {
  const [visibleStages, setVisibleStages] = useState<number[]>([]);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-stage-index') || '0');
          setVisibleStages(prev => Array.from(new Set([...prev, index])));
        }
      });
    }, observerOptions);

    stageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  const stages = [
    {
      number: '1',
      title: 'Консультация и подбор автомобиля',
      description: 'Мы внимательно выслушаем ваши потребности и предложим наиболее подходящие варианты автомобилей из США, Кореи, Китая и Европы. Как новые, так и подержанные авто.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/podbor-avto.png',
      icon: '💬',
      duration: '30 мин'
    },
    {
      number: '2',
      title: 'Проверка истории и состояния автомобиля',
      description: 'Все автомобили проходят проверку по базам Carfax и Autocheck, что позволяет узнать все о прошлом автомобиля: от аварий до количества владельцев.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/proverka-istorii.png',
      icon: '🔍',
      duration: '1-2 дня'
    },
    {
      number: '3',
      title: 'Заключение договора',
      description: 'Мы заключаем официальный договор, который гарантирует прозрачные условия сделки. Оплата производится только через банк для полной безопасности клиента.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/zakluchenie-dogovora.png',
      icon: '📝',
      duration: '1 день'
    },
    {
      number: '4',
      title: 'Участие в аукционе и покупка автомобиля',
      description: 'Мы участвуем в аукционах США, Кореи и других стран от вашего имени, следуя установленным бюджетным лимитам.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/uchastie-v-aukcione.png',
      icon: '🎯',
      duration: '1-7 дней'
    },
    {
      number: '5',
      title: 'Оплата и доставка автомобиля',
      description: 'После выигрыша лота, вы производите оплату через банк. Автомобиль отправляется на нашу базу, где он подготавливается к отправке.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/dostavka-usa.png',
      icon: '💳',
      duration: '3-5 дней'
    },
    {
      number: '6',
      title: 'Доставка в Беларусь',
      description: 'Автомобиль отправляется морским путем в порт Клайпеды(Литва) или Поти(Грузия), а затем доставляется в Беларусь.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/dostavka-v-belorus.png',
      icon: '🚢',
      duration: '20-30 дней'
    },
    {
      number: '7',
      title: 'Таможенное оформление и получение автомобиля',
      description: 'Мы сопровождаем процесс таможенной очистки и помогаем с документами. После завершения всех формальностей, вы можете забрать свой автомобиль.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/tamozennoe-oformlenie.png',
      icon: '🏁',
      duration: '3-7 дней'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Этапы сотрудничества с NFS AUTO
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Простой и прозрачный процесс покупки автомобиля из-за рубежа
          </p>
        </div>

        {/* Progress Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {stages.map((stage, index) => {
              const isVisible = visibleStages.includes(index);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={(el) => stageRefs.current[index] = el}
                  data-stage-index={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  } transition-all duration-1000 ease-out`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Stage Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-3xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {stage.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {stage.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <Clock className="w-4 h-4" />
                            <span>{stage.duration}</span>
                          </div>
                        </div>
                        <div className="text-3xl">{stage.icon}</div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {stage.description}
                      </p>
                      
                      {/* Status Indicator */}
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Этап включен в стандартный пакет</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 border-4 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-full h-full bg-yellow-400 rounded-full transform scale-0 ${
                      isVisible ? 'animate-ping' : ''
                    }`}></div>
                  </div>

                  {/* Image Side */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-16' : 'md:pr-16'} mt-6 md:mt-0`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <img
                        src={stage.image}
                        alt={stage.title}
                        className="relative w-full h-64 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600';
                        }}
                      />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                        <div className="text-sm font-bold text-blue-600">Этап {stage.number}</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector (visible only on large screens) */}
                  {index < stages.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-blue-400 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Начать сотрудничество
          </button>
        </div>
      </div>
    </section>
  );
};

export default StagesSection;