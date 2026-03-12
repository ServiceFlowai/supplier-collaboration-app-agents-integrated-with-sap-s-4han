import React, { useState } from 'react';

const ASNManagement = () => {
  const [asnDetails, setAsnDetails] = useState({
    packingList: '',
    serialBatch: '',
    quantity: 0,
    shipDate: '',
  });

  const handleSubmit = async () => {
    // Simulate an API call to submit ASN details
    const response = await fetch('/api/asn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(asnDetails),
    });
    const data = await response.json();
    console.log('ASN submitted:', data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ASN Management</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Packing List"
          value={asnDetails.packingList}
          onChange={(e) => setAsnDetails({ ...asnDetails, packingList: e.target.value })}
        />
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Serial/Batch"
          value={asnDetails.serialBatch}
          onChange={(e) => setAsnDetails({ ...asnDetails, serialBatch: e.target.value })}
        />
        <input
          type="number"
          className="w-full p-2 border rounded mb-2"
          placeholder="Quantity"
          value={asnDetails.quantity}
          onChange={(e) => setAsnDetails({ ...asnDetails, quantity: Number(e.target.value) })}
        />
        <input
          type="date"
          className="w-full p-2 border rounded mb-2"
          value={asnDetails.shipDate}
          onChange={(e) => setAsnDetails({ ...asnDetails, shipDate: e.target.value })}
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit ASN
      </button>
    </div>
  );
};

export default ASNManagement;