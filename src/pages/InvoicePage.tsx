import React, { useState } from 'react';
import InvoiceTable from '../components/InvoiceTable';

const InvoicePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoice/Billing Documents</h1>
      <InvoiceTable />
    </div>
  );
};

export default InvoicePage;