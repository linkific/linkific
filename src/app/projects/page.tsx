import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProjectsSection from '@/components/sections/projects';

export default function ProjectsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-off-white font-display text-midnight-blue">
      <Header />

      <div className="bg-off-white">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <ProjectsSection />
        </main>
      </div>

      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
              <Footer />
          </main>
      </div>
    </div>
  );
}
