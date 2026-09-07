import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#D1DCE2] font-sans text-gray-900 selection:bg-[#04407E] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We're here to help you hit the road. Reach out to our dedicated support team for any queries.
        </p>
      </section>

      <section className="bg-[#f8f9fa] py-10 md:py-12">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
          
          <div className="w-full lg:w-1/3 flex flex-col space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#768EA6]/20 flex items-center justify-center text-[#768EA6] shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Call Us</h3>
                <p className="text-gray-600">Mon-Sat, 9AM to 7PM</p>
                <p className="font-bold text-gray-900 text-lg mt-1">1800-200-5555</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#768EA6]/20 flex items-center justify-center text-[#768EA6] shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Email Us</h3>
                <p className="text-gray-600">We aim to reply within 2 hours</p>
                <p className="font-bold text-gray-900 text-lg mt-1 break-all">support@ritikafinancial.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#768EA6]/20 flex items-center justify-center text-[#768EA6] shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Head Office</h3>
                <p className="text-gray-600">Ritika Towers, Financial District, Cybercity, Gurugram 122002</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                <p>Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6]" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6]" placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6]" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">How can we help?</label>
                  <textarea required rows={4} className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6] resize-none" placeholder="Please describe your query..."></textarea>
                </div>

                <button type="submit" className="bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm w-full flex items-center justify-center">
                  Submit Query <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
