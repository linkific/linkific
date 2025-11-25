'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export const allCaseStudies = [
    {
        slug: "automated-invoice-processing",
        title: "Automated Invoice Processing",
        description: "Reduced manual data entry by 95% and cut down invoice processing time from days to minutes for a mid-sized enterprise.",
        imageUrl: "https://picsum.photos/seed/finance-1/800/600",
        alt: "Abstract visualization of invoice data being processed",
        "data-ai-hint": "finance invoice",
        problem: "A growing mid-sized enterprise was struggling with a high volume of supplier invoices. The manual process involved data entry, validation against purchase orders, and routing for approvals, leading to frequent delays, errors, and late payment penalties.",
        solution: "We designed and implemented a custom automation solution that used AI to extract data from incoming invoices (PDFs and emails). The system automatically matched invoices to POs, flagged exceptions for human review, and routed approved invoices directly into their accounting system.",
        results: [
            "95% reduction in manual data entry.",
            "Invoice processing cycle reduced from 3-5 days to under 15 minutes.",
            "Eliminated late payment fees, saving over $15,000 annually.",
            "Freed up the AP team to focus on vendor relations and financial analysis."
        ]
    },
    {
        slug: "real-time-expense-reconciliation",
        title: "Real-time Expense Reconciliation",
        description: "Enabled a financial services firm to achieve 99% accuracy in expense reporting and gain real-time visibility into spending.",
        imageUrl: "https://picsum.photos/seed/finance-2/800/600",
        alt: "Dashboard showing real-time expense data",
        "data-ai-hint": "finance dashboard",
        problem: "A financial services firm with a large sales team faced significant challenges with month-end expense reconciliation. The process was slow, error-prone, and provided no real-time visibility into corporate spending, making budget management difficult.",
        solution: "We built a solution that integrated with their corporate credit card provider and existing accounting software. The system automatically categorized transactions, applied company policies, and flagged out-of-policy spending in real-time. Employees could simply photograph receipts, and the AI would handle the rest.",
        results: [
            "Month-end closing time for expenses reduced by 80%.",
            "Achieved 99% accuracy in expense reporting.",
            "Provided management with a real-time dashboard of team spending.",
            "Improved employee satisfaction by simplifying the reporting process."
        ]
    },
    {
        slug: "automated-approval-workflows",
        title: "Automated Approval Workflows",
        description: "Streamlined multi-level approval chains for a manufacturing company, reducing approval times by over 70%.",
        imageUrl: "https://picsum.photos/seed/finance-3/800/600",
        alt: "Diagram of an automated workflow",
        "data-ai-hint": "workflow diagram",
        problem: "A large manufacturing company's procurement process was hampered by a complex, manual approval workflow. Purchase requests required multiple sign-offs, often getting lost in email chains, which delayed critical procurement and production.",
        solution: "We developed a centralized system with dynamic, AI-based decision routing. The system automatically determined the required approvers based on the request's department, amount, and category. It sent automated reminders and escalated stalled requests, providing full visibility into the approval chain.",
        results: [
            "Reduced average approval time from 7 days to less than 2 days.",
            "Eliminated the issue of 'lost' requests and process bottlenecks.",
            "Created a complete, auditable trail for every purchase request.",
            "Increased operational efficiency and reduced procurement-related production delays."
        ]
    }
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
        className="flex flex-col gap-4 rounded-xl bg-off-white border border-sky-blue/50 p-4 h-full group hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm shadow-md transform -skew-x-[10deg]">
        <div className="transform skew-x-[10deg]">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
               <Image src={caseStudy.imageUrl} alt={caseStudy.alt} fill className="object-cover" data-ai-hint={caseStudy['data-ai-hint']} />
          </div>
          <div className="flex flex-col flex-1 justify-between gap-4 pt-4">
              <div>
                  <p className="text-midnight-blue text-lg font-medium">{caseStudy.title}</p>
                  <p className="text-deep-blue/80 text-sm mt-1">{caseStudy.description}</p>
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
    return (
        <section className="pt-24 sm:pt-32" id="projects">
            <h2 className="text-midnight-blue text-3xl font-bold text-center">Case Studies</h2>
            <p className="text-deep-blue/80 text-center mt-2 mb-12 max-w-2xl mx-auto">See how we've transformed finance operations for businesses like yours.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {caseStudies.map((caseStudy, index) => (
                    <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
                ))}
            </div>
             {featured && (
                <div className="mt-12 text-center">
                     <Button asChild className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-deep-blue text-off-white text-base font-bold shadow-lg hover:bg-midnight-blue transition-shadow mx-auto w-fit">
                        <Link href="/projects">
                            <span className="truncate">View All Case Studies</span>
                        </Link>
                    </Button>
                </div>
            )}
        </section>
    );
}
