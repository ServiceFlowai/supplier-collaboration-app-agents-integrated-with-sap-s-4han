import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, AlertCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Supplier App</div>
      <nav className="flex-1">
        <ul>
          <li>
            <Link to="/order-acknowledgement" className="flex items-center p-4 hover:bg-gray-700">
              <Home className="mr-2" /> Order Acknowledgement
            </Link>
          </li>
          <li>
            <Link to="/change-request" className="flex items-center p-4 hover:bg-gray-700">
              <FileText className="mr-2" /> Change Request
            </Link>
          </li>
          <li>
            <Link to="/exception-resolution" className="flex items-center p-4 hover:bg-gray-700">
              <AlertCircle className="mr-2" /> Exception Resolution
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;