import React from 'react';

const AIManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Management</h1>
      <p>Configure AI governance and tool permissions here.</p>
      <ul className="list-disc pl-5">
        <li>Explicit Allowlists</li>
        <li>Approval Gates for Write-backs</li>
        <li>Prompt Injection Protections</li>
        <li>Full Action Logging</li>
      </ul>
    </div>
  );
};

export default AIManagement;