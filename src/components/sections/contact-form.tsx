
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFirebase } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email("A valid work email is required"),
  challenge: z.string().min(1, "Please describe your workflow challenge"),
});

export function ContactForm({ page }: { page: 'home' | 'contact' }) {
  const { toast } = useToast();
  const { firestore } = useFirebase();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", challenge: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) {
      toast({
        variant: "destructive",
        title: "Database not available",
        description: "Please try again later.",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const messagesCollection = collection(firestore, "contactMessages");
      const dataToSave = {
        name: 'N/A', // Simplified form
        email: values.email,
        message: `Workflow Challenge: ${values.challenge}`,
        sentAt: serverTimestamp(),
        page: page,
      };

      await addDoc(messagesCollection, dataToSave);

      toast({
        title: "Plan Request Sent!",
        description: "We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
       const e = error as Error;
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: e.message || "Could not send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const isDarkBg = page === 'home';

  const inputClasses = cn(
    "w-full text-base rounded-md py-3 px-4 transition",
    isDarkBg
      ? "bg-deep-blue/50 border-deep-blue text-off-white placeholder:text-sky-blue/50 focus:ring-sky-blue focus:border-sky-blue"
      : "bg-secondary border-sky-blue text-midnight-blue placeholder:text-deep-blue/60 focus:ring-steel-blue focus:border-steel-blue"
  );


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto grid grid-cols-1 gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Your Work Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Work Email" {...field} className={inputClasses} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="challenge"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">What are you looking to automate?</FormLabel>
              <FormControl>
                <Textarea placeholder="What are you looking to automate? (Short answers are fine)" rows={3} {...field} className={inputClasses} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
             <Button type="submit" disabled={isSubmitting} className={cn(
               "flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-base font-bold shadow-lg transition-shadow",
                isDarkBg ? "bg-sky-blue text-midnight-blue hover:bg-off-white" : "bg-deep-blue text-off-white hover:bg-midnight-blue"
             )}>
                 {isSubmitting ? <Loader2 className="animate-spin" /> : <span className="truncate">Request a Plan</span>}
            </Button>
        </div>
      </form>
    </Form>
  );
}
