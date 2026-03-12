import React, { useState } from 'react';

const FulfillmentExceptions = () => {
  const [exceptions, setExceptions] = useState([
    { id: 1, issue: 'Delayed Shipment', proposedAction: 'Expedite via Air', status: 'Pending' },
    { id: 2, issue: 'Partial Shipment', proposedAction: 'Send Remaining via Express', status: 'Resolved' }
  ]);

  const handleResolve = (id: number) => {
    // Handle exception resolution logic
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fulfillment Exceptions</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Issue</th>
            <th className="py-2">Proposed Action</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exceptions.map(exception => (
            <tr key={exception.id}>
              <td className="py-2">{exception.issue}</td>
              <td className="py-2">{exception.proposedAction}</td>
              <td className="py-2">{exception.status}</td>
              <td className="py-2">
                <button onClick={() => handleResolve(exception.id)} className="bg-green-500 text-white px-2 py-1 rounded">Resolve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FulfillmentExceptions;