import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Registrations', value: '1,284', icon: 'person_add', trend: '+12% from last month', color: 'secondary' },
    { label: 'Active Events', value: '08', icon: 'event_available', trend: 'Across 4 departments', color: 'primary' },
    { label: 'Event Reach', value: '4.2k', icon: 'visibility', trend: 'Global visibility', color: 'tertiary' },
  ];

  const recentEvents = [
    { name: 'Tech Symposium 2024', date: 'Oct 24, 2024', venue: 'Auditorium A', status: 'Published', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=200' },
    { name: 'Cultural Fest: Zenith', date: 'Nov 12, 2024', venue: 'Main Ground', status: 'Draft', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=200' },
    { name: 'Career Pathways Seminar', date: 'Dec 05, 2024', venue: 'Room 302, Block B', status: 'Published', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="ml-[240px] flex-grow p-8 lg:p-12">
        <header className="flex justify-between items-end mb-12">
          <div className="space-y-1">
            <h2 className="font-display-hero text-4xl text-on-background">Dashboard Overview</h2>
            <p className="font-body-sm text-on-primary-container opacity-70">Manage your upcoming campus activities and track engagement.</p>
          </div>
          <Link 
            to="/admin/create"
            className="bg-primary text-white font-label-caps px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-slate-900/10"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create New Event
          </Link>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-8 flex flex-col gap-4 group hover:scale-[1.02] transition-transform duration-300">
              <div className={`w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <div>
                <p className="font-label-caps text-on-primary-container text-xs uppercase tracking-widest opacity-60">{stat.label}</p>
                <h3 className="font-headline-lg text-4xl text-on-surface mt-1">{stat.value}</h3>
              </div>
              <div className="flex items-center gap-2 text-secondary font-label-caps text-[10px] font-bold">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                {stat.trend}
              </div>
            </div>
          ))}
        </section>

        {/* Table Section */}
        <section className="glass-card overflow-hidden">
          <div className="p-8 border-b border-white/20 flex justify-between items-center">
            <h3 className="font-headline-md text-on-surface text-xl font-bold">Recent Event Activity</h3>
            <div className="flex gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-primary-container text-sm opacity-50">search</span>
                <input 
                  className="bg-white/40 border border-white/20 rounded-xl pl-10 pr-4 py-2 font-body-sm text-sm focus:ring-2 focus:ring-secondary-container w-64 outline-none transition-all" 
                  placeholder="Filter events..." 
                  type="text"
                />
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="font-label-caps text-on-primary-container text-[11px] border-b border-white/20 uppercase tracking-widest opacity-60">
                  <th className="px-8 py-6">Event Name</th>
                  <th className="px-8 py-6">Date</th>
                  <th className="px-8 py-6">Venue</th>
                  <th className="px-8 py-6">Status</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-on-surface divide-y divide-white/10">
                {recentEvents.map((event) => (
                  <tr key={event.name} className="hover:bg-white/30 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                          <img alt={event.name} className="w-full h-full object-cover" src={event.image} />
                        </div>
                        <span className="font-medium">{event.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-on-primary-container opacity-80">{event.date}</td>
                    <td className="px-8 py-6 text-on-primary-container opacity-80">{event.venue}</td>
                    <td className="px-8 py-6">
                      <span className={`text-[10px] font-label-caps px-3 py-1 rounded-full ${
                        event.status === 'Published' 
                        ? 'bg-secondary-container text-on-secondary-container' 
                        : 'bg-surface-container-highest text-on-surface-variant'
                      }`}>
                        {event.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 hover:bg-white/50 rounded-lg transition-all text-on-primary-container hover:text-primary">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button className="p-2 hover:bg-error-container/20 rounded-lg transition-all text-on-primary-container hover:text-red-600">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-white/20 bg-white/10 flex justify-between items-center font-body-sm text-xs text-on-primary-container">
            <span className="opacity-60">Showing 3 of 8 events</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/30 transition-all">Previous</button>
              <button className="px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-all">Next</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
