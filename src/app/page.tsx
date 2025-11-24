
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import KpiSection from '@/components/sections/kpi';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import ProcessSection from '@/components/sections/process';
import ProjectsSection from '@/components/sections/projects';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-off-white font-display text-midnight-blue">
      <Header />

      {/* Hero Section - White BG */}
      <div className="bg-off-white">
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <HeroSection />
          </main>
      </div>

      {/* Process Section - Dark Blue BG with top diagonal clip */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <ProcessSection />
          </main>
      </div>
      
      {/* Projects Section - White BG with top diagonal clip */}
      <div className="bg-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <ProjectsSection featured={true}/>
          </main>
      </div>

      {/* KPI Section - Dark Blue BG with top diagonal clip */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <KpiSection />
          </main>
      </div>

      {/* Services Section - White BG with top diagonal clip */}
      <div className="bg-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <ServicesSection />
          </main>
      </div>

      {/* Contact Section - Dark Blue BG with top diagonal clip */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <ContactSection />
          </main>
      </div>

      {/* Footer Section - Dark Blue BG without diagonal clip */}
      <div className="bg-midnight-blue text-off-white">
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Footer />
          </main>
      </div>
    </div>
  );
}
