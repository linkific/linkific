'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export const allCaseStudies = [
  {
    slug: 'automated-support-chatbot-for-healthcare',
    title: 'Automated Support Chatbot for Healthcare',
    industry: 'Healthcare',
    problem:
      'The client handled high-volume repetitive support questions and manual booking steps that slowed response time and required staff involvement.',
    solution:
      'Built a chatbot that automated query handling, appointment routing and information retrieval.',
    financeCapability:
      'Shows ability to automate structured decision trees, handle sensitive data and reduce repetitive inquiries traditionally done by staff.',
    outcome:
      'Reduced incoming manual workload and improved response consistency.',
    tech: 'Python, AI models',
    client: 'Yourva Healthcare',
    positioningTag: 'Automating repetitive process based communication.',
    imageUrl: 'https://picsum.photos/seed/chatbot-1/800/600',
    alt: 'AI chatbot interface for healthcare',
    'data-ai-hint': 'support chatbot',
  },
  {
    slug: 'ai-assisted-data-transfer-for-ehr-systems',
    title: 'AI Assisted Data Transfer for EHR Systems',
    industry: 'Health technology',
    problem:
      'Users manually moved structured data between multiple systems, creating errors and delays.',
    solution:
      'Built an automation layer that extracted, validated and transferred data between systems with minimal manual effort.',
    financeCapability:
      'Mirrors finance data movement workflows such as reconciliation, reporting consolidation and system integration. Shows skill in handling structured compliance sensitive data.',
    outcome: 'Faster processing and reduced manual workload.',
    tech: 'React, REST APIs',
    client: 'Chime EHR',
    positioningTag: 'Workflow automation with multi system integration.',
    imageUrl: 'https://picsum.photos/seed/ehr-2/800/600',
    alt: 'Data transfer visualization between systems',
    'data-ai-hint': 'data transfer',
  },
  {
    slug: 'poultry-farm-process-tracking-application',
    title: 'Poultry Farm Process Tracking Application',
    industry: 'Agriculture operations',
    problem:
      'Records and recurring operational inputs were tracked manually leading to inefficiencies.',
    solution:
      'Built a mobile system to record, monitor and automate routine operational data capture.',
    financeCapability:
      'Demonstrates automation for recurring records, auditability, event triggers and structured input tracking.',
    outcome: 'Greater operational clarity and reduced manual entry.',
    tech: 'Kotlin',
    client: 'Janki Farms',
    positioningTag: 'Operational workflow digitization.',
    imageUrl: 'https://picsum.photos/seed/farm-3/800/600',
    alt: 'Mobile app for farm data tracking',
    'data-ai-hint': 'farm mobile',
  },
  {
    slug: 'ai-kiosk-ordering-system-with-gesture-detection',
    title: 'AI Kiosk Ordering System with Gesture Detection',
    industry: 'Hospitality',
    problem: 'Ordering workflows required manual handling and caused delays.',
    solution:
      'Built a workflow system triggered by user actions with automated routing and backend integration.',
    financeCapability:
      'Shows automated process logic, human input interpretation and backend system orchestration.',
    outcome: 'Reduced wait time and improved repeatability.',
    tech: 'Python, YOLO',
    client: 'H Solos',
    positioningTag: 'Human action to automated workflow logic.',
    imageUrl: 'https://picsum.photos/seed/kiosk-4/800/600',
    alt: 'AI kiosk with gesture detection',
    'data-ai-hint': 'ordering kiosk',
  },
  {
    slug: 'pose-detection-for-decision-classification',
    title: 'Pose Detection for Decision Classification',
    industry: 'Security',
    problem:
      'The system needed automated classification to take the right action without manual review.',
    solution:
      'Built a model that detected and classified pose signals in real time.',
    financeCapability:
      'Demonstrates ability to automate decision-making logic similar to approval or exception workflows.',
    outcome: 'Improved decision speed without manual checking.',
    tech: 'Tensorflow, ML',
    client: 'H Solos',
    positioningTag: 'Automated decision classification.',
    imageUrl: 'https://picsum.photos/seed/pose-5/800/600',
    alt: 'Pose detection algorithm visualization',
    'data-ai-hint': 'pose detection',
  },
  {
    slug: 'computer-vision-monitoring-for-restaurant-operations',
    title: 'Computer Vision Monitoring for Restaurant Operations',
    industry: 'Hospitality',
    problem:
      'Staff spent time tracking operational triggers manually like table status and service needs.',
    solution: 'Built automated detection and alert system.',
    financeCapability:
      'Proven automation of exception tracking, alerting logic and operational compliance.',
    outcome: 'Faster response and reduced manual oversight.',
    tech: 'ML, Python',
    client: 'H Solos',
    positioningTag: 'Exception automation with smart triggers.',
    imageUrl: 'https://picsum.photos/seed/vision-6/800/600',
    alt: 'Computer vision monitoring a restaurant',
    'data-ai-hint': 'restaurant monitoring',
  },
  {
    slug: 'intelligent-document-classification',
    title: 'Intelligent Document Classification',
    industry: 'Paper to digital transformation',
    problem:
      'Large volumes of documents needed to be identified and routed.',
    solution: 'Built ML model to classify documents automatically.',
    financeCapability:
      'Direct alignment with invoice classification, KYC, statement processing and compliance mapping.',
    outcome: 'Faster processing and reduced manual sorting.',
    tech: 'Transfer learning',
    client: 'Samta AI',
    positioningTag: 'Document understanding automation.',
    imageUrl: 'https://picsum.photos/seed/docs-7/800/600',
    alt: 'AI classifying different document types',
    'data-ai-hint': 'document classification',
  },
  {
    slug: 'ai-integrated-sales-and-workflow-tool',
    title: 'AI Integrated Sales and Workflow Tool',
    industry: 'Operations',
    problem: 'A fragmented workflow required manual steps across systems.',
    solution:
      'Built a coordinated automation platform with AI handling routing, notes and next actions.',
    financeCapability:
      'Similar to integrating accounting tools, approval layers and reporting logic into one automated system.',
    outcome: 'Reduced manual coordination and better workflow consistency.',
    tech: 'Python, React',
    client: 'Breakout Rooms',
    positioningTag: 'End to end workflow automation.',
    imageUrl: 'https://picsum.photos/seed/sales-8/800/600',
    alt: 'Integrated sales workflow dashboard',
    'data-ai-hint': 'sales workflow',
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

const CaseStudyCard = ({ caseStudy, index }: { caseStudy: typeof allCaseStudies[0], index: number }) => (
    <motion.div 
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-4 rounded-xl bg-off-white border border-sky-blue/50 p-4 h-full group hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm shadow-md">
        <div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
               <Image src={caseStudy.imageUrl} alt={caseStudy.alt} fill className="object-cover" data-ai-hint={caseStudy['data-ai-hint']} />
          </div>
          <div className="flex flex-col flex-1 justify-between gap-4 pt-4">
              <div>
                  <p className="text-midnight-blue text-lg font-medium">{caseStudy.title}</p>
                  <p className="text-deep-blue/80 text-sm mt-1">{caseStudy.outcome}</p>
              </div>
              <Button asChild variant="secondary" className="w-full h-10 px-4 font-bold bg-steel-blue text-off-white hover:bg-deep-blue transition-colors">
                  <Link href={`/case-studies/${caseStudy.slug}`}>View Case Study</Link>
              </Button>
          </div>
        </div>
    </motion.div>
);


export default function CaseStudiesSection({ featured = false }: { featured?: boolean }) {
    const caseStudies = featured ? allCaseStudies.slice(0, 3) : allCaseStudies;
    const headline = featured ? "See how we've transformed finance operations for businesses like yours." : "Automation experience across regulated and high complexity workflows.";
    
    return (
        <section className="pt-24 sm:pt-32" id="projects">
            <h2 className="text-midnight-blue text-3xl font-bold text-center">Case Studies</h2>
            <p className="text-deep-blue/80 text-center mt-2 mb-12 max-w-2xl mx-auto">{headline}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {caseStudies.map((caseStudy, index) => (
                    <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
                ))}
            </div>
             {featured && (
                <div className="mt-12 text-center">
                     <Button asChild className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-deep-blue text-off-white text-base font-bold shadow-lg hover:bg-midnight-blue transition-shadow mx-auto w-fit">
                        <Link href="/projects">
                            <span className="inline-block transform skew-x-[10deg]">View All Case Studies</span>
                        </Link>
                    </Button>
                </div>
            )}
        </section>
    );
}
