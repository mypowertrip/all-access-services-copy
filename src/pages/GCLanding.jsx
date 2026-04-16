import React from 'react';
import LandingNav from '../components/gc/LandingNav';
import LandingHero from '../components/gc/LandingHero';
import LandingPlatform from '../components/gc/LandingPlatform';
import LandingEquipment from '../components/gc/LandingEquipment';
import LandingContact from '../components/gc/LandingContact';
import LandingFooter from '../components/gc/LandingFooter';

export default function GCLanding() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <LandingHero />
      <LandingPlatform />
      <LandingEquipment />
      <LandingContact />
      <LandingFooter />
    </div>
  );
}