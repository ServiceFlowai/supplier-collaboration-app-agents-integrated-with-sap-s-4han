import React, { useState } from 'react';

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    email: true,
    portal: true,
    teams: false,
    whatsapp: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notification Preferences</h1>
      <form>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="email"
              checked={preferences.email}
              onChange={handleChange}
              className="mr-2"
            />
            Email
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="portal"
              checked={preferences.portal}
              onChange={handleChange}
              className="mr-2"
            />
            Portal Inbox
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="teams"
              checked={preferences.teams}
              onChange={handleChange}
              className="mr-2"
            />
            Microsoft Teams
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="whatsapp"
              checked={preferences.whatsapp}
              onChange={handleChange}
              className="mr-2"
            />
            WhatsApp
          </label>
        </div>
      </form>
    </div>
  );
};

export default NotificationPreferences;