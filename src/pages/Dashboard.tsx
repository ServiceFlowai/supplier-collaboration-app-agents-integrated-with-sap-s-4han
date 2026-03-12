import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Order Changes</h2>
          <p>Recent order changes will appear here.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Delivery Updates</h2>
          <p>Recent delivery updates will appear here.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Invoice Notifications</h2>
          <p>Recent invoice notifications will appear here.</p>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/notifications" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Bell className="mr-2" /> Manage Notifications
        </Link>
        <Link to="/ai-management" className="inline-flex items-center px-4 py-2 ml-4 bg-green-500 text-white rounded hover:bg-green-600">
          <Settings className="mr-2" /> AI Management
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;