"use client"
import React, { useState, useEffect } from 'react';

function Page() {
  const [formData, setFormData] = useState([
    {
      id: 1,
      help: 'I need help with setting up my account.',
      rating: 4,
      improvement: 'Faster customer support response.',
      date: '2024-11-27',
    },
    {
      id: 2,
      help: 'Looking for detailed API documentation.',
      rating: 5,
      improvement: 'More video tutorials.',
      date: '2024-11-26',
    },
  ]);

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(formData);

  useEffect(() => {
    const filtered = formData.filter((item) =>
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, formData]);

  return (
    <div className="container pl-6 pb-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Admin Dashboard
      </h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search feedback..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <table className="w-full table-auto text-left border-collapse border border-gray-300 dark:border-gray-700">
          <thead className="bg-blue-600 text-white dark:bg-blue-800">
            <tr>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-700">Date</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-700">How We Can Help</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-700">Rating</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-700">Suggestions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    {item.date}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    {item.help}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    {item.rating}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                    {item.improvement}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-2 text-center text-gray-500 dark:text-gray-400"
                >
                  No feedback found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
