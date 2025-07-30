import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Какие марки авто вы можете пригнать?',
      answer: 'Мы работаем со всеми популярными марками автомобилей: BMW, Mercedes-Benz, Audi, Toyota, Lexus, Porsche, Volvo, Jaguar, Land Rover и многими другими. Если нужной марки нет в списке, мы найдем и доставим любой автомобиль по вашему запросу.'
    },
    {
      question: 'Сколько времени занимает доставка автомобиля?',
      answer: 'Время доставки зависит от страны происхождения и выбранного способа транспортировки. Обычно доставка из Европы занимает 2-3 недели, из США - 4-6 недель. Мы предоставляем трекинг номер для отслеживания груза.'
    },
    {
      question: 'Какие документы нужны для покупки авто из-за рубежа?',
      answer: 'Для физических лиц необходимы: паспорт, ИНН, справка о доходах. Для юридических лиц: учредительные документы, справка из банка, доверенность на представителя. Мы поможем подготовить все необходимые документы.'
    },
    {
      question: 'Предоставляете ли вы гарантию на автомобили?',
      answer: 'Да, мы предоставляем гарантию на все автомобили сроком от 6 месяцев до 2 лет в зависимости от года выпуска и состояния. Гарантия покрывает основные узлы и агрегаты автомобиля.'
    },
    {
      question: 'Можно ли осмотреть автомобиль до покупки?',
      answer: 'Конечно! Мы предоставляем детальные фото и видео осмотр автомобиля, а также можем организовать независимую экспертизу. При необходимости наш представитель проведет дополнительную проверку на месте.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем оплату банковским переводом, наличными в офисе, а также предоставляем возможность рассрочки и кредитования через наших партнеров-банки на выгодных условиях.'
    },
    {
      question: 'Помогаете ли с оформлением кредита?',
      answer: 'Да, у нас есть партнерские отношения с ведущими банками. Мы поможем подобрать наиболее выгодные условия кредитования и оформить все необходимые документы. Одобрение кредита возможно в день обращения.'
    },
    {
      question: 'Что включено в стоимость доставки?',
      answer: 'В стоимость включены: транспортировка, страхование груза, таможенное оформление, все пошлины и сборы, доставка до вашего города, помощь в постановке на учет в ГИБДД. Никаких скрытых платежей!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о покупке автомобилей из-за рубежа
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-in slide-in-from-top duration-300">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не нашли ответ на свой вопрос?
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
            Задать вопрос специалисту
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;