import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
 {
 question: "How can I apply for bike finance?",
 answer: "You can apply for bike finance directly through our website by navigating to the 'Finance Enquiry' page, or by selecting a bike from our catalog and clicking 'Apply Finance'. Fill out your basic details, required loan amount, and preferred tenure, and our team will get in touch with you."
 },
 {
 question: "How can I calculate my EMI?",
 answer: "Use our built-in EMI Calculator available in the navigation menu. Simply select the bike you're interested in (or enter a custom amount), adjust your down payment, interest rate, and tenure to see your estimated monthly payments immediately."
 },
 {
 question: "How do I check my EMI schedule?",
 answer: "Once your finance is approved, you will receive login credentials for the Customer Portal. After logging in, you can view your entire EMI schedule, outstanding amount, and upcoming due dates on your personalized dashboard."
 },
 {
 question: "How can I submit EMI payment proof?",
 answer: "Log in to the Customer Portal, navigate to the 'Payments' section, select the pending EMI, enter your transaction reference number (UTR), and upload a screenshot or receipt of your payment. Our team will verify it and update the status."
 },
 {
 question: "How can I access my loan documents?",
 answer: "Your secure loan documents, such as the loan agreement and insurance, are available in the 'Documents' section of your Customer Portal once they are released by our finance system."
 },
 {
 question: "How can I contact Ritika Finance?",
 answer: "You can reach out to us via the Contact page where you'll find our phone numbers, email addresses, and a direct message form. For existing customers, you can also raise a query directly from the Customer Portal."
 }
];

export default function FAQs() {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <div className="pt-24 pb-20 min-h-screen bg-background-alt text-gray-900">
 <div className="container mx-auto px-4 md:px-6">
 <div className="text-center max-w-2xl mx-auto mb-10">
 <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h1>
 <p className="text-gray-600 text-lg">Find answers to common questions about our finance process and services.</p>
 </div>

 <div className="max-w-3xl mx-auto space-y-4">
 {faqs.map((faq, index) => (
 <div 
 key={index} 
 className="bg-white border border-gray-100 overflow-hidden shadow-sm"
 >
 <button
 className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
 onClick={() => setOpenIndex(openIndex === index ? null : index)}
 >
 <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
 <div className={`w-8 h-8 flex items-center justify-center transition-colors ${openIndex === index ? 'bg-accent/10 text-accent' : 'bg-[#D1DCE2] text-gray-400'}`}>
 <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
 </div>
 </button>
 
 <AnimatePresence>
 {openIndex === index && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 >
 <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
 {faq.answer}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
}
