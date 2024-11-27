"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnalyticsPage = () => {
  // Test Data
  const customerData = [
    { month: "Jan", customers: 120 },
    { month: "Feb", customers: 150 },
    { month: "Mar", customers: 170 },
    { month: "Apr", customers: 200 },
    { month: "May", customers: 180 },
    { month: "Jun", customers: 220 },
    { month: "Jul", customers: 240 },
    { month: "Aug", customers: 230 },
    { month: "Sep", customers: 250 },
    { month: "Oct", customers: 300 },
    { month: "Nov", customers: 320 },
    { month: "Dec", customers: 310 },
  ];

  const complaintsData = [
    { name: "Resolved Complaints", value: 300 },
    { name: "Unresolved Complaints", value: 80 },
  ];

  const interactionData = [
    { month: "Jan", interactions: 100 },
    { month: "Feb", interactions: 120 },
    { month: "Mar", interactions: 150 },
    { month: "Apr", interactions: 140 },
    { month: "May", interactions: 180 },
    { month: "Jun", interactions: 200 },
    { month: "Jul", interactions: 220 },
    { month: "Aug", interactions: 190 },
    { month: "Sep", interactions: 250 },
    { month: "Oct", interactions: 270 },
    { month: "Nov", interactions: 290 },
    { month: "Dec", interactions: 310 },
  ];

  const pieColors = ["#0088FE", "#FF8042"];

  const [activeTab, setActiveTab] = useState("ethnicity");

  const customerInfo = {
    ethnicity: ["Asian", "Black", "Hispanic", "White", "Other"],
    languages: ["English", "Spanish", "French", "Mandarin", "Hindi"],
  };

  return (
    <div className="container pl-6 pb-6 space-y-8">
      <h1 className="text-3xl font-bold">Bank Analytics Dashboard</h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {/* Left Column */}
        <div className="w-full lg:w-4/5 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customers Per Month Bar Chart */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Customers per Month</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={customerData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="customers" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Complaints vs Resolutions Pie Chart */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Complaints Resolution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Tooltip />
                  <Legend />
                  <Pie
                    data={complaintsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {complaintsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer Interactions Line Chart */}
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Customer Interaction Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={interactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="interactions" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Customer Info</h2>
          <div className="space-y-4">
            {/* Tabs */}
            <div className="flex gap-2">
              <button
                className={`py-2 px-4 rounded ${activeTab === "ethnicity"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
                  }`}
                onClick={() => setActiveTab("ethnicity")}
              >
                Ethnicity
              </button>
              <button
                className={`py-2 px-4 rounded ${activeTab === "languages"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
                  }`}
                onClick={() => setActiveTab("languages")}
              >
                Languages
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              {activeTab === "ethnicity" ? (
                <ul>
                  {customerInfo.ethnicity.map((eth, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {eth}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {customerInfo.languages.map((lang, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;