"use client"

import React from 'react'
import { RouteItem } from './route.interface'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/hooks/useSidebar'
import Hint from '@/components/ui/elements/Hint'
import { Button } from '@/components/ui/common/Button'
import { cn } from '@/utils/tw-merge'
import Link from 'next/link'

interface SidebarItemProps {
    route: RouteItem
}


const SidebarItem = ({ route }: SidebarItemProps) => {
    const pathname = usePathname();
    const { isCollapsed } = useSidebar();

    const isActive = pathname === route.href;


    return isCollapsed ? <Hint label={route.label} side='right' asChild>
        <Button variant='ghost' asChild className={cn('h-11 w-full justify-center', isActive && 'bg-accent')}>
            <Link href={route.href}>
                <route.icon className='mr-0 size-5' />
            </Link>
        </Button>
    </Hint> : <Button variant='ghost' asChild className={cn('h-11 w-full justify-start', isActive && 'bg-accent')}>
        <Link href={route.href} className='flex items-center gap-x-4'>
            <route.icon className='mr-0 size-5' />
            {route.label}
        </Link>
    </Button>

}

export default SidebarItem