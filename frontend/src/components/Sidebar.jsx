import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/admin/dashboard' },
    { name: 'My Events', icon: 'calendar_month', path: '/admin/events' },
    { name: 'Analytics', icon: 'monitoring', path: '/admin/analytics' },
    { name: 'Club Members', icon: 'groups', path: '/admin/members' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] border-r border-white/10 sidebar-glass z-50 flex flex-col p-6 gap-2 bg-white/40 backdrop-blur-3xl">
      <div className="mb-10">
        <Link to="/" className="group">
          <h1 className="font-headline-md text-slate-900 tracking-tight text-xl font-bold group-hover:text-emerald-600 transition-colors">Admin Portal</h1>
          <p className="font-label-caps text-on-primary-container text-[10px] uppercase tracking-widest opacity-60">Management Console</p>
        </Link>
      </div>
      
      <nav className="flex-grow flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-secondary-container/20 text-secondary translate-x-1' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white/20'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-body-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Exit to Public Hub */}
      <div className="pt-6 border-t border-slate-200/50 mb-4">
        <Link 
          to="/" 
          className="flex items-center gap-3 px-4 py-3 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all font-bold text-xs uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm">open_in_new</span>
          View Public Hub
        </Link>
      </div>

      <div className="pt-6 border-t border-slate-200/50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
          <span className="material-symbols-outlined text-slate-400">person</span>
        </div>
        <div>
          <p className="font-label-caps text-on-surface text-sm font-bold">Administrator</p>
          <p className="text-[10px] text-on-primary-container opacity-70">Main Campus Lead</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
