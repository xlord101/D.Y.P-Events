import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const ClubMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    email: '',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200'
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/members', newMember);
      setIsModalOpen(false);
      setNewMember({
        name: '',
        role: '',
        email: '',
        status: 'Active',
        imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200'
      });
      fetchMembers();
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Failed to add member. Check if server is running.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to remove this member?")) {
      try {
        await axios.delete(`http://localhost:8080/api/members/${id}`);
        fetchMembers();
      } catch (error) {
        console.error("Error deleting member:", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-background relative overflow-hidden">
      <Sidebar />
      <main className="ml-[240px] flex-grow p-8 lg:p-12">
        <header className="flex justify-between items-end mb-12">
          <div className="space-y-1">
            <h2 className="font-display-hero text-4xl text-on-background">Club Members</h2>
            <p className="font-body-sm text-on-primary-container opacity-70">Manage your club hierarchy and team access.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white font-label-caps px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            Add Member
          </button>
        </header>

        {/* Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end bg-on-background/20 backdrop-blur-[2px] transition-all">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
            
            <div className="relative w-full max-w-[480px] h-full bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] p-12 flex flex-col animate-slide-in">
              <header className="flex justify-between items-center mb-12">
                <div className="space-y-1">
                  <h3 className="font-display-hero text-3xl font-bold text-on-background">New Campus Lead</h3>
                  <p className="text-sm font-body-sm text-slate-500">Fill in the details to add a new team member.</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-full transition-colors">
                  <span className="material-symbols-outlined text-slate-400">close</span>
                </button>
              </header>

              <form onSubmit={handleSubmit} className="space-y-8 flex-grow overflow-y-auto pr-4 custom-scrollbar">
                <div className="space-y-3">
                  <label className="font-label-caps text-[11px] font-bold text-slate-400 uppercase tracking-widest">Profile Identity</label>
                  <div className="space-y-4">
                    <input 
                      required
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-primary focus:bg-white outline-none transition-all font-body-sm"
                      value={newMember.name}
                      onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                    />
                    <input 
                      required
                      type="text" 
                      placeholder="Professional Role (e.g. Technical Head)"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-primary focus:bg-white outline-none transition-all font-body-sm"
                      value={newMember.role}
                      onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="font-label-caps text-[11px] font-bold text-slate-400 uppercase tracking-widest">Contact Information</label>
                  <input 
                    required
                    type="email" 
                    placeholder="University Email Address"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-primary focus:bg-white outline-none transition-all font-body-sm"
                    value={newMember.email}
                    onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-label-caps text-[11px] font-bold text-slate-400 uppercase tracking-widest">Default Avatar URL</label>
                  <input 
                    type="text" 
                    placeholder="https://..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-primary focus:bg-white outline-none transition-all font-body-sm opacity-60"
                    value={newMember.imageUrl}
                    onChange={(e) => setNewMember({...newMember, imageUrl: e.target.value})}
                  />
                </div>
                
                <div className="pt-10 mt-auto">
                  <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-label-caps text-sm tracking-widest shadow-2xl shadow-slate-900/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                    Confirm and Add Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full p-12 text-center glass-card">
              <p className="animate-pulse">Fetching campus leads...</p>
            </div>
          ) : members.length === 0 ? (
            <div className="col-span-full p-12 text-center glass-card">
              <p>No members found in the directory.</p>
            </div>
          ) : (
            members.map((member) => (
              <div key={member.id} className="glass-card p-8 flex flex-col items-center text-center group transition-all hover:scale-[1.05]">
                <div className="w-20 h-20 rounded-full border-2 border-secondary-container p-1 mb-6 flex items-center justify-center overflow-hidden bg-slate-50">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl uppercase">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-headline-md text-lg font-bold text-on-surface">{member.name}</h3>
                <p className="font-label-caps text-[10px] text-secondary font-bold uppercase tracking-widest mt-1">{member.role}</p>
                <p className="font-body-sm text-xs text-on-primary-container opacity-60 mt-4">{member.email}</p>
                
                <div className="mt-8 pt-6 border-t border-white/20 w-full flex justify-between items-center">
                  <span className={`text-[9px] font-label-caps px-2 py-1 rounded-full uppercase tracking-tighter ${
                    member.status === 'Active' ? 'bg-secondary-container text-on-secondary-container' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {member.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white/50 rounded-lg transition-all">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </button>
                    <button 
                      onClick={() => handleDelete(member.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-all text-slate-400 hover:text-red-500"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
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

export default ClubMembers;
