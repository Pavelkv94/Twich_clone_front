"use client"

import React from 'react'
import { FindReccomendedChannelsQuery } from '@/graphql/generated/graphql'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/hooks/useSidebar'
import Hint from '@/components/ui/elements/Hint'
import { Button } from '@/components/ui/common/Button'
import { cn } from '@/utils/tw-merge'
import Link from 'next/link'
import ChannelAvatar from '@/components/ui/elements/ChannelAvatar'
import ChannelVerified from '@/components/ui/elements/ChannelVerified'
import LiveBadge from '@/components/ui/elements/LiveBadge'
import { Skeleton } from '@/components/ui/common/Skeleton'

interface ChannelItemProps {
    channel: FindReccomendedChannelsQuery['findRecommendedChannels'][0]
}

const ChannelItem = ({ channel }: ChannelItemProps) => {
    const pathname = usePathname();

    const { isCollapsed } = useSidebar();

    const isActive = pathname === `/${channel.username}`;




    return isCollapsed ? <Hint label={channel.username} side='right' asChild>
        <Link href={`/${channel.username}`} className='mt-3 flex w-full items-center justify-center'>
            <ChannelAvatar channel={channel} isLive={channel.stream?.isLive} />
        </Link>
    </Hint > : <Button
        variant='ghost'
        asChild
        className={cn('h-11 mt-2 w-full justify-start', isActive && 'bg-accent')}
    >
        <Link href={`/${channel.username}`} className='flex w-full items-center'>
            <ChannelAvatar channel={channel} size="sm" isLive={channel.stream?.isLive} />
            <h2 className='truncate pl-2'>{channel.username}</h2>
            {channel.isVerified && <ChannelVerified size='sm' />}
            {channel.stream?.isLive && <div className='absolute right-5'>
                <LiveBadge />
            </div>
            }
        </Link>
    </Button>

}

export default ChannelItem

export function ChangeItemSkeleton() {
    return (
        <Skeleton className='mt-3 h-11 w-full rounded-full' />
    )
}