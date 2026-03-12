import React, { useState } from 'react';

const DisputeForm: React.FC = () => {
  const [reason, setReason] = useState('');
  const [evidence, setEvidence] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-sm font-medium">Reason Code</label>
        <select value={reason} onChange={(e) => setReason(e.target.value)} className="mt-1 block w-full">
          <option value="">Select a reason</option>
          <option value="price">Price Dispute</option>
          <option value="quantity">Quantity Dispute</option>
          <option value="damage">Damaged Goods</option>
          <option value="missing">Missing POD</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Evidence Attachment</label>
        <input type="file" onChange={(e) => setEvidence(e.target.files ? e.target.files[0] : null)} className="mt-1 block w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Dispute</button>
    </form>
  );
};

export default DisputeForm;