'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { allCaseStudies } from '@/components/sections/projects';
import Image from 'next/image';
import { CheckCircle, Briefcase, Bot, Code } from 'lucide-react';
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
                <p className="font-bold text-steel-blue">{caseStudy.positioningTag}</p>
                <h1 className="text-4xl sm:text-5xl font-bold my-2 text-midnight-blue">{caseStudy.title}</h1>
                 <div className="flex justify-center gap-6 text-sm text-deep-blue/80 mt-4">
                    <span>Industry: <span className="font-semibold">{caseStudy.industry}</span></span>
                    <span>Client: <span className="font-semibold">{caseStudy.client}</span></span>
                    <span>Tech: <span className="font-semibold">{caseStudy.tech}</span></span>
                </div>
            </header>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-sky-blue/50">
                <Image src={caseStudy.imageUrl} alt={caseStudy.alt} layout="fill" objectFit="cover" data-ai-hint={caseStudy['data-ai-hint']} />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-off-white border border-sky-blue/50 rounded-xl shadow-md">
                  <div>
                    <h2 className="text-2xl font-bold text-midnight-blue mb-4">The Problem</h2>
                    <p className="text-deep-blue/90">{caseStudy.problem}</p>
                  </div>
                </div>
                <div className="p-8 sm:p-10 rounded-xl bg-deep-blue/80 text-off-white">
                  <div>
                    <h2 className="text-2xl font-bold text-off-white mb-4">Our Solution</h2>
                    <p className="text-sky-blue/90">{caseStudy.solution}</p>
                  </div>
                </div>
            </div>

            <div className="p-8 sm:p-10 rounded-xl bg-off-white border border-sky-blue/50 shadow-md">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Finance Capability</h2>
                    <p className="text-deep-blue/90">{caseStudy.financeCapability}</p>
                </div>
                <div className="p-6 rounded-lg bg-steel-blue/10 border border-steel-blue/50">
                    <h3 className="text-xl font-bold text-midnight-blue mb-2">Outcome</h3>
                    <p className="text-deep-blue/90">{caseStudy.outcome}</p>
                </div>
              </div>
            </div>
            
             <div className="text-center pt-8">
                <Button asChild size="lg">
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
