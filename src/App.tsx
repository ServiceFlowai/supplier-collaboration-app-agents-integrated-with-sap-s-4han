import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OrderAcknowledgement from './pages/OrderAcknowledgement';
import ChangeRequest from './pages/ChangeRequest';
import ExceptionResolution from './pages/ExceptionResolution';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/order-acknowledgement" element={<OrderAcknowledgement />} />
          <Route path="/change-request" element={<ChangeRequest />} />
          <Route path="/exception-resolution" element={<ExceptionResolution />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;