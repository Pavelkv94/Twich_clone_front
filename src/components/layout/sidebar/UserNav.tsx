import React from 'react'
import { RouteItem } from './route.interface';
import { useTranslations } from 'next-intl';
import { Folder, Home, Radio } from 'lucide-react';
import SidebarItem from './SidebarItem';
import ReccomendedChannels from './ReccomendedChannels';

const UserNav = () => {
    const t = useTranslations("layout.sidebar.userNav");

    const routes: RouteItem[] = [
        {
            label: t("home"),
            href: "/home",
            icon: Home
        },
        {
            label: t("categories"),
            href: "/categories",
            icon: Folder
        },
        {
            label: t("streams"),
            href: "/streams",
            icon: Radio
        }

    ]

    return (
        <div className='space-y-2 px-2 pt-4 lg:pt-0'>
            {routes.map((route, index) => (
                <SidebarItem key={index} route={route} />
            ))}
            <ReccomendedChannels />
        </div>
    )
}

export default UserNav