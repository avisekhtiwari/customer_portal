import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
 return (
 <div className="pt-24 pb-20 min-h-screen bg-background text-gray-900">
 <div className="container mx-auto px-4 md:px-6">
 <div className="text-center max-w-2xl mx-auto mb-16">
 <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
 <p className="text-gray-600 text-lg">We're here to help you get on the road. Reach out to us with any questions.</p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
 {/* Contact Info */}
 <div className="space-y-8">
 <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
 <h3 className="text-2xl font-bold mb-6">Head Office</h3>
 
 <div className="space-y-6">
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
 <MapPin className="w-5 h-5" />
 </div>
 <div>
 <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
 <p className="text-gray-600">
 123 Finance Street, Business District,<br />
 Mumbai, Maharashtra 400001
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
 <Phone className="w-5 h-5" />
 </div>
 <div>
 <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
 <p className="text-gray-600">1800-123-4567</p>
 <p className="text-gray-600">+91 98765 43210</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
 <Mail className="w-5 h-5" />
 </div>
 <div>
 <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
 <p className="text-gray-600">support@ritikafinance.com</p>
 <p className="text-gray-600">loans@ritikafinance.com</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-accent shadow-sm shrink-0 border border-gray-100">
 <Clock className="w-5 h-5" />
 </div>
 <div>
 <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
 <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
 <p className="text-gray-600">Sunday: Closed</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Contact Form */}
 <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
  <form className="space-y-6" onSubmit={(e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  }}>
  <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
  <input 
  type="text" 
  defaultValue={typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('ritika_user') || 'null')?.name || 'Jane Doe' : 'Jane Doe'}
  className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
  placeholder="John Doe"
  />
  </div>
  
  <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
  <input 
  type="email" 
  defaultValue="jane.doe@example.com"
  className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
  placeholder="john@example.com"
  />
  </div>

  <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
  <input 
  type="text" 
  defaultValue="Question regarding two-wheeler loan"
  className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
  placeholder="How can we help?"
  />
  </div>

  <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
  <textarea 
  rows={4}
  defaultValue="Hi, I would like to know more about the interest rates for a Honda Shine. Please get back to me."
  className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
  placeholder="Write your message here..."
  ></textarea>
  </div>

 <button 
 type="submit"
 className="w-full rounded-full bg-accent hover:bg-accent/90 text-white py-4 font-bold transition-colors"
 >
 Send Message
 </button>
 </form>
 </div>
 </div>
 </div>
 </div>
 );
}
