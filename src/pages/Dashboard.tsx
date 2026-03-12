import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/order-qa" className="bg-white p-4 shadow rounded-lg">
          <LucideIcon name="help-circle" className="w-6 h-6 mb-2" />
          <h2 className="text-lg font-semibold">Order Q&A</h2>
        </Link>
        <Link to="/delivery-status" className="bg-white p-4 shadow rounded-lg">
          <LucideIcon name="truck" className="w-6 h-6 mb-2" />
          <h2 className="text-lg font-semibold">Delivery Status</h2>
        </Link>
        <Link to="/asn-management" className="bg-white p-4 shadow rounded-lg">
          <LucideIcon name="package" className="w-6 h-6 mb-2" />
          <h2 className="text-lg font-semibold">ASN Management</h2>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;