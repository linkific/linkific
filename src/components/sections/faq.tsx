
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What can you automate?",
    answer: "We automate recurring finance tasks like reconciliation, approvals, reporting, and other workflows that involve manual data entry, validation, or movement between systems.",
  },
  {
    question: "Do you replace our existing tools?",
    answer: "No, we integrate with and enhance your existing tools. Our solutions fill the gaps where your current software can't handle unique steps, exceptions, or cross-platform workflows.",
  },
  {
    question: "How long does a project take?",
    answer: "A simple, well-defined workflow can be automated in as little as 1-2 weeks. More complex systems that involve multiple integrations and custom logic typically take longer, but we deliver value incrementally.",
  },
  {
    question: "Is the solution scalable?",
    answer: "Yes. We build our solutions on robust architecture that is designed to grow with your transaction volume and business complexity without a drop in performance.",
  },
  {
    question: "How do we get started?",
    answer: "The first step is to fill out our contact form. We'll schedule a brief call to understand your process and primary challenges, then provide a custom automation plan.",
  },
  {
    question: "Is there ongoing support?",
    answer: "Yes, we offer flexible support and maintenance plans to ensure your automation continues to run smoothly. We can also iterate and improve the system as your business needs evolve.",
  },
    {
    question: "Custom solutions sound expensive. What is the cost?",
    answer: "The cost is based on the complexity of the workflow and the estimated hours of manual labor it saves. Most of our clients see a significant return on investment quickly. A small pilot project is a great way to start and prove value.",
  },
  {
    question: "We cannot risk errors in our finance process.",
    answer: "We agree. Every workflow we build includes rigorous testing, validation rules, and audit-friendly logs that track every action. This ensures accuracy and provides complete transparency for compliance.",
  }
]

export default function Faq() {
  return (
    <section id="faq" className="py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-midnight-blue">Frequently Asked Questions</h2>
        <p className="text-deep-blue/80 mt-2">
          Answering your key questions about how custom automation works.
        </p>
      </div>
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-sky-blue/50">
              <AccordionTrigger className="text-left text-lg font-medium text-midnight-blue hover:text-steel-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-deep-blue/90">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
