import { HeroSection } from '@/src/components/home/HeroSection';
import { FeaturedFunds } from '@/src/components/home/FeaturedFunds';
import { StatsSection } from '@/src/components/home/StatsSection';
import { Testimonials } from '@/src/components/home/Testimonials';
import SIPCalculator from '@/src/components/calculators/SIPCalculator';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <SIPCalculator />
      <FeaturedFunds />
      <Testimonials />
    </div>
  );
}
