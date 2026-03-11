import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Work</h1>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8">
            Crafting Spaces That <span className="text-blue-600">Inspire.</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Explore our gallery of completed projects across Quebec. Each project represents our dedication to quality, functionality, and aesthetic excellence.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] mb-8 shadow-xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl font-bold text-sm text-blue-600 shadow-lg">
                  {project.category}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                    <div className="flex items-center gap-1"><MapPin size={16} /> {project.location}</div>
                    <div className="flex items-center gap-1"><Calendar size={16} /> {project.year}</div>
                  </div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-3 transition-all"
                >
                  Inquire About Similar Project <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-8">Have a Project in Mind?</h3>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Let's turn your vision into reality. Contact us for a free estimate and consultation.
          </p>
          <Link
            to="/contact"
            className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
          >
            Start Your Transformation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
