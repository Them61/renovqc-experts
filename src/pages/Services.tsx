import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/content';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h1>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8">
            Professional Renovation Services in Quebec
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We offer a full range of construction and renovation services, from minor updates to major structural changes. Quality and integrity are at the core of everything we do.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-slate-900 shadow-lg">
                    {service.title}
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h3 className="text-4xl font-bold text-slate-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
                  >
                    Discuss Your {service.title} <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-32 bg-slate-50 rounded-[3rem] p-12 md:p-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Other Services We Provide</h3>
            <p className="text-slate-600">
              Beyond our core specialties, we handle a variety of construction and maintenance tasks to keep your home in top shape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Structural Repairs', 'Custom Deck Building', 'Window & Door Installation',
              'Painting & Finishing', 'Electrical & Plumbing', 'Project Management'
            ].map((item) => (
              <div key={item} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
