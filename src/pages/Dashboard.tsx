import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/sales-orders" className="bg-white p-4 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Sales Orders</h2>
          <p>View and manage your sales orders.</p>
        </Link>
        <Link to="/notification-preferences" className="bg-white p-4 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold">Notification Preferences</h2>
          <p>Configure your notification settings.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;