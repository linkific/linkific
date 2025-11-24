import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CompanyOverview from '@/components/sections/company-overview';
import Timeline from '@/components/sections/timeline';
import Philosophy from '@/components/sections/philosophy';
import VisionMissionValues from '@/components/sections/vision-mission-values';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white font-display text-black">
      <Header />
      
      {/* Company Overview - White BG */}
      <div className="bg-white">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <CompanyOverview />
        </main>
      </div>

      {/* Timeline - Dark Blue BG */}
      <div className="bg-dark-blue text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <Timeline />
        </main>
      </div>
      
      {/* Philosophy - White BG */}
      <div className="bg-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <Philosophy />
        </main>
      </div>

      {/* Vision/Mission - Dark Blue BG */}
      <div className="bg-dark-blue text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <VisionMissionValues />
        </main>
      </div>

      {/* Footer - Dark Blue BG */}
      <div className="bg-dark-blue text-white">
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Footer />
          </main>
      </div>
    </div>
  );
}
