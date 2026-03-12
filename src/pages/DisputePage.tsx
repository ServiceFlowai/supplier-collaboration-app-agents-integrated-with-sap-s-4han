import React from 'react';
import DisputeForm from '../components/DisputeForm';
import DisputeList from '../components/DisputeList';

const DisputePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dispute Management</h1>
      <DisputeForm />
      <DisputeList />
    </div>
  );
};

export default DisputePage;