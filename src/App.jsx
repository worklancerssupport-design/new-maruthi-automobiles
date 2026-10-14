import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStrip from './components/BrandStrip';
import SpareParts from './components/SpareParts';
import BikeAnatomy from './components/BikeAnatomy';
import CompatibilitySection from './components/CompatibilitySection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

export default function App() {
  return (
    <div className="min-h-screen bg-automotive-dark text-automotive-text font-sans selection:bg-automotive-red selection:text-white flex flex-col">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Single-Page Content Flow */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section: Cinematic Motorcycle Workshop with Multi-Image Hover Slideshow */}
        <Hero />

        {/* 2. Brand Trust Strip: Authentic logos, OEM & Lubricant brands */}
        <BrandStrip />

        {/* 3. Spare Parts Discovery: 8 Required Categories Grid */}
        <SpareParts />

        {/* 4. Interactive Bike Anatomy Section: 12 Hotspots on Vector Schematic */}
        <BikeAnatomy />

        {/* 5. Motorcycle Compatibility Section: 6 Manufacturers & WhatsApp Enquiry */}
        <CompatibilitySection />

        {/* 6. About Store Section: Verified Local Destination Info */}
        <AboutSection />

        {/* 7. Customer Reviews & Testimonials Section */}
        <ReviewsSection />

        {/* 8. Location & Contact Section: Phone links, Directions, Address & Map */}
        <ContactSection />
      </main>

      {/* Comprehensive Automotive Footer */}
      <Footer />

      {/* Floating Speed Dial: WhatsApp & Call Quick Access */}
      <FloatingContact />
    </div>
  );
}
