'use client';
import { motion } from 'framer-motion';
import { Hourglass, Scale, Cog } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const valueProps = [
    {
        icon: Hourglass,
        title: 'You save time on complex recurring tasks.',
        description: 'Before-and-after examples show how we transform tedious, multi-step processes into a single, automated flow, turning hours of work into minutes.',
        microcopy: 'Save hours, not minutes.',
    },
    {
        icon: Cog,
        title: 'You get automation tailored to your exact process.',
        description: 'Our solutions are built around your unique needs. We handle the custom logic and exceptions that off-the-shelf tools can\'t manage.',
        microcopy: 'Built for your workflow.',
    },
    {
        icon: Scale,
        title: 'You scale without hiring more people.',
        description: 'Handle growing transaction volumes and complexity without expanding your headcount. Our automation grows with you, delivering a clear return on investment.',
        microcopy: 'Grow without extra headcount.',
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

export default function ValueProps() {
    return (
        <section id="value-props" className="pt-24 sm:pt-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {valueProps.map((prop, index) => (
                    <motion.div 
                        key={index} 
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="p-8 rounded-xl bg-deep-blue/30 border border-deep-blue"
                    >
                        <div className="h-full flex flex-col">
                          <div className="flex items-center justify-center size-16 rounded-full bg-sky-blue text-midnight-blue mb-6">
                              <prop.icon className="size-8" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-off-white">{prop.title}</h3>
                          <p className="text-sky-blue/70 text-sm flex-grow mb-4">{prop.description}</p>
                          <p className="font-bold text-sky-blue text-sm">{prop.microcopy}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
             <div className="mt-16 text-center bg-deep-blue/30 border border-deep-blue rounded-xl p-8">
                <div>
                  <h3 className="text-xl font-bold text-off-white">How we automated a full approval chain</h3>
                  <p className="text-sky-blue/70 my-2">Case Study Preview</p>
                    <Button asChild variant="secondary" className="mt-2 bg-sky-blue text-midnight-blue hover:bg-off-white">
                      <Link href="/case-studies/automated-approval-workflows">
                        Read the Case Study
                      </Link>
                  </Button>
                </div>
            </div>
        </section>
    );
}
