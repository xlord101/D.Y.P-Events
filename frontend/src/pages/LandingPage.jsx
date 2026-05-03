import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LandingPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const mockEvents = [
        {
            id: 1,
            title: "Cloud Computing Summit",
            date: "Oct 24, 2024",
            description: "Explore the future of serverless architecture and multi-cloud strategies with industry leads from Google and AWS.",
            clubName: "GDG",
            status: "Free Entry",
            imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 2,
            title: "Cybersecurity Workshop",
            date: "Nov 12, 2024",
            description: "Hands-on session on network security, ethical hacking fundamentals, and zero-trust implementation protocols.",
            clubName: "CSI",
            status: "Limited Slots",
            imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 3,
            title: "Generative AI Expo",
            date: "Dec 05, 2024",
            description: "Showcasing student-led projects in LLM fine-tuning and stable diffusion applications in creative arts.",
            clubName: "AI CLUB",
            status: "Entry Pass",
            imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
        }
    ];

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching events, using mock data:", error);
                setEvents(mockEvents);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="bg-background text-on-background font-body-base antialiased">
            <Navbar />

            <main>
                <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                        <source src="/hero-background.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/65 z-0"></div>
                    <div className="container mx-auto px-gutter relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 rounded-full mb-8 relative z-10">
                            <span className="material-symbols-outlined text-emerald-400 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
                            <span className="font-label-caps text-xs text-emerald-400 uppercase font-bold tracking-widest">The Academic Pulse</span>
                        </div>
                        <h1 className="font-display-hero text-6xl md:text-7xl mb-8 max-w-4xl mx-auto relative z-10 text-white drop-shadow-2xl">
                            Discover What’s Happening at D.Y. Patil
                        </h1>
                        <p className="font-body-base text-lg mb-12 max-w-2xl mx-auto text-white/90 relative z-10">
                            A centralized intelligence hub for campus innovation, technical symposiums, and cultural festivals. Experience management at the speed of thought.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="#events" className="bg-primary text-white px-10 py-4 rounded-full font-label-caps text-label-caps hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
                                Browse Events
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                            <Link to="/clubs" className="bg-white/40 backdrop-blur-md border border-secondary-container text-white px-10 py-4 rounded-full font-label-caps text-label-caps hover:bg-white/60 transition-all font-bold">
                                Join a Club
                            </Link>
                        </div>
                    </div>
                    <div className="particle-overlay absolute inset-0"></div>
                </section>

                <section id="events" className="py-xl px-gutter max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="font-headline-lg text-4xl text-on-background mb-2">Upcoming Events</h2>
                            <div className="h-1 w-24 bg-secondary-container rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                        {loading ? (
                            <p className="col-span-full text-center py-12 text-on-surface-variant">Syncing with campus servers...</p>
                        ) : (
                            events.map(event => (
                                <div key={event.id} className="glass-card rounded-[24px] overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            src={event.imageUrl} 
                                            alt={event.title} 
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white font-label-caps text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">{event.clubName}</span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-2 text-secondary mb-3">
                                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                                            <span className="font-label-caps text-xs uppercase font-bold tracking-wider">{event.date}</span>
                                        </div>
                                        <h3 className="font-headline-md text-2xl text-on-surface mb-4 font-bold">{event.title}</h3>
                                        <p className="font-body-sm text-sm text-on-surface-variant mb-8 line-clamp-2 opacity-70">
                                            {event.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-on-surface-variant text-xs font-label-caps uppercase tracking-widest font-bold">{event.status}</span>
                                            <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-label-caps text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-200 transition-all">Register</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                <section id="clubs" className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="font-headline-lg text-4xl md:text-5xl text-slate-900 mb-6">Active Communities</h2>
                            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
                                Explore the diverse student-led organizations pushing the boundaries of technology, innovation, and culture at our campus.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                            {['GDG', 'CSI', 'FOSS', 'Drone', 'AI/ML'].map((club) => (
                                <div key={club} className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 flex flex-col items-center justify-center gap-5 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group cursor-pointer border-b-4 hover:border-b-emerald-500">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 shadow-sm transition-all duration-500 group-hover:scale-110">
                                        <span className="material-symbols-outlined text-3xl">groups</span>
                                    </div>
                                    <span className="font-bold text-slate-900 tracking-tight text-lg">{club}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 text-center">
                            <Link to="/clubs" className="inline-flex items-center gap-2 text-emerald-500 font-bold hover:gap-3 transition-all">
                                View All 20+ Clubs
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white/40 border-t border-slate-200 w-full py-12 px-8 mt-xl backdrop-blur-xl">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="font-bold text-slate-900 font-display-hero text-lg">D.Y. Patil Events</span>
                        <p className="text-slate-400 font-label-caps text-[10px] tracking-widest">© 2024 D.Y. Patil University. Atmospheric Technical OS.</p>
                    </div>
                    <div className="flex gap-8 text-slate-400">
                        <Link to="/admin/dashboard" className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold">Admin Portal</Link>
                        <a className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold" href="#">Privacy</a>
                        <a className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold" href="#">Terms</a>
                        <a className="hover:text-emerald-500 transition-opacity font-label-caps text-[10px] uppercase tracking-widest font-bold" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
