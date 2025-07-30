import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import VehicleCategoriesSection from './components/VehicleCategoriesSection';
import StagesSection from './components/StagesSection';
import PopularLotsSection from './components/PopularLotsSection';
import BrandSelector from './components/BrandSelector';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import LastCarsSection from './components/LastCarsSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <VehicleCategoriesSection />
        <StagesSection />
        <PopularLotsSection />
        <BrandSelector />
        <WhyChooseUsSection />
        <LastCarsSection />
        <FAQSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;