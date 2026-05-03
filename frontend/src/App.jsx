import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateEvent from './pages/CreateEvent';
import Clubs from './pages/Clubs';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import MyEvents from './pages/MyEvents';
import Analytics from './pages/Analytics';
import ClubMembers from './pages/ClubMembers';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create" element={<CreateEvent />} />
        <Route path="/admin/events" element={<MyEvents />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/members" element={<ClubMembers />} />
      </Routes>
    </Router>
  );
}

export default App;
