import React, { useState } from 'react';

const InvoiceTable: React.FC = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, invoiceNumber: 'INV-001', poNumber: 'PO-123', delivery: 'DLV-456', aging: 30, status: 'Paid' },
    { id: 2, invoiceNumber: 'INV-002', poNumber: 'PO-124', delivery: 'DLV-457', aging: 15, status: 'Pending' }
  ]);

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Invoice Number</th>
          <th className="py-2">PO Number</th>
          <th className="py-2">Delivery</th>
          <th className="py-2">Aging</th>
          <th className="py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(invoice => (
          <tr key={invoice.id}>
            <td className="py-2">{invoice.invoiceNumber}</td>
            <td className="py-2">{invoice.poNumber}</td>
            <td className="py-2">{invoice.delivery}</td>
            <td className="py-2">{invoice.aging}</td>
            <td className="py-2">{invoice.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;