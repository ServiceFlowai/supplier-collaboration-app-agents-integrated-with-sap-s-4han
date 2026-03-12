import React from 'react';

const Notifications = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <p>Manage your event-driven notifications here.</p>
      <ul className="list-disc pl-5">
        <li>Order Changes</li>
        <li>Delivery Posted</li>
        <li>Invoice Created</li>
        <li>Dispute Status Changes</li>
      </ul>
    </div>
  );
};

export default Notifications;