import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CodeRainBackground } from '@/components/layout/code-rain-background';
import { Button } from '@/components/ui/button';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    location: 'Remote',
    description: 'We are looking for an experienced AI engineer to work on our next-generation automation platform.',
  },
  {
    title: 'Frontend Developer (React)',
    location: 'New York, NY',
    description: 'Join our frontend team to build beautiful and performant user interfaces for our clients.',
  },
  {
    title: 'Product Manager - AI Solutions',
    location: 'Remote',
    description: 'Define the future of our AI products and work with cross-functional teams to bring them to life.',
  },
];

export default function CareersPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join Our Team</h1>
              <p className="text-white/70 text-lg max-w-3xl mx-auto">
                We're always looking for talented individuals who are passionate about building the future of AI.
              </p>
            </div>
            
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div key={index} className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{job.location}</p>
                    <p className="text-white/70 mt-2">{job.description}</p>
                  </div>
                   <Button asChild className="mt-4 sm:mt-0 flex-shrink-0">
                      <a href="#" className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-md hover:shadow-primary/50 transition-shadow">
                        Apply Now
                      </a>
                   </Button>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
