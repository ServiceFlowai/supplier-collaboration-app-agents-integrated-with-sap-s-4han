import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SalesOrders from './pages/SalesOrders';
import NotificationPreferences from './pages/NotificationPreferences';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales-orders" element={<SalesOrders />} />
        <Route path="/notification-preferences" element={<NotificationPreferences />} />
      </Routes>
    </div>
  );
}

export default App;