import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Story</h1>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-8">
              Building Excellence in Quebec Since 2010.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in Quebec City, RenovQc began with a simple mission: to provide homeowners with a renovation experience that is as high-quality as the final result.
              </p>
              <p>
                We understood that for most people, their home is their biggest investment. That's why we've spent the last decade building a team of master craftsmen, reliable partners, and dedicated project managers who share our commitment to excellence.
              </p>
              <p>
                Today, we serve the greater Quebec City and Montreal areas, bringing local knowledge and international standards to every kitchen, bathroom, and basement we touch.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
              alt="Our Team at Work"
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-10 rounded-[2rem] hidden md:block">
              <div className="text-5xl font-bold mb-1">14+</div>
              <div className="text-blue-100 font-medium uppercase tracking-widest text-sm">Years of Success</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">The Principles That Guide Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Shield, title: 'Integrity', desc: 'We are honest, transparent, and always do what we say we will do.' },
              { icon: Award, title: 'Quality', desc: 'We never cut corners. Our work is built to last for generations.' },
              { icon: Users, title: 'Collaboration', desc: 'We work closely with you to ensure your vision is realized.' },
              { icon: Heart, title: 'Passion', desc: 'We love what we do, and it shows in the details of our craftsmanship.' }
            ].map((value, index) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto text-blue-400">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Meet the Experts
          </h3>
          <p className="text-lg text-slate-600">
            Our team consists of certified professionals who are passionate about construction and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Marc-André Lavoie', role: 'Founder & Master Builder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
            { name: 'Sophie Gauthier', role: 'Lead Interior Designer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
            { name: 'Luc Tremblay', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' }
          ].map((member) => (
            <div key={member.name} className="group">
              <div className="relative h-96 overflow-hidden rounded-3xl mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
