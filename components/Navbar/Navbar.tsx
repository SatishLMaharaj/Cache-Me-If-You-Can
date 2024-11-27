'use client';

import { Bell, Menu, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AuthButton } from "../auth-button";
import { LanguageSelector } from "../language-selector";
import { ThemeToggle } from "../theme-toggle";
import { SystemStatus } from "../system-status";

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    return (
        <div className="flex justify-between items-center w-full mb-7 relative">
            {/* Left */}
            <div className="flex items-center gap-5">
                <button
                    className="px-3 py-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800"
                    onClick={toggleSidebar} // Toggle the sidebar on click
                >
                    <Menu className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">
                <div className="hidden md:flex items-center gap-5">
                    <button className="relative">
                        <Bell className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 transform bg-red-600 rounded-full">
                            0
                        </span>
                    </button>
                    <AuthButton />
                    <LanguageSelector />
                    <ThemeToggle />
                    <SystemStatus />
                </div>

                <Link href="/Settings">
                    <Settings
                        className="cursor-pointer text-gray-500 dark:text-gray-300"
                        size={24}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
