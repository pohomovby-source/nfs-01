import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import VehicleCategoriesSection from '../components/VehicleCategoriesSection';
import StagesSection from '../components/StagesSection';
import PopularLotsSection from '../components/PopularLotsSection';
import BrandSelector from '../components/BrandSelector';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import LastCarsSection from '../components/LastCarsSection';
import SellCarSection from '../components/SellCarSection';
import FAQSection from '../components/FAQSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <VehicleCategoriesSection />
      <StagesSection />
      <PopularLotsSection />
      <SellCarSection />
      <BrandSelector />
      <AboutSection />
      <WhyChooseUsSection />
      <LastCarsSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;