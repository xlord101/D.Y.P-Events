import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const clubs = [
  {
    id: 1,
    name: 'GDG On Campus',
    logo: 'https://www.gstatic.com/images/branding/product/2x/googleg_96dp.png',
    description: 'Google Developer Groups are community groups for students interested in Google developer technologies.',
    tag: 'Technology',
    memberCount: '250+'
  },
  {
    id: 2,
    name: 'CSI Student Branch',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Csi_logo_india.jpg',
    description: 'Promoting information technology and professional excellence through workshops and seminars.',
    tag: 'Academic',
    memberCount: '180+'
  },
  {
    id: 3,
    name: 'FOSS Community',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/FOSS_logo.svg/512px-FOSS_logo.svg.png',
    description: 'Dedicated to the world of Free and Open Source Software. We build, contribute, and collaborate.',
    tag: 'Open Source',
    memberCount: '120+'
  },
  {
    id: 4,
    name: 'Drone & Robotics',
    logo: 'https://images.unsplash.com/photo-1508614589041-895b83967a4f?auto=format&fit=crop&q=80&w=200',
    description: 'Explore the skies and the future of automation with our specialized robotics and UAV team.',
    tag: 'Innovation',
    memberCount: '85+'
  },
  {
    id: 5,
    name: 'AI/ML Research',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=200',
    description: 'Pushing the boundaries of artificial intelligence and machine learning through collaborative research projects.',
    tag: 'Research',
    memberCount: '150+'
  },
  {
    id: 6,
    name: 'ACM Student Chapter',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png',
    description: 'Advancing computing as a science and a profession on our campus through competitive programming.',
    tag: 'Coding',
    memberCount: '200+'
  }
];

const Clubs = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="relative pt-24">
        {/* Hero Background Video */}
        <div className="absolute top-0 left-0 w-full h-[550px] overflow-hidden z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-slate-50 z-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <header className="mb-16 text-center pt-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 rounded-full mb-6">
              <span className="material-symbols-outlined text-emerald-400 text-sm">hub</span>
              <span className="font-label-caps text-[10px] text-emerald-400 uppercase font-bold tracking-[0.2em]">Ecosystem</span>
            </div>
            <h1 className="font-display-hero text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">Campus Communities</h1>
            <p className="text-white/80 max-w-2xl mx-auto font-body-base text-lg leading-relaxed">
              Explore the diverse student-led organizations pushing the boundaries of technology, innovation, and culture at D.Y. Patil.
            </p>
          </header>

          <section className="pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club) => (
            <div key={club.id} className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500">
                  <img src={club.logo} alt={club.name} className="w-full h-full object-contain" />
                </div>
                <span className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                  {club.tag}
                </span>
              </div>
              
              <h3 className="font-headline-md text-2xl font-bold text-slate-900 mb-4">{club.name}</h3>
              <p className="text-slate-500 font-body-sm text-sm leading-relaxed mb-8">
                {club.description}
              </p>
              
              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-300 text-lg">groups</span>
                  <span className="text-slate-500 font-bold text-xs">{club.memberCount} Members</span>
                </div>
              </div>
            </div>
          ))}
            </div>
          </section>
        </div>
      </main>

      {/* CTA Footer */}
      <footer className="bg-slate-900 text-white py-32 px-6 text-center w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Can't find your club?</h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed">
            Start a new chapter and bring your vision to life. We provide the tools and platform to help you grow your community at D.Y. Patil.
          </p>
          <button className="bg-emerald-500 text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-emerald-500/20 active:scale-95">
            Register New Club
          </button>
        </div>
      </footer>

      {/* Global Site Footer */}
      <footer className="bg-white border-t border-slate-200 w-full py-12 px-8 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-slate-900 font-display-hero text-lg">D.Y. Patil Events</span>
            <p className="text-slate-400 font-label-caps text-[10px] tracking-widest">© 2024 D.Y. Patil University. Atmospheric Technical OS.</p>
          </div>
          <div className="flex gap-8 text-slate-400">
            <Link to="/login" className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold">Admin Portal</Link>
            <a className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold" href="#">Privacy</a>
            <a className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold" href="#">Terms</a>
            <a className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Clubs;
