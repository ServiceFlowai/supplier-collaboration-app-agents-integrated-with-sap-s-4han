import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InvoicePage from './pages/InvoicePage';
import DisputePage from './pages/DisputePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/invoices" element={<InvoicePage />} />
        <Route path="/disputes" element={<DisputePage />} />
      </Routes>
    </div>
  );
}

export default App;