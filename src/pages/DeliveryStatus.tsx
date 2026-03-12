import React from 'react';

const DeliveryStatus = () => {
  const deliveries = [
    { id: 1, status: 'In Transit', carrier: 'DHL', tracking: '123456789', milestones: ['Picked', 'Packed', 'Shipped'] },
    { id: 2, status: 'Delivered', carrier: 'FedEx', tracking: '987654321', milestones: ['Picked', 'Packed', 'Shipped', 'Delivered'] },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Delivery Status</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Status</th>
            <th className="py-2">Carrier</th>
            <th className="py-2">Tracking</th>
            <th className="py-2">Milestones</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id} className="border-b">
              <td className="py-2">{delivery.id}</td>
              <td className="py-2">{delivery.status}</td>
              <td className="py-2">{delivery.carrier}</td>
              <td className="py-2">{delivery.tracking}</td>
              <td className="py-2">{delivery.milestones.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryStatus;