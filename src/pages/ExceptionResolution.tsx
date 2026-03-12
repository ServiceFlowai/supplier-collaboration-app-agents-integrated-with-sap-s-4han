import React, { useState } from 'react';

const ExceptionResolution = () => {
  const [exceptions, setExceptions] = useState([
    { id: 1, type: 'Backorder Risk', details: 'Product A might be delayed', status: 'Unresolved' },
    { id: 2, type: 'Credit Block', details: 'Credit limit exceeded for Product B', status: 'Unresolved' }
  ]);

  const handleResolve = (id: number) => {
    setExceptions(exceptions.map(exception => exception.id === id ? { ...exception, status: 'Resolved' } : exception));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Exception Resolution</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Type</th>
            <th className="py-2">Details</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exceptions.map(exception => (
            <tr key={exception.id} className="text-center">
              <td className="py-2">{exception.type}</td>
              <td className="py-2">{exception.details}</td>
              <td className="py-2">{exception.status}</td>
              <td className="py-2">
                <button onClick={() => handleResolve(exception.id)} className="bg-blue-500 text-white px-4 py-2">Resolve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExceptionResolution;