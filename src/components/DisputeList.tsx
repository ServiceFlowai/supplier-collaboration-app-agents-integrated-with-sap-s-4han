import React, { useState } from 'react';

const DisputeList: React.FC = () => {
  const [disputes, setDisputes] = useState([
    { id: 1, reason: 'Price Dispute', status: 'Open', linkedInvoice: 'INV-001' },
    { id: 2, reason: 'Damaged Goods', status: 'Resolved', linkedInvoice: 'INV-002' }
  ]);

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Reason</th>
          <th className="py-2">Status</th>
          <th className="py-2">Linked Invoice</th>
        </tr>
      </thead>
      <tbody>
        {disputes.map(dispute => (
          <tr key={dispute.id}>
            <td className="py-2">{dispute.reason}</td>
            <td className="py-2">{dispute.status}</td>
            <td className="py-2">{dispute.linkedInvoice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisputeList;