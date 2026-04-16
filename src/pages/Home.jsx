import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import EquipmentTypesSection from '../components/home/EquipmentTypesSection';
import FeaturedInventory from '../components/home/FeaturedInventory';
import FleetSection from '../components/home/FleetSection';
import LocationsSection from '../components/home/LocationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <EquipmentTypesSection />
      <FeaturedInventory />
      <FleetSection />
      <TestimonialsSection />
      <LocationsSection />
      <CTASection />
      <Footer />
    </div>
  );
}