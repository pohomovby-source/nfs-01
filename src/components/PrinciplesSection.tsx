import React from 'react';
import { Heart, Eye, Award, Users } from 'lucide-react';

const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      id: 1,
      title: 'Честность',
      description: 'Мы говорим правду о каждом автомобиле и услуге',
      icon: Heart,
      image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-600 via-blue-700 to-blue-800',
      pattern: 'circles'
    },
    {
      id: 2,
      title: 'Прозрачность',
      description: 'Все цены, условия и процессы открыты для клиентов',
      icon: Eye,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 via-cyan-600 to-teal-700',
      pattern: 'network'
    },
    {
      id: 3,
      title: 'Профессионализм',
      description: 'Экспертные знания и качественный сервис',
      icon: Award,
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-600 via-purple-700 to-blue-800',
      pattern: 'grid'
    },
    {
      id: 4,
      title: 'Долгосрочные отношения',
      description: 'Мы строим доверие, а не просто продаем автомобили',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-emerald-600 via-blue-600 to-cyan-700',
      pattern: 'waves'
    }
  ];

  const getPatternSVG = (pattern: string) => {
    switch (pattern) {
      case 'circles':
        return `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="2" fill="white" fill-opacity="0.1"/>
          <circle cx="30" cy="10" r="1.5" fill="white" fill-opacity="0.15"/>
          <circle cx="50" cy="10" r="2" fill="white" fill-opacity="0.1"/>
          <circle cx="20" cy="30" r="1" fill="white" fill-opacity="0.2"/>
          <circle cx="40" cy="30" r="2.5" fill="white" fill-opacity="0.08"/>
          <circle cx="10" cy="50" r="1.5" fill="white" fill-opacity="0.15"/>
          <circle cx="50" cy="50" r="1" fill="white" fill-opacity="0.2"/>
        </svg>`;
      case 'network':
        return `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="10" x2="30" y2="20" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
          <line x1="30" y1="20" x2="60" y2="15" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
          <line x1="60" y1="15" x2="70" y2="40" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
          <line x1="20" y1="60" x2="50" y2="70" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
          <circle cx="10" cy="10" r="2" fill="white" fill-opacity="0.2"/>
          <circle cx="30" cy="20" r="2" fill="white" fill-opacity="0.2"/>
          <circle cx="60" cy="15" r="2" fill="white" fill-opacity="0.2"/>
          <circle cx="70" cy="40" r="2" fill="white" fill-opacity="0.2"/>
        </svg>`;
      case 'grid':
        return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="2" height="2" fill="white" fill-opacity="0.15"/>
          <rect x="15" y="5" width="2" height="2" fill="white" fill-opacity="0.1"/>
          <rect x="25" y="5" width="2" height="2" fill="white" fill-opacity="0.15"/>
          <rect x="35" y="5" width="2" height="2" fill="white" fill-opacity="0.1"/>
          <rect x="5" y="15" width="2" height="2" fill="white" fill-opacity="0.1"/>
          <rect x="25" y="15" width="2" height="2" fill="white" fill-opacity="0.15"/>
          <rect x="15" y="25" width="2" height="2" fill="white" fill-opacity="0.15"/>
          <rect x="35" y="25" width="2" height="2" fill="white" fill-opacity="0.1"/>
        </svg>`;
      case 'waves':
        return `<svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q25 10 50 30 T100 30" stroke="white" stroke-opacity="0.15" stroke-width="1" fill="none"/>
          <path d="M0 40 Q25 20 50 40 T100 40" stroke="white" stroke-opacity="0.1" stroke-width="1" fill="none"/>
          <path d="M0 20 Q25 0 50 20 T100 20" stroke="white" stroke-opacity="0.1" stroke-width="1" fill="none"/>
        </svg>`;
      default:
        return '';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Наши принципы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем по принципам, которые делают покупку автомобиля честной и прозрачной
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Background with Gradient and Pattern */}
              <div className={`relative h-80 bg-gradient-to-br ${principle.gradient} overflow-hidden`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-30 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-50"
                  dangerouslySetInnerHTML={{ __html: getPatternSVG(principle.pattern) }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(getPatternSVG(principle.pattern))}")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: principle.pattern === 'waves' ? '100px 60px' : '60px 60px'
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-300">
                      <principle.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {principle.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {principle.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Довольных клиентов', color: 'text-blue-600' },
              { number: '5', label: 'Лет опыта', color: 'text-green-600' },
              { number: '24/7', label: 'Поддержка клиентов', color: 'text-yellow-600' },
              { number: '100%', label: 'Гарантия честности', color: 'text-purple-600' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100 + 600}ms` }}
              >
                <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;