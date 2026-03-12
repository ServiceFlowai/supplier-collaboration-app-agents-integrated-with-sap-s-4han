import React, { useState } from 'react';

function MasterDataLinkage() {
  const [supplierKey, setSupplierKey] = useState('');
  const [businessPartner, setBusinessPartner] = useState('');

  const handleLink = () => {
    // Handle master data linkage logic
    console.log('Linking:', { supplierKey, businessPartner });
  };

  return (
    <div className="master-data-linkage">
      <h1>Supplier Master Data Linkage</h1>
      <div>
        <label>Supplier Key:</label>
        <input type="text" value={supplierKey} onChange={(e) => setSupplierKey(e.target.value)} />
      </div>
      <div>
        <label>Business Partner:</label>
        <input type="text" value={businessPartner} onChange={(e) => setBusinessPartner(e.target.value)} />
      </div>
      <button onClick={handleLink}>Link</button>
    </div>
  );
}

export default MasterDataLinkage;