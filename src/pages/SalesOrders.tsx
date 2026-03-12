import React, { useState } from 'react';

const mockSalesOrders = [
  { id: 1, po: 'PO123', so: 'SO456', material: 'Material A', date: '2023-10-01', status: 'Confirmed' },
  { id: 2, po: 'PO124', so: 'SO457', material: 'Material B', date: '2023-10-02', status: 'Pending' },
  // Add more mock data as needed
];

const SalesOrders = () => {
  const [search, setSearch] = useState('');

  const filteredOrders = mockSalesOrders.filter(order =>
    order.po.includes(search) ||
    order.so.includes(search) ||
    order.material.includes(search) ||
    order.date.includes(search) ||
    order.status.includes(search)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Orders</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">PO</th>
            <th className="py-2">SO</th>
            <th className="py-2">Material</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr key={order.id} className="border-t">
              <td className="py-2">{order.po}</td>
              <td className="py-2">{order.so}</td>
              <td className="py-2">{order.material}</td>
              <td className="py-2">{order.date}</td>
              <td className="py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesOrders;