import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import EquipmentTypesSection from '../components/home/EquipmentTypesSection';
import FeaturedInventory from '../components/home/FeaturedInventory';
import FleetSection from '../components/home/FleetSection';
import LocationsSection from '../components/home/LocationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import GroundControlCTA from '../components/home/GroundControlCTA';
import FloatingCTA from '../components/home/FloatingCTA';
import AppCTABadge from '../components/home/AppCTABadge';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <ServicesSection />
      <GroundControlCTA />
      <EquipmentTypesSection />
      <FeaturedInventory />
      <FleetSection />
      <TestimonialsSection />
      <LocationsSection />
      <CTASection />
      <FloatingCTA />
      <AppCTABadge />
    </div>
  );
}