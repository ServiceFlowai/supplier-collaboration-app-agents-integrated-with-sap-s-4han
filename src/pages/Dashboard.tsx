import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl">150</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Pending Deliveries</h2>
          <p className="text-2xl">30</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold">Open Disputes</h2>
          <p className="text-2xl">5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;