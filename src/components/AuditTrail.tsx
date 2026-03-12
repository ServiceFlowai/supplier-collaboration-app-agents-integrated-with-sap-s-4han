import React from 'react';

const mockAuditLogs = [
  { id: 1, user: 'Supplier A', action: 'Acknowledged Order', timestamp: '2023-10-01T10:00:00Z', sapId: 'SO456' },
  { id: 2, user: 'Supplier B', action: 'Updated Shipment', timestamp: '2023-10-02T11:30:00Z', sapId: 'SO457' },
  // Add more mock data as needed
];

const AuditTrail = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Audit Trail</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">User</th>
            <th className="py-2">Action</th>
            <th className="py-2">Timestamp</th>
            <th className="py-2">SAP Document ID</th>
          </tr>
        </thead>
        <tbody>
          {mockAuditLogs.map(log => (
            <tr key={log.id} className="border-t">
              <td className="py-2">{log.user}</td>
              <td className="py-2">{log.action}</td>
              <td className="py-2">{new Date(log.timestamp).toLocaleString()}</td>
              <td className="py-2">{log.sapId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditTrail;