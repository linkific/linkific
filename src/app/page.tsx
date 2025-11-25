
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import Footer from '@/components/layout/footer';
import ProcessSection from '@/components/sections/process';
import SocialProof from '@/components/sections/social-proof';
import ValueProps from '@/components/sections/value-props';
import Features from '@/components/sections/features';
import Faq from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';

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

      {/* Social Proof - White BG */}
      <div className="bg-off-white">
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
              <SocialProof />
          </main>
      </div>

       {/* Value Propositions - Dark Blue BG */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <ValueProps />
          </main>
      </div>
      
      {/* Features Section - White BG */}
      <div className="bg-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <Features />
          </main>
      </div>

      {/* Process Section - Dark Blue BG */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <ProcessSection />
          </main>
      </div>
      
      {/* FAQ Section - White BG */}
       <div className="bg-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <Faq />
          </main>
      </div>

      {/* Contact Section - Dark Blue BG */}
      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
              <ContactSection />
          </main>
      </div>

      {/* Footer Section - Dark Blue BG */}
      <div className="bg-midnight-blue text-off-white">
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Footer />
          </main>
      </div>
    </div>
  );
}
