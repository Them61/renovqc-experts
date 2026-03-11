import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Hammer size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                RENOV<span className="text-blue-500">QC</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Quebec's premier home renovation specialists. Delivering quality craftsmanship and trustworthy service across the province since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-white transition-colors">Kitchen Renovation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Bathroom Remodeling</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Basement Finishing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Exterior Siding</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Full Home Renovation</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Recent Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <span>1234 Rue de la Construction,<br />Quebec City, QC G1R 2S3</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>(418) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>info@renovqc.ca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} RenovQc Construction Inc. All rights reserved.</p>
          <p>RBQ License: 1234-5678-90</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
