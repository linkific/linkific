'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allCaseStudies } from '@/components/sections/projects';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const caseStudy = allCaseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="relative w-full min-h-screen overflow-x-hidden bg-off-white font-display text-midnight-blue">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h1 className="text-4xl font-bold text-midnight-blue">Case Study Not Found</h1>
            <p className="text-deep-blue/80 mt-4">Sorry, we couldn't find the case study you were looking for.</p>
            <Button asChild className="mt-8">
                <Link href="/projects">Back to Case Studies</Link>
            </Button>
        </main>
        <div className="bg-midnight-blue text-off-white">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Footer />
            </main>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-off-white font-display text-midnight-blue">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <article className="space-y-12">
            <header className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-midnight-blue">{caseStudy.title}</h1>
                <p className="text-lg text-deep-blue/80 max-w-3xl mx-auto">{caseStudy.description}</p>
            </header>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-sky-blue/50 transform -skew-x-[10deg]">
                <Image src={caseStudy.imageUrl} alt={caseStudy.alt} layout="fill" objectFit="cover" data-ai-hint={caseStudy['data-ai-hint']} className="transform skew-x-[10deg] scale-125" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="p-8 bg-off-white border border-sky-blue/50 rounded-xl shadow-md transform -skew-x-[10deg]">
                  <div className="transform skew-x-[10deg]">
                    <h2 className="text-2xl font-bold text-midnight-blue mb-4">The Problem</h2>
                    <p className="text-deep-blue/90">{caseStudy.problem}</p>
                  </div>
                </div>
                <div className="p-8 bg-off-white border border-sky-blue/50 rounded-xl shadow-md transform -skew-x-[10deg]">
                  <div className="transform skew-x-[10deg]">
                    <h2 className="text-2xl font-bold text-midnight-blue mb-4">Our Solution</h2>
                    <p className="text-deep-blue/90">{caseStudy.solution}</p>
                  </div>
                </div>
            </div>

            <div className="p-8 sm:p-12 rounded-xl bg-deep-blue/80 text-off-white transform -skew-x-[10deg]">
              <div className="transform skew-x-[10deg]">
                <h2 className="text-3xl font-bold text-center mb-8">Key Results</h2>
                <ul className="space-y-4 max-w-2xl mx-auto">
                    {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="size-6 text-sky-blue flex-shrink-0 mt-1" />
                            <span className="text-sky-blue/90">{result}</span>
                        </li>
                    ))}
                </ul>
              </div>
            </div>
            
             <div className="text-center pt-12">
                <Button asChild size="lg" className="bg-deep-blue text-off-white hover:bg-midnight-blue">
                    <Link href="/contact">Automate Your Workflow</Link>
                </Button>
            </div>

        </article>
      </main>

      <div className="bg-midnight-blue text-off-white" style={{clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%)'}}>
           <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
              <Footer />
          </main>
      </div>
    </div>
  );
}
