import { HeroSection } from '@/src/components/home/HeroSection';
import { FeaturedFunds } from '@/src/components/home/FeaturedFunds';
import { StatsSection } from '@/src/components/home/StatsSection';
import { Testimonials } from '@/src/components/home/Testimonials';
import { LearnPreview } from '@/src/components/home/LearnPreview';
import SIPCalculator from '@/src/components/calculators/SIPCalculator';
import AboutPage from './about/page';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <LearnPreview />
      <SIPCalculator />
      <FeaturedFunds />
      <Testimonials />
      <AboutPage />
    </div>
  );
}
