import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import IdentityIntegration from './pages/IdentityIntegration';
import MasterDataLinkage from './pages/MasterDataLinkage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/identity-integration" element={<IdentityIntegration />} />
        <Route path="/master-data-linkage" element={<MasterDataLinkage />} />
      </Routes>
    </div>
  );
}

export default App;