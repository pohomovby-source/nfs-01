import React from 'react';

const StagesSection: React.FC = () => {
  const stages = [
    {
      number: '1',
      title: 'Консультация и подбор автомобиля',
      description: 'Мы внимательно выслушаем ваши потребности и предложим наиболее подходящие варианты автомобилей. Наши эксперты подберут авто на основе вашего бюджета и пожеланий.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/podbor-avto.png'
    },
    {
      number: '2',
      title: 'Проверка истории и состояния автомобиля',
      description: 'Все автомобили проходят проверку по базам Carfax и Autocheck, что позволяет узнать все о прошлом автомобиля: от аварий до количества владельцев.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/proverka-istorii.png'
    },
    {
      number: '3',
      title: 'Заключение договора',
      description: 'Мы заключаем официальный договор, который гарантирует прозрачные условия сделки. Оплата производится только через банк для полной безопасности клиента.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/zakluchenie-dogovora.png'
    },
    {
      number: '4',
      title: 'Участие в аукционе и покупка автомобиля',
      description: 'Мы участвуем в аукционе от вашего имени, следуя установленным бюджетным лимитам. Если выбранный автомобиль не выигрывается, продолжаем поиск до достижения результата.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/uchastie-v-aukcione.png'
    },
    {
      number: '5',
      title: 'Оплата и доставка автомобиля',
      description: 'После выигрыша лота, вы производите оплату через банк. Автомобиль отправляется на нашу базу в США, где он подготавливается к отправке в Беларусь.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/dostavka-usa.png'
    },
    {
      number: '6',
      title: 'Доставка в Беларусь',
      description: 'Автомобиль отправляется морским путем в порт Клайпеды(Литва) или Поти(Грузия), а затем доставляется в Беларусь. Все детали отслеживаются и доступны вам для мониторинга.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/dostavka-v-belorus.png'
    },
    {
      number: '7',
      title: 'Таможенное оформление и получение автомобиля',
      description: 'Мы сопровождаем процесс таможенной очистки и помогаем с документами. После завершения всех формальностей, вы можете забрать свой автомобиль.',
      image: 'https://nfsauto.by/wp-content/uploads/2024/10/tamozennoe-oformlenie.png'
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

        <div className="grid gap-8 md:gap-12">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="relative">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600`;
                    }}
                  />
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {stage.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {stage.number}. {stage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
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