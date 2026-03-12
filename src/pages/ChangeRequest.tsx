import React, { useState } from 'react';

const ChangeRequest = () => {
  const [requests, setRequests] = useState([
    { id: 1, item: 'Product A', currentQty: 100, requestedQty: 120, status: 'Pending' },
    { id: 2, item: 'Product B', currentQty: 200, requestedQty: 180, status: 'Pending' }
  ]);

  const handleApprove = (id: number) => {
    setRequests(requests.map(request => request.id === id ? { ...request, status: 'Approved' } : request));
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(request => request.id === id ? { ...request, status: 'Rejected' } : request));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Change Request</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Item</th>
            <th className="py-2">Current Quantity</th>
            <th className="py-2">Requested Quantity</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id} className="text-center">
              <td className="py-2">{request.item}</td>
              <td className="py-2">{request.currentQty}</td>
              <td className="py-2">{request.requestedQty}</td>
              <td className="py-2">{request.status}</td>
              <td className="py-2">
                <button onClick={() => handleApprove(request.id)} className="bg-green-500 text-white px-4 py-2 mr-2">Approve</button>
                <button onClick={() => handleReject(request.id)} className="bg-red-500 text-white px-4 py-2">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChangeRequest;