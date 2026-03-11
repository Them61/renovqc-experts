import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, Award, CheckCircle2, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, testimonials, services } from '../data/content';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Home Renovation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
              Quebec's Trusted Renovation Experts
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
              Transforming Houses Into <span className="text-blue-400">Dream Homes.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              From high-end kitchen remodels to complete home transformations, we bring quality craftsmanship and local expertise to every project in Quebec.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20"
              >
                Request a Free Quote <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 rounded-full font-bold text-lg flex items-center justify-center transition-all"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-12 text-white/60 grayscale opacity-70">
              <div className="flex items-center gap-2"><Award size={24} /> <span className="text-sm font-bold uppercase tracking-widest">RBQ Certified</span></div>
              <div className="flex items-center gap-2"><Shield size={24} /> <span className="text-sm font-bold uppercase tracking-widest">Fully Insured</span></div>
              <div className="flex items-center gap-2"><Clock size={24} /> <span className="text-sm font-bold uppercase tracking-widest">10+ Years Experience</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 size={24} /> <span className="text-sm font-bold uppercase tracking-widest">APCHQ Member</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">What We Do</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Comprehensive Renovation Services Tailored to You
              </h3>
            </div>
            <Link to="/services" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Hammer size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={`/services#${service.id}`} className="text-sm font-bold text-blue-600 flex items-center gap-1">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Recent Projects in Quebec
            </h3>
            <p className="text-lg text-slate-600">
              Take a look at some of our most recent transformations. We take pride in every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <Link
                key={project.id}
                to="/portfolio"
                className="group relative h-[500px] overflow-hidden rounded-3xl block"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                    {project.category}
                  </span>
                  <h4 className="text-3xl font-bold mb-2">{project.title}</h4>
                  <p className="text-white/70">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
            >
              View Full Portfolio <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                What Our Clients Say About Us
              </h3>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                We've built our reputation on trust and quality. Hear from homeowners across Quebec who have experienced the RenovQc difference.
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-800 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-400 mb-1">4.9/5</div>
                  <div className="text-sm text-slate-400">Google Rating</div>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-400 mb-1">150+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-8 rounded-3xl border border-slate-700"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-blue-400 text-blue-400" />
                    ))}
                  </div>
                  <p className="text-lg italic text-slate-300 mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Contact us today for a free, no-obligation consultation and quote. Let's build something beautiful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-xl"
                >
                  Get Your Free Quote
                </Link>
                <a
                  href="tel:4185550123"
                  className="px-10 py-5 bg-blue-700 text-white rounded-full font-bold text-xl hover:bg-blue-800 transition-all"
                >
                  Call (418) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
