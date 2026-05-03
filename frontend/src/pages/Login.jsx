import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, we'll just navigate to the dashboard
    // In a real app, you'd validate against the backend here
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-[400px] bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 p-12 border border-slate-100">
        <header className="text-center mb-10">
          <Link to="/" className="inline-block mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-200">
              <span className="material-symbols-outlined">hub</span>
            </div>
          </Link>
          <h1 className="font-display-hero text-3xl font-bold text-slate-900">Admin Login</h1>
          <p className="text-slate-400 font-body-sm text-sm mt-2">Enter your credentials to manage the hub.</p>
        </header>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="font-label-caps text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Username</label>
            <input 
              required
              type="text" 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:border-emerald-500 focus:bg-white outline-none transition-all font-body-sm"
              placeholder="admin_user"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="font-label-caps text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
            <input 
              required
              type="password" 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:border-emerald-500 focus:bg-white outline-none transition-all font-body-sm"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-label-caps text-sm tracking-widest shadow-xl hover:bg-emerald-600 transition-all mt-6 active:scale-[0.98]"
          >
            Access Dashboard
          </button>
        </form>

        <footer className="text-center mt-10">
          <Link to="/" className="text-slate-400 hover:text-slate-600 transition-all text-xs font-semibold">
            ← Back to Campus Hub
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
