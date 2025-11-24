import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ApplicationForm from '@/components/sections/careers/application-form';
import CareersHero from '@/components/sections/careers/careers-hero';
import OpenPositions from '@/components/sections/careers/open-positions';
import WhyWorkWithUs from '@/components/sections/careers/why-work-with-us';

export default function CareersPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white font-display text-black">
      <Header />
      
      {/* Hero - White BG */}
      <div className="bg-white">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <CareersHero />
        </main>
      </div>

      {/* Why Work With Us - Dark Blue BG */}
      <div className="bg-dark-blue text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <WhyWorkWithUs />
        </main>
      </div>
      
      {/* Open Positions - White BG */}
      <div className="bg-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <OpenPositions />
        </main>
      </div>

      {/* Application Form - Dark Blue BG */}
      <div className="bg-dark-blue text-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <ApplicationForm />
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
