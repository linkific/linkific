import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CodeRainBackground } from '@/components/layout/code-rain-background';
import CompanyOverview from '@/components/sections/company-overview';
import Timeline from '@/components/sections/timeline';
import Philosophy from '@/components/sections/philosophy';
import VisionMissionValues from '@/components/sections/vision-mission-values';


export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
          <CompanyOverview />
          <Timeline />
          <Philosophy />
          <VisionMissionValues />
        </main>
        <Footer />
      </div>
    </div>
  );
}
