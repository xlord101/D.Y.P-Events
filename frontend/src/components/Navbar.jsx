import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ transparent = false }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
      transparent 
        ? 'bg-transparent border-transparent' 
        : 'bg-white/60 backdrop-blur-xl border-white/20 shadow-sm'
    } flex justify-between items-center px-8 py-3`}>
      <div className="flex items-center gap-8">
        <Link to="/" className={`text-xl font-bold tracking-tight font-display-hero ${
          transparent ? 'text-white' : 'text-slate-900'
        }`}>D.Y. Patil Events</Link>
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
          <input 
            className={`${
              transparent ? 'bg-white/20 border-white/30 text-white placeholder:text-white/60' : 'bg-white/40 border-slate-200'
            } border rounded-full pl-10 pr-4 py-1.5 text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary-container w-[280px] transition-all`} 
            placeholder="Search Clubs or Events" 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-8">
          <Link to="/" className={`${
            transparent ? 'text-white/80' : 'text-slate-600'
          } hover:text-emerald-500 transition-all duration-300 font-label-caps text-label-caps py-1`}>Home</Link>
          <a className={`${
            transparent ? 'text-white/80' : 'text-slate-600'
          } hover:text-emerald-500 transition-all duration-300 font-label-caps text-label-caps py-1`} href="/#events">Events</a>
          <Link className="text-emerald-500 font-bold border-b-2 border-emerald-400 font-label-caps text-label-caps py-1" to="/clubs">Clubs</Link>
        </div>
        <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-full font-label-caps text-label-caps hover:opacity-90 active:scale-95 transition-all">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
