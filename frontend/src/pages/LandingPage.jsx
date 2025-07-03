import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <AboutUs />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;