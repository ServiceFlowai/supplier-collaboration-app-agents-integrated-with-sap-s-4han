import React, { useState } from 'react';

const DocumentExchange = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Packing List', type: 'PDF', uploadedAt: '2023-10-01' },
    { id: 2, name: 'Certificate of Conformance', type: 'PDF', uploadedAt: '2023-10-02' }
  ]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Document Exchange</h1>
      <input type="file" onChange={handleUpload} className="mb-4" />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Document Name</th>
            <th className="py-2">Type</th>
            <th className="py-2">Uploaded At</th>
          </tr>
        </thead>
        <tbody>
          {documents.map(doc => (
            <tr key={doc.id}>
              <td className="py-2">{doc.name}</td>
              <td className="py-2">{doc.type}</td>
              <td className="py-2">{doc.uploadedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentExchange;