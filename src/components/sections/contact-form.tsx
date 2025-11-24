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
  name: z.string().min(1, "Your Name is required"),
  email: z.string().email("A valid email is required"),
  message: z.string().min(1, "Your Message is required"),
});

export function ContactForm({ page }: { page: 'home' | 'contact' }) {
  const { toast } = useToast();
  const { firestore } = useFirebase();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
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
        ...values,
        sentAt: serverTimestamp(),
        page: page,
      };

      await addDoc(messagesCollection, dataToSave);

      toast({
        title: "Message Sent!",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} className={inputClasses} />
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
                <Input type="email" placeholder="Your Email" {...field} className={inputClasses} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel className="sr-only">Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your Message" rows={4} {...field} className={inputClasses} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sm:col-span-2 flex justify-center">
             <Button type="submit" disabled={isSubmitting} className={cn(
               "flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-base font-bold shadow-lg transition-shadow",
                isDarkBg ? "bg-sky-blue text-midnight-blue hover:bg-off-white" : "bg-steel-blue text-off-white hover:bg-deep-blue"
             )}>
                 {isSubmitting ? <Loader2 className="animate-spin" /> : <span className="truncate">Send Message</span>}
            </Button>
        </div>
      </form>
    </Form>
  );
}
