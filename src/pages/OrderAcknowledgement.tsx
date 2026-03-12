import React, { useState } from 'react';

const OrderAcknowledgement = () => {
  const [orders, setOrders] = useState([
    { id: 1, item: 'Product A', qty: 100, status: 'Pending' },
    { id: 2, item: 'Product B', qty: 200, status: 'Pending' }
  ]);

  const handleConfirm = (id: number) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: 'Confirmed' } : order));
  };

  const handleReject = (id: number) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: 'Rejected' } : order));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order Acknowledgement</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Item</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="text-center">
              <td className="py-2">{order.item}</td>
              <td className="py-2">{order.qty}</td>
              <td className="py-2">{order.status}</td>
              <td className="py-2">
                <button onClick={() => handleConfirm(order.id)} className="bg-green-500 text-white px-4 py-2 mr-2">Confirm</button>
                <button onClick={() => handleReject(order.id)} className="bg-red-500 text-white px-4 py-2">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderAcknowledgement;