import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data to a server here
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Contact Us</h1>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8">
              Let's Discuss Your Next <span className="text-blue-600">Project.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you have a clear vision or just the beginning of an idea, we're here to help you navigate the renovation process.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-slate-900">Our Office</h4>
                  <p className="text-slate-600">1234 Rue de la Construction, Quebec City, QC G1R 2S3</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-slate-900">Phone</h4>
                  <p className="text-slate-600">(418) 555-0123</p>
                  <p className="text-sm text-slate-400">Mon-Fri: 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-slate-900">Email</h4>
                  <p className="text-slate-600">info@renovqc.ca</p>
                  <p className="text-slate-600">quotes@renovqc.ca</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-slate-100 rounded-[2rem] overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
                Interactive Map Integration
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-200/50">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600 text-lg mb-8">
                  Thank you for reaching out. One of our experts will contact you within 24-48 hours to discuss your project.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jean Tremblay"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jean@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="(418) 555-0123"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Type</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none">
                      <option>Kitchen Renovation</option>
                      <option>Bathroom Remodeling</option>
                      <option>Basement Finishing</option>
                      <option>Exterior & Siding</option>
                      <option>Full Home Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Project Location</label>
                  <input
                    required
                    type="text"
                    placeholder="City or Neighborhood"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Project Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your vision, budget, and timeline..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  Request Free Quote <Send size={20} />
                </button>
                <p className="text-center text-sm text-slate-400">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
