import React from 'react';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Open Cases</h2>
          <p className="text-3xl">42</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Pending Approvals</h2>
          <p className="text-3xl">15</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Resolved Cases</h2>
          <p className="text-3xl">128</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;