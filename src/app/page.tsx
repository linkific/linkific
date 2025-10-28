import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background-dark font-display text-white">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-40 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 animate-[spin_30s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <HeroSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
