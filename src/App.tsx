import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CaseTriage from './pages/CaseTriage';
import SettlementUpdates from './pages/SettlementUpdates';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/case-triage" element={<CaseTriage />} />
        <Route path="/settlement-updates" element={<SettlementUpdates />} />
      </Routes>
    </div>
  );
}

export default App;