import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-xl">
        <h1 className="text-[12rem] font-black text-slate-100 leading-none mb-4">404</h1>
        <div className="relative -mt-24">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-slate-600 mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
            >
              <Home size={20} /> Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all"
            >
              <ArrowLeft size={20} /> Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
