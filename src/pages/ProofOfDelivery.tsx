import React, { useState } from 'react';

const ProofOfDelivery = () => {
  const [proofs, setProofs] = useState([
    { id: 1, document: 'Signed POD', timestamp: '2023-10-01 10:00', status: 'Submitted' },
    { id: 2, document: 'Delivery Receipt', timestamp: '2023-10-02 12:00', status: 'Pending' }
  ]);

  const handlePODSubmit = () => {
    // Handle POD submission logic
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Proof of Delivery</h1>
      <button onClick={handlePODSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit POD</button>
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="py-2">Document</th>
            <th className="py-2">Timestamp</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {proofs.map(proof => (
            <tr key={proof.id}>
              <td className="py-2">{proof.document}</td>
              <td className="py-2">{proof.timestamp}</td>
              <td className="py-2">{proof.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProofOfDelivery;