import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DocumentExchange from './pages/DocumentExchange';
import ProofOfDelivery from './pages/ProofOfDelivery';
import FulfillmentExceptions from './pages/FulfillmentExceptions';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/document-exchange" element={<DocumentExchange />} />
        <Route path="/proof-of-delivery" element={<ProofOfDelivery />} />
        <Route path="/fulfillment-exceptions" element={<FulfillmentExceptions />} />
      </Routes>
    </div>
  );
}

export default App;