import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    clubName: '',
    date: '',
    status: 'Free Entry',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.clubName) {
      alert("Please fill in the required fields (Title, Date, and Club Name).");
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/events', formData);
      alert("Event Published Successfully!");
      navigate('/admin/events');
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to publish event. Make sure the server is running.");
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-[240px] flex-grow pt-12 pb-xl px-gutter max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display-hero text-4xl text-primary-container mb-2">Create New Campus Event</h1>
          <p className="font-body-sm text-on-primary-container opacity-70">Draft your upcoming technical seminar, workshop, or cultural gathering.</p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="glass-card p-12 rounded-[24px] space-y-8">
              <div className="space-y-2">
                <label className="font-label-caps text-xs text-on-surface-variant block uppercase tracking-widest opacity-60">Event Title *</label>
                <input 
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary font-body-base outline-none transition-all" 
                  placeholder="e.g. Annual Tech Symposium 2024" 
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-xs text-on-surface-variant block uppercase tracking-widest opacity-60">Event Description</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary font-body-base outline-none transition-all" 
                  placeholder="Describe the purpose, agenda, and target audience for this event..." 
                  rows="4"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="space-y-2">
                  <label className="font-label-caps text-xs text-on-surface-variant block uppercase tracking-widest opacity-60">Organizing Club *</label>
                  <input 
                    name="clubName"
                    required
                    value={formData.clubName}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary font-body-base outline-none transition-all" 
                    placeholder="e.g. GDG, CSI, AI Club" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-xs text-on-surface-variant block uppercase tracking-widest opacity-60">Event Date *</label>
                  <input 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary font-body-base outline-none transition-all" 
                    type="text"
                    placeholder="e.g. Oct 24, 2024"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-xs text-on-surface-variant block uppercase tracking-widest opacity-60">Image URL</label>
                <input 
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary font-body-base outline-none transition-all" 
                  placeholder="Paste a link to an image (Unsplash, etc.)" 
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-xs text-on-surface-variant block uppercase tracking-widest opacity-60">Entry Status</label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-white/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary font-body-base outline-none transition-all appearance-none"
                >
                  <option value="Free Entry">Free Entry</option>
                  <option value="Limited Slots">Limited Slots</option>
                  <option value="Entry Pass Required">Entry Pass Required</option>
                  <option value="Invite Only">Invite Only</option>
                </select>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 space-y-gutter">
            <div className="glass-card p-8 rounded-[24px]">
              <h3 className="font-label-caps text-xs text-on-surface-variant mb-6 uppercase tracking-widest opacity-60">Poster Preview</h3>
              <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-white/30 flex flex-col items-center justify-center bg-slate-100/50 transition-colors">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity" 
                  src={formData.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400"} 
                  alt="Preview"
                />
              </div>
            </div>

            <div className="glass-card p-8 rounded-[24px]">
              <h3 className="font-label-caps text-xs text-on-surface-variant mb-6 uppercase tracking-widest opacity-60">Publishing Actions</h3>
              <div className="space-y-4">
                <button 
                  onClick={handleSubmit}
                  className="w-full py-4 px-6 rounded-full bg-primary text-white font-label-caps text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-lg">publish</span>
                  Publish Event
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3 text-secondary">
                  <span className="material-symbols-outlined text-sm font-fill-1">check_circle</span>
                  <span className="font-body-sm text-xs font-bold">Visibility: Public to all students</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateEvent;
