"use client"

import { Separator } from '@/components/ui/common/Separator';
import { useFindReccomendedChannelsQuery } from '@/graphql/generated/graphql';
import { useSidebar } from '@/hooks/useSidebar';
import { useTranslations } from 'next-intl';
import React from 'react'
import ChannelItem from './ChannelItem';

const ReccomendedChannels = () => {
    const t = useTranslations("layout.sidebar.reccomended");

    const { data, loading: isLoading } = useFindReccomendedChannelsQuery();

    const channels = data?.findRecommendedChannels || [];

    const { isCollapsed } = useSidebar();

    return (
        <div>
            <Separator className='mb-3' />
            {!isCollapsed && <h2 className='text-lg mb-2 px-2 font-semibold text-foreground'>{t("heading")}</h2>}
            {isLoading ? <div>Loading...</div> : channels.map((channel, index) => (
                <ChannelItem key={index} channel={channel} />
            ))}
        </div>
    )
}

export default ReccomendedChannels