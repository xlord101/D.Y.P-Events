import React from 'react';
import Sidebar from '../components/Sidebar';

const Analytics = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="ml-[240px] flex-grow p-8 lg:p-12">
        <header className="mb-12">
          <h2 className="font-display-hero text-4xl text-on-background">Event Analytics</h2>
          <p className="font-body-sm text-on-primary-container opacity-70">Deep dive into engagement metrics and student participation.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="glass-card p-8 h-80 flex flex-col justify-between">
            <h3 className="font-label-caps text-xs font-bold uppercase tracking-widest opacity-60">Registration Trends</h3>
            <div className="flex-grow flex items-end gap-2 px-4">
              {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                <div key={i} className="flex-grow bg-secondary-container/40 rounded-t-lg group relative transition-all hover:bg-secondary-container" style={{height: `${h}%`}}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-background text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h * 10}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 font-label-caps text-[10px] opacity-40 uppercase tracking-tighter">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col gap-6">
            <h3 className="font-label-caps text-xs font-bold uppercase tracking-widest opacity-60">Engagement by Category</h3>
            <div className="space-y-4">
              {[
                { label: 'Technical', value: 85, color: 'bg-emerald-500' },
                { label: 'Cultural', value: 65, color: 'bg-blue-500' },
                { label: 'Academic', value: 45, color: 'bg-purple-500' },
                { label: 'Sports', value: 30, color: 'bg-orange-500' },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between font-body-sm text-xs">
                    <span className="font-bold">{item.label}</span>
                    <span className="opacity-60">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} transition-all duration-1000`} style={{width: `${item.value}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-gutter glass-card p-8">
          <h3 className="font-label-caps text-xs font-bold uppercase tracking-widest opacity-60 mb-6">Top Performing Events</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-white/10 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center font-bold text-xs">{i}</div>
                  <span className="font-body-sm font-bold">Tech Symposium 202{i}</span>
                </div>
                <span className="font-label-caps text-[10px] text-secondary font-bold">+ {Math.floor(Math.random() * 50)}% GROWTH</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
