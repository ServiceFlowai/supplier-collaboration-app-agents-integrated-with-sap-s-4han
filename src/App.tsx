import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import OrderQA from './pages/OrderQA';
import DeliveryStatus from './pages/DeliveryStatus';
import ASNManagement from './pages/ASNManagement';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/order-qa" element={<OrderQA />} />
        <Route path="/delivery-status" element={<DeliveryStatus />} />
        <Route path="/asn-management" element={<ASNManagement />} />
      </Routes>
    </div>
  );
}

export default App;