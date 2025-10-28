import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CodeRainBackground } from '@/components/layout/code-rain-background';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Linkific</h1>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                We are a team of passionate innovators, developers, and strategists dedicated to pushing the boundaries of what's possible with artificial intelligence.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-white/70 mb-6">
                  Our mission is to empower businesses with intelligent automation and custom software solutions that drive growth, efficiency, and transformation. We believe in building technology that not only solves complex problems but also creates a better future.
                </p>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-white/70">
                  We envision a world where AI and human ingenuity work in harmony to create smarter businesses and more intuitive experiences for everyone.
                </p>
              </div>
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/teamwork/800/600" alt="Our Team" layout="fill" objectFit="cover" data-ai-hint="teamwork collaboration" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
