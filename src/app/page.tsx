import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import ServicesSection from '@/components/sections/services';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background-dark font-display text-white">
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
