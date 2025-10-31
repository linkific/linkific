"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useFirebase } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

const formSchema = z.object({
  name: z.string().min(1, "Your Name is required"),
  email: z.string().email("A valid email is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  role: z.string().min(1, "Please select a role"),
  resume: z.any()
    .refine(files => files?.length === 1, "Resume is required.")
    .refine(files => files?.[0]?.size <= 5000000, `Max file size is 5MB.`)
    .refine(
      files => ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(files?.[0]?.type),
      ".pdf, .doc, and .docx files are accepted."
    ),
  reason: z.string().min(10, "Please tell us a bit more (min. 10 characters)"),
});

const jobOpenings = [
  'HR & Management Specialist',
  'React Developer',
  'Flutter/Android Developer',
  'Python/Node Backend Developer',
  'Lead Researcher',
  'AI/ML Engineer',
  'Digital Marketing Specialist',
  'Content Strategist',
  'UI/UX Designer',
];

const internships = [
  'HR & Management Intern',
  'React Developer Intern',
  'Flutter/Android Intern',
  'Python/Node Backend Intern',
  'Research Intern',
  'AI/ML Intern',
  'Digital Marketing Intern',
  'Content Creation Intern',
  'Designer Intern',
];

export default function ApplicationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { firestore, firebaseApp } = useFirebase();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", contactNumber: "", role: "", reason: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore || !firebaseApp) {
      toast({
        variant: "destructive",
        title: "Services not available",
        description: "Please try again later.",
      });
      return;
    }
    setIsSubmitting(true);
    
    const { resume, ...formData } = values;
    const resumeFile = resume[0];

    try {
      // 1. Upload resume to Firebase Storage
      const storage = getStorage(firebaseApp);
      // Create a unique path for the resume to avoid overwrites
      const storagePath = `resumes/${uuidv4()}/${resumeFile.name}`;
      const storageRef = ref(storage, storagePath);
      const uploadResult = await uploadBytes(storageRef, resumeFile);
      const resumeUrl = await getDownloadURL(uploadResult.ref);

      // 2. Save application data to Firestore
      const applicationsCollection = collection(firestore, "jobApplications");
      await addDoc(applicationsCollection, {
        ...formData,
        resumeUrl, // Save the actual download URL string
        submittedAt: serverTimestamp(),
      });
      
      setIsSuccess(true);
      toast({
        title: "Application Sent!",
        description: "We'll get back to you shortly.",
      });
      form.reset();
      
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      const e = error as Error;
      console.error("Application submission error: ", e);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: e.message || "Could not send application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="apply" className="p-8 sm:p-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
        <AnimatePresence mode="wait">
            {isSuccess ? (
                 <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="text-center py-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Welcome to Failing Out Success!</h2>
                    <p className="text-white/70">Your application has been received. We're excited to learn more about you.</p>
                </motion.div>
            ) : (
            <motion.div key="form">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
                    <p className="text-white/70 mb-8">Join our mission to innovate and learn. Fill out the form below to get started.</p>
                </div>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="sr-only">Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Full Name" {...field} className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="sr-only">Your Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="Your Email" {...field} className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                        <FormLabel className="sr-only">Contact Number</FormLabel>
                        <FormControl>
                            <Input type="tel" placeholder="Contact Number" {...field} className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem className="sm:col-span-2">
                                <FormLabel className="sr-only">Role Applying For</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition h-auto">
                                            <SelectValue placeholder="Select a role to apply for" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Job Openings</SelectLabel>
                                            {jobOpenings.map(role => (
                                                <SelectItem key={role} value={role}>{role}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectLabel>Internships</SelectLabel>
                                            {internships.map(role => (
                                                <SelectItem key={role} value={role}>{role}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="resume"
                        render={({ field: { onChange, ...fieldProps } }) => (
                            <FormItem className="sm:col-span-2">
                                <FormLabel>Resume</FormLabel>
                                <FormControl>
                                    <Input 
                                      {...fieldProps}
                                      type="file" 
                                      accept=".pdf,.doc,.docx"
                                      onChange={(e) => onChange(e.target.files)}
                                      className="w-full bg-white/5 border border-white/20 rounded-lg text-white file:text-white/80 placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                        <FormLabel className="sr-only">Why do you want to join Linkific?</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Why do you want to join Linkific?" rows={4} {...field} className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="sm:col-span-2 flex justify-center">
                        <Button type="submit" disabled={isSubmitting} className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-lg hover:shadow-primary/50 transition-shadow">
                            {isSubmitting ? (
                                <Loader2 className="animate-spin" />
                            ) : (
                                <span className="truncate">Submit Application</span>
                            )}
                        </Button>
                    </div>
                </form>
                </Form>
            </motion.div>
         )}
        </AnimatePresence>
    </section>
  );
}

    