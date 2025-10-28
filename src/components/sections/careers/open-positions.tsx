"use client";

import { Button } from "@/components/ui/button";

const jobOpenings = [
    {
      title: 'HR & Management Intern',
      location: 'Remote',
      description: 'Support our HR and management teams with day-to-day operations, recruitment, and company culture initiatives.',
    },
    {
      title: 'React Developer Intern',
      location: 'Remote',
      description: 'Work alongside our frontend team to build and improve user interfaces for our AI-powered applications.',
    },
    {
      title: 'Flutter/Android Intern',
      location: 'Remote',
      description: 'Develop and maintain cross-platform mobile applications for our clients using Flutter and native Android.',
    },
    {
      title: 'Python/Node Backend Intern',
      location: 'Remote',
      description: 'Work with our backend team to build and maintain scalable server-side applications and APIs.',
    },
    {
      title: 'Research Intern',
      location: 'Remote',
      description: 'Conduct in-depth research on emerging technologies and market trends to inform our product strategy.',
    },
    {
      title: 'AI/ML Intern',
      location: 'Remote',
      description: 'Assist our AI team in developing and training machine learning models for various applications.',
    },
    {
      title: 'Digital Marketing Intern',
      location: 'Remote',
      description: 'Execute digital marketing campaigns, including SEO, SEM, and social media, to drive brand awareness.',
    },
    {
      title: 'Content Creation Intern',
      location: 'Remote',
      description: 'Create engaging content for our blog, social media, and marketing materials to attract and educate our audience.',
    },
    {
      title: 'Designer Intern',
      location: 'Remote',
      description: 'Collaborate with product and engineering to create beautiful, intuitive, and effective user experiences.',
    },
];

const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default function OpenPositions() {
  return (
    <section id="open-positions" className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Current Openings</h2>
            <p className="text-white/70 mt-2 max-w-2xl mx-auto">
                Find your place at Linkific. We’re looking for passionate learners to join our intern team.
            </p>
        </div>
        <div className="space-y-8">
            {jobOpenings.map((job, index) => (
            <div key={index} className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-white/60 text-sm mt-1">{job.location}</p>
                <p className="text-white/70 mt-2 max-w-2xl">{job.description}</p>
                </div>
                <Button onClick={() => scrollTo('#apply')} className="mt-4 sm:mt-0 flex-shrink-0 flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition-colors">
                    Apply Now
                </Button>
            </div>
            ))}
        </div>
    </section>
  );
}
