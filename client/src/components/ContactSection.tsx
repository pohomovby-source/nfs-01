import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готовы ответить на все ваши вопросы и помочь с выбором автомобиля
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Телефон</h4>
                    <p className="text-gray-600">+375 (44) 755 00 11</p>
                    <p className="text-sm text-gray-500">Круглосуточно</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@nfsauto.by</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Минск, ул. Примерная, 123</p>
                    <p className="text-sm text-gray-500">Офис приема клиентов</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Режим работы</h4>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Быстрые действия
              </h4>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Заказать звонок
                </button>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" />
                  WhatsApp чат
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Отправить сообщение
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    placeholder="+375 (XX) XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white resize-none"
                  placeholder="Расскажите о ваших пожеланиях к автомобилю..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Отправить сообщение
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              * Обязательные поля. Мы ответим в течение 30 минут.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Интерактивная карта</p>
              <p className="text-sm text-gray-500">г. Минск, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;