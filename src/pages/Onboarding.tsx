import React, { useState } from 'react';

function Onboarding() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [supplierAccount, setSupplierAccount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle onboarding logic
    console.log('Onboarding:', { email, role, supplierAccount });
  };

  return (
    <div className="onboarding">
      <h1>Supplier User Onboarding</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="supplier-admin">Supplier Admin</option>
            <option value="supplier-user">Supplier User</option>
          </select>
        </div>
        <div>
          <label>Supplier Account:</label>
          <input type="text" value={supplierAccount} onChange={(e) => setSupplierAccount(e.target.value)} required />
        </div>
        <button type="submit">Invite</button>
      </form>
    </div>
  );
}

export default Onboarding;