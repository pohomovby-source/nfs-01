import React, { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { 
  ArrowLeft, Heart, Share2, Eye, Calendar, Gauge, Fuel, Settings, 
  MapPin, Phone, Mail, MessageCircle, Calculator, Download,
  Star, Shield, Award, Zap, Car as CarIcon, Truck, Clock,
  ChevronLeft, ChevronRight, PlayCircle, Camera, Grid3X3,
  Info, CheckCircle, AlertTriangle, TrendingUp, Users, Brain,
  ExternalLink, DollarSign, X, ChevronDown, Palette
} from 'lucide-react';
import { Link } from 'wouter';
import type { Car } from '@shared/schema';

const CarDetailPage: React.FC = () => {
  const [, params] = useRoute('/car/:id');
  const carId = params?.id;
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { data: carData, isLoading, error } = useQuery({
    queryKey: ['/api/cars', carId],
    enabled: !!carId,
  });

  const car: Car | undefined = (carData as any)?.car;

  const { data: relatedCarsData } = useQuery({
    queryKey: ['/api/cars/brand', car?.brand],
    enabled: !!car?.brand,
  });

  const relatedCars = ((relatedCarsData as any)?.cars?.filter((c: Car) => c.id !== car?.id).slice(0, 3)) || [];

  // Mock gallery images - in real app would come from API
  const galleryImages = [
    car?.imageUrl || '/placeholder-car.jpg',
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка информации об автомобиле...</p>
        </div>
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 rounded-full p-3 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Автомобиль не найден</h2>
          <p className="text-gray-600 mb-6">К сожалению, запрашиваемый автомобиль не найден в каталоге.</p>
          <Link href="/catalog" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Вернуться к каталогу
          </Link>
        </div>
      </div>
    );
  }

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
    } else {
      setSelectedImageIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
    }
  };

  const calculateTotalCost = () => {
    const basePrice = parseFloat(car.price);
    const delivery = 3500; // USD
    const customs = basePrice * 0.15; // 15%
    const insurance = 800; // USD
    const commission = basePrice * 0.05; // 5%
    
    return {
      basePrice,
      delivery,
      customs,
      insurance,
      commission,
      total: basePrice + delivery + customs + insurance + commission
    };
  };

  const costs = calculateTotalCost();

  const specifications = [
    { label: 'Марка', value: car.brand, icon: <Award className="w-4 h-4" /> },
    { label: 'Модель', value: car.model, icon: <CarIcon className="w-4 h-4" /> },
    { label: 'Год', value: car.year.toString(), icon: <Calendar className="w-4 h-4" /> },
    { label: 'Пробег', value: `${car.mileage?.toLocaleString()} км`, icon: <Gauge className="w-4 h-4" /> },
    { label: 'Топливо', value: car.fuel, icon: <Fuel className="w-4 h-4" /> },
    { label: 'КПП', value: car.transmission, icon: <Settings className="w-4 h-4" /> },
    { label: 'Кузов', value: car.bodyType || 'Не указан', icon: <CarIcon className="w-4 h-4" /> },
    { label: 'Цвет', value: car.color || 'Не указан', icon: <div className="w-4 h-4 rounded-full bg-gray-400" /> },
    { label: 'Объем двигателя', value: car.engineVolume ? `${car.engineVolume}L` : 'Не указан', icon: <Zap className="w-4 h-4" /> },
    { label: 'Местоположение', value: car.location || 'Уточняется', icon: <MapPin className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-24 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/catalog"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Назад к каталогу</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-bold text-gray-900">{car.name}</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-lg transition-all ${
                  isFavorite 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-1 text-sm text-gray-500 px-3 py-2 bg-gray-100 rounded-lg">
                <Eye className="w-4 h-4" />
                <span>{car.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Gallery */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-96 group">
                <img
                  src={galleryImages[selectedImageIndex]}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => handleImageNavigation('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleImageNavigation('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => setIsImageGalleryOpen(true)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${car.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Info className="w-6 h-6 mr-2 text-blue-600" />
                Технические характеристики
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="text-blue-600">
                      {spec.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-600 text-sm">{spec.label}:</span>
                      <span className="font-semibold text-gray-900 ml-2">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {car.description && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание</h2>
                <p className="text-gray-700 leading-relaxed">{car.description}</p>
              </div>
            )}

            {/* Additional Car Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Info className="w-6 h-6 mr-2 text-blue-600" />
                Дополнительная информация
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Vehicle History */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    История автомобиля
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">Количество владельцев</span>
                      <span className="font-semibold text-green-700">1 владелец</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">ДТП в истории</span>
                      <span className="font-semibold text-green-700">Не участвовал</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-700">Сервисная книжка</span>
                      <span className="font-semibold text-green-700">Ведется</span>
                    </div>
                  </div>
                </div>

                {/* Condition Assessment */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Оценка состояния
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Кузов</span>
                      <span className="font-semibold text-blue-700">Отличное</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Двигатель</span>
                      <span className="font-semibold text-blue-700">Отличное</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-700">Салон</span>
                      <span className="font-semibold text-blue-700">Хорошее</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-500" />
                Отзывы о модели
              </h2>
              
              <div className="space-y-6">
                {/* Review Summary */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-3xl font-bold text-gray-900">4.8</div>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-600">из 847 отзывов</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">9.2</div>
                      <div className="text-gray-600">Надежность</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">8.8</div>
                      <div className="text-gray-600">Комфорт</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">8.5</div>
                      <div className="text-gray-600">Экономия</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">9.0</div>
                      <div className="text-gray-600">Дизайн</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">8.7</div>
                      <div className="text-gray-600">Управление</div>
                    </div>
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">Алексей М., 2023</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Отличный автомобиль! Очень надежный, комфортный и экономичный. 
                      Пользуюсь уже 2 года - никаких проблем. Рекомендую!"
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-500">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                        <Star className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-600">Мария К., 2023</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "Покупала для семьи - очень просторный и безопасный. 
                      Качество сборки на высоте, все продумано до мелочей."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sell Your Car Block */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Продать свой автомобиль?
                  </h2>
                  <p className="text-green-100 mb-4">
                    Получите выгодное предложение за ваш автомобиль. 
                    Быстрая оценка и честная цена.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors flex items-center justify-center space-x-2">
                      <Calculator className="w-5 h-5" />
                      <span>Оценить авто</span>
                    </button>
                    <button className="bg-green-400 text-green-900 px-6 py-3 rounded-xl font-semibold hover:bg-green-300 transition-colors flex items-center justify-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Получить консультацию</span>
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <CarIcon className="w-24 h-24 text-green-200" />
                </div>
              </div>
            </div>

            {/* Enhanced Related Cars */}
            {relatedCars.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                    Похожие автомобили
                  </h2>
                  <Link href="/catalog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                    <span>Смотреть все</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedCars.map((relatedCar: Car) => (
                    <Link key={relatedCar.id} href={`/car/${relatedCar.id.toString()}`}>
                      <div className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedCar.imageUrl || '/placeholder-car.jpg'}
                            alt={relatedCar.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs font-medium">
                            ★ {relatedCar.rating}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            {relatedCar.name}
                          </h3>
                          <div className="space-y-2 text-sm text-gray-600 mb-3">
                            <div className="flex justify-between">
                              <span>Год:</span>
                              <span className="font-semibold">{relatedCar.year}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Пробег:</span>
                              <span className="font-semibold">{relatedCar.mileage?.toLocaleString()} км</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Топливо:</span>
                              <span className="font-semibold">{relatedCar.fuel}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-xl font-bold text-blue-600">
                              ${parseFloat(relatedCar.price).toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500 flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {relatedCar.views}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Price and Actions */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6 self-start">
              <div className="text-center mb-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Цена автомобиля</div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${parseFloat(car.price).toLocaleString()}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Средняя цена по рынку</div>
                  <div className="text-xl font-semibold text-gray-700">
                    ${Math.round(parseFloat(car.price) * 1.15).toLocaleString()}
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    На {Math.round((1.15 - 1) * 100)}% выгоднее рынка
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(car.rating))} ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({car.rating})</span>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                  car.status === 'available' 
                    ? 'bg-green-100 text-green-700' 
                    : car.status === 'reserved'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {car.status === 'available' ? 'Доступен' : car.status === 'reserved' ? 'Резерв' : 'Продан'}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Связаться с менеджером</span>
                </button>

                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Расчет стоимости</span>
                </button>

                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <Brain className="w-5 h-5" />
                  <span>ИИ анализ</span>
                </button>
                
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Скачать отчет</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Есть вопросы? Звоните:</p>
                  <a 
                    href="tel:+375447550011"
                    className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+375 (44) 755 00 11</span>
                  </a>
                  <p className="text-xs text-gray-500 mt-2">Работаем ежедневно 9:00-21:00</p>
                </div>
              </div>
            </div>

            {/* Quick Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Гарантии
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Проверенная история</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Страхование доставки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Гарантия 1 год</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Техподдержка 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Связаться с менеджером</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+375 (XX) XXX-XX-XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Интересует данный автомобиль..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Отправить запрос
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Калькулятор стоимости</h3>
                <button
                  onClick={() => setShowCalculator(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Стоимость автомобиля:</span>
                  <span className="font-semibold">${costs.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Доставка:</span>
                  <span className="font-semibold">${costs.delivery.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Таможенные сборы:</span>
                  <span className="font-semibold">${costs.customs.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Страхование:</span>
                  <span className="font-semibold">${costs.insurance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Комиссия:</span>
                  <span className="font-semibold">${costs.commission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4">
                  <span className="text-lg font-bold text-gray-900">Итого:</span>
                  <span className="text-xl font-bold text-blue-600">${costs.total.toLocaleString()}</span>
                </div>
                
                <div className="text-xs text-gray-500 mt-4">
                  * Расчет является предварительным. Точная стоимость зависит от курса валют и тарифов на момент покупки.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailPage;