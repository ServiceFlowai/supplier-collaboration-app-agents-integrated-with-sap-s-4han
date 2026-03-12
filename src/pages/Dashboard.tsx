import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Page A', latency: 4000, errors: 2400, amt: 2400 },
  { name: 'Page B', latency: 3000, errors: 1398, amt: 2210 },
  { name: 'Page C', latency: 2000, errors: 9800, amt: 2290 },
  { name: 'Page D', latency: 2780, errors: 3908, amt: 2000 },
  { name: 'Page E', latency: 1890, errors: 4800, amt: 2181 },
  { name: 'Page F', latency: 2390, errors: 3800, amt: 2500 },
  { name: 'Page G', latency: 3490, errors: 4300, amt: 2100 },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Observability Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">API Latency</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="latency" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-2">Error Rates</h2>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="errors" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;