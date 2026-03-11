import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';
import { cn } from '../lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm' 
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-slate-900 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
            <Hammer size={24} />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tighter",
            !isScrolled && location.pathname === '/' ? "text-white" : "text-slate-900"
          )}>
            RENOV<span className="text-blue-600">QC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                !isScrolled && location.pathname === '/' 
                  ? "text-white/90 hover:text-white" 
                  : "text-slate-600",
                location.pathname === link.path && "text-blue-600 font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
              !isScrolled && location.pathname === '/'
                ? "bg-white text-slate-900 hover:bg-blue-50"
                : "bg-slate-900 text-white hover:bg-slate-800"
            )}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2",
            !isScrolled && location.pathname === '/' ? "text-white" : "text-slate-900"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-lg"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
