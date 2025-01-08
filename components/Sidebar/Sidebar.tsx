'use client';
import { useState, useEffect } from 'react';
import { BarChart2, Eye, LucideIcon, Menu, Settings, Users, FileQuestion } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { supabase } from "@/lib/supabase";

interface SidebarProps {
    isCollapsed: boolean;
}

interface SidebarLinksProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLinks = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
}: SidebarLinksProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <div
                className={`cursor-pointer flex items-center ${isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'
                    } hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 gap-3 transition-colors ${isActive
                        ? 'bg-blue-200 dark:bg-blue-700 text-white'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
            >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                <span
                    className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-gray-700 dark:text-gray-300`}
                >
                    {label}
                </span>
            </div>
        </Link>
    );
};

const Sidebar = ({ isCollapsed }: SidebarProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setIsAuthenticated(!!session);
        };

        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsAuthenticated(!!session);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div
            className={`flex flex-col h-full bg-white dark:bg-gray-800 transition-all duration-300 overflow-hidden shadow-md ${isCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            {/* Title */}
            <div className="p-4 pt-8">
                <h1
                    className={`font-extrabold text-2xl pl-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'
                        }`}
                >   
                    Blue
                </h1>
            </div>

            {/* Links */}
            <ul className="flex-grow mt-4 space-y-2 px-2">
                <SidebarLinks
                    href="/"
                    icon={Users}
                    label="Home"
                    isCollapsed={isCollapsed}
                />
                {isAuthenticated && (
                    <>
                        <SidebarLinks
                            href="/dashboard"
                            icon={Eye}
                            label="Dashboard"
                            isCollapsed={isCollapsed}
                        />
                    </>
                )}
                <SidebarLinks
                    href="/faq"
                    icon={FileQuestion}
                    label="FAQ"
                    isCollapsed={isCollapsed}
                />
                <SidebarLinks
                    href="/analytics"
                    icon={BarChart2}
                    label="Analytics"
                    isCollapsed={isCollapsed}
                />
                <SidebarLinks
                    href="/admin"
                    icon={Eye}
                    label="Admin Dashboard"
                    isCollapsed={isCollapsed}
                />
                <SidebarLinks
                    href="/settings"
                    icon={Settings}
                    label="Settings"
                    isCollapsed={isCollapsed}
                />
            </ul>
            {/* Footer */}
            <div className={`${isCollapsed ? 'hidden' : 'block'} mb-4`}>
                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                    &copy; 2024 Republic Bank
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
