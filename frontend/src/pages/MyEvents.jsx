import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`http://localhost:8080/api/events/${id}`);
        setEvents(events.filter(e => e.id !== id));
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Failed to delete event.");
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="ml-[240px] flex-grow p-8 lg:p-12">
        <header className="flex justify-between items-end mb-12">
          <div className="space-y-1">
            <h2 className="font-display-hero text-4xl text-on-background">My Events</h2>
            <p className="font-body-sm text-on-primary-container opacity-70">Manage and edit your club's hosted activities.</p>
          </div>
          <Link to="/admin/create" className="bg-primary text-white font-label-caps px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-lg">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create New Event
          </Link>
        </header>

        <div className="grid gap-6">
          {loading ? (
            <div className="p-12 text-center glass-card">
              <p className="animate-pulse">Loading events from campus database...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="p-12 text-center glass-card">
              <p>No events found. Start by creating one!</p>
            </div>
          ) : (
            events.map((event) => (
              <div key={event.id} className="glass-card p-6 flex items-center justify-between group hover:border-emerald-200/50 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-secondary-container/20 flex items-center justify-center text-secondary">
                    {event.imageUrl ? (
                      <img src={event.imageUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-3xl">event</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface">{event.title}</h3>
                    <div className="flex gap-4 mt-1">
                      <p className="font-body-sm text-xs text-on-primary-container opacity-60 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">calendar_today</span> {event.date}
                      </p>
                      <p className="font-body-sm text-xs text-on-primary-container opacity-60 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">business</span> {event.clubName}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-12">
                  <div className="text-right">
                    <p className="font-label-caps text-[10px] uppercase tracking-widest opacity-60 mb-1">Status</p>
                    <p className="font-headline-md font-bold text-secondary text-sm">{event.status}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3 hover:bg-white/50 rounded-xl transition-all text-on-primary-container hover:text-primary">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(event.id)}
                      className="p-3 hover:bg-error-container/20 rounded-xl transition-all text-on-primary-container hover:text-red-600"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default MyEvents;
