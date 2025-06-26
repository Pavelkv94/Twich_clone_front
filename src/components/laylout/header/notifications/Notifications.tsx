import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/common/Popover';
import { useFindUnreadNotificationsCountQuery } from '@/graphql/generated/graphql'
import { Bell } from 'lucide-react';
import React from 'react'
import NotificationsList from './NotificationsList';

const Notifications = () => {
    const { data, loading: isLoadingUnreadNotificationsCount } = useFindUnreadNotificationsCountQuery();

    const unreadNotificationsCount = data?.findUnreadNotificationsCount ?? 20;

    const displayCount = unreadNotificationsCount > 10 ? '+9' : unreadNotificationsCount;

    if (isLoadingUnreadNotificationsCount) return null

    return (

        <Popover>
            <PopoverTrigger>
                {unreadNotificationsCount !== 0 && (
                    <div className='absolute right-[62px] top-5 rounded-full bg-primary px-[5px] text-xs font-semibold text-white'>
                        {displayCount}
                    </div>
                )}
                <Bell className='size-5 text-foreground' />
            </PopoverTrigger>
            <PopoverContent align='end' className='w-[320px] max-w-[500px] overflow-y-auto'>
                <NotificationsList />
            </PopoverContent>
        </Popover>
    )
}

export default Notifications