"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const jobOpenings = [
    {
      title: 'HR & Management Specialist',
      location: 'Remote',
      description: 'Lead our HR and management teams in day-to-day operations, recruitment, and company culture initiatives.',
    },
    {
      title: 'React Developer',
      location: 'Remote',
      description: 'Work alongside our frontend team to build and improve user interfaces for our AI-powered applications.',
    },
    {
      title: 'Flutter/Android Developer',
      location: 'Remote',
      description: 'Develop and maintain cross-platform mobile applications for our clients using Flutter and native Android.',
    },
    {
      title: 'Python/Node Backend Developer',
      location: 'Remote',
      description: 'Work with our backend team to build and maintain scalable server-side applications and APIs.',
    },
    {
      title: 'Lead Researcher',
      location: 'Remote',
      description: 'Conduct in-depth research on emerging technologies and market trends to inform our product strategy.',
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote',
      description: 'Join our AI team in developing and training machine learning models for various applications.',
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      description: 'Execute digital marketing campaigns, including SEO, SEM, and social media, to drive brand awareness.',
    },
    {
      title: 'Content Strategist',
      location: 'Remote',
      description: 'Create engaging content for our blog, social media, and marketing materials to attract and educate our audience.',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      description: 'Collaborate with product and engineering to create beautiful, intuitive, and effective user experiences.',
    },
];

const internships = [
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

const PositionCard = ({ job, isDark }: { job: { title: string, location: string, description: string }, isDark?: boolean }) => (
    <div className={cn("p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", isDark ? "bg-deep-blue/30 border border-deep-blue" : "bg-off-white border border-sky-blue/50 shadow-md")}>
        <div>
            <h3 className={cn("text-xl font-bold", isDark ? "text-off-white" : "text-midnight-blue")}>{job.title}</h3>
            <p className={cn("text-sm mt-1", isDark ? "text-sky-blue/70" : "text-deep-blue/70")}>{job.location}</p>
            <p className={cn("mt-2 max-w-2xl", isDark ? "text-sky-blue/80" : "text-deep-blue/80")}>{job.description}</p>
        </div>
        <Button onClick={() => scrollTo('#apply')} className={cn("mt-4 sm:mt-0 flex-shrink-0 flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 text-sm font-bold transition-colors", isDark ? "bg-sky-blue text-midnight-blue hover:bg-off-white" : "bg-steel-blue text-off-white hover:bg-deep-blue")}>
            Apply Now
        </Button>
    </div>
);

export default function OpenPositions() {
  return (
    <section id="open-positions" className="p-8 sm:p-12 rounded-xl bg-off-white border border-sky-blue/50 shadow-md">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-midnight-blue">Open Positions</h2>
        <p className="text-deep-blue/80 mt-2 max-w-2xl mx-auto">
            Ready to make an impact? Find your next role at Linkific.
        </p>
      </div>
      <Tabs defaultValue="jobs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="jobs">Job Openings</TabsTrigger>
          <TabsTrigger value="internships">Internships</TabsTrigger>
        </TabsList>
        <TabsContent value="jobs" className="mt-12">
            <div className="space-y-8">
                {jobOpenings.map((job, index) => (
                    <PositionCard key={`job-${index}`} job={job} />
                ))}
            </div>
        </TabsContent>
        <TabsContent value="internships" className="mt-12">
             <div className="space-y-8">
                {internships.map((job, index) => (
                   <PositionCard key={`internship-${index}`} job={job} />
                ))}
            </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
