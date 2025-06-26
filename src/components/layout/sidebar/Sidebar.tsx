"use client";

import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/utils/tw-merge';
import React from 'react'
import SidebarHeader from './SidebarHeader';
import { usePathname } from 'next/navigation';
import DashboardNav from './DashboardNav';
import UserNav from './UserNav';

const Sidebar = () => {
    const { isCollapsed } = useSidebar();

    const pathname = usePathname();

    const isDashboard = pathname.includes("/dashboard");

    return (
        <aside className={cn("fixed left-0 z-50 mt-[75px] flex h-full flex-col border-r border-border bg-card transition-all duration-100 ease-in-out", isCollapsed ? "lg:w-16" : "lg:w-64")}>
            <SidebarHeader />
            {isDashboard ? <DashboardNav /> : <UserNav />}
        </aside>
    )
}

export default Sidebar