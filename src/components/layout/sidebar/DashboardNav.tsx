import { useTranslations } from 'next-intl';
import React from 'react'
import { RouteItem } from './route.interface';
import { Banknote, DollarSign, KeyRound, Medal, MessageSquare, SettingsIcon, Users } from 'lucide-react';
import SidebarItem from './SidebarItem';

const DashboardNav = () => {
    const t = useTranslations("layout.sidebar.dashboardNav");

    const routes: RouteItem[] = [
        {
            label: t("settings"),
            href: "/dashboard/settings",
            icon: SettingsIcon
        },
        {
            label: t("keys"),
            href: "/dashboard/keys",
            icon: KeyRound
        },
        {
            label: t("chatSettings"),
            href: "/dashboard/chat",
            icon: MessageSquare
        },
        {
            label: t("followers"),
            href: "/dashboard/followers",
            icon: Users
        },
        {
            label: t("sponsors"),
            href: "/dashboard/sponsors",
            icon: Medal
        },
        {
            label: t("premium"),
            href: "/dashboard/plans",
            icon: DollarSign
        },
        {
            label: t("transactions"),
            href: "/dashboard/transactions",
            icon: Banknote
        }
    ]

    return (
        <div className='space-y-2 px-2 pt-4 lg:pt-0'>
            {routes.map((route, index) => (
                <SidebarItem key={index} route={route} />
            ))}
        </div>
    )
}

export default DashboardNav