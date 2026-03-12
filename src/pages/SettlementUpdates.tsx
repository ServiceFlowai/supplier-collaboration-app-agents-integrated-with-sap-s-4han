import React, { useState } from 'react';
import axios from 'axios';

function SettlementUpdates() {
  const [updates, setUpdates] = useState([
    { id: 1, type: 'Credit Memo', status: 'Pending', description: 'Awaiting approval' },
    { id: 2, type: 'Debit Memo', status: 'Approved', description: 'Processed' }
  ]);

  const handleUpdateSAP = async (updateId: number) => {
    // Simulate SAP update
    console.log(`Updating SAP for update ${updateId}`);
    try {
      const response = await axios.post('/api/sap/update', { updateId });
      console.log('SAP Update Response:', response.data);
    } catch (error) {
      console.error('Error updating SAP:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settlement Updates</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Type</th>
            <th className="py-2">Status</th>
            <th className="py-2">Description</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="py-2 text-center">{u.id}</td>
              <td className="py-2 text-center">{u.type}</td>
              <td className="py-2 text-center">{u.status}</td>
              <td className="py-2 text-center">{u.description}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => handleUpdateSAP(u.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Update SAP
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SettlementUpdates;