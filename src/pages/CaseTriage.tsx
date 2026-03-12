import React, { useState } from 'react';

function CaseTriage() {
  const [cases, setCases] = useState([
    { id: 1, type: 'Dispute', status: 'Open', description: 'Price discrepancy' },
    { id: 2, type: 'Dispute', status: 'Pending', description: 'Quantity mismatch' }
  ]);

  const handleClassify = (caseId: number) => {
    // Simulate AI classification
    console.log(`Classifying case ${caseId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Case Triage</h1>
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
          {cases.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="py-2 text-center">{c.id}</td>
              <td className="py-2 text-center">{c.type}</td>
              <td className="py-2 text-center">{c.status}</td>
              <td className="py-2 text-center">{c.description}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => handleClassify(c.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Classify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CaseTriage;