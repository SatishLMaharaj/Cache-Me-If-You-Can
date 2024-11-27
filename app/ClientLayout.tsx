'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your feedback!');
        closeModal();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/30 dark:to-background">
            <div className="flex">
                {/* Sidebar */}
                <div
                    className={`fixed left-0 top-0 h-full bg-background/80 backdrop-blur-sm border-r transition-all ${
                        isSidebarCollapsed ? 'w-16' : 'w-64'
                    }`}
                >
                    <Sidebar isCollapsed={isSidebarCollapsed} />
                </div>

                {/* Main Content */}
                <div
                    className={`flex flex-col flex-1 transition-all ${
                        isSidebarCollapsed ? 'pl-16' : 'pl-64'
                    }`}
                >
                    {/* Navbar */}
                    <div className="w-full h-24 py-7 px-9 bg-gray-50 dark:bg-gray-900 shadow-md dark:shadow-lg">
                        <Navbar toggleSidebar={toggleSidebar} />
                    </div>

                    {/* Page Content */}
                    <main className="container flex flex-col items-center justify-center gap-4 px-4 py-8 md:py-16">
                        {children}
                    </main>
                </div>
            </div>

            {/* Floating Button */}
            <div className="fixed bottom-4 right-4">
                <button
                    className="relative group px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={openModal}
                >
                    Your Voice Matters
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                            Feedback Form
                        </h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Tell us how we can help */}
                            <div>
                                <label
                                    htmlFor="help"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Tell us how we can help you
                                </label>
                                <textarea
                                    id="help"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    rows={3}
                                    required
                                ></textarea>
                            </div>

                            {/* Rate our service */}
                            <div>
                                <label
                                    htmlFor="rating"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Rate our service
                                </label>
                                <select
                                    id="rating"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select a rating
                                    </option>
                                    <option value="1">1 - Poor</option>
                                    <option value="2">2 - Fair</option>
                                    <option value="3">3 - Good</option>
                                    <option value="4">4 - Very Good</option>
                                    <option value="5">5 - Excellent</option>
                                </select>
                            </div>

                            {/* How can we improve */}
                            <div>
                                <label
                                    htmlFor="improve"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    How can we improve to serve you better?
                                </label>
                                <textarea
                                    id="improve"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    rows={3}
                                    required
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
