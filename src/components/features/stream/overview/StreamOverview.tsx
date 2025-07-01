"use client"

import React from 'react'
import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import { LiveKitRoom } from '@livekit/components-react';
import { useStreamToken } from '@/hooks/useStreamToken';
import StreamVideo, { StreamVideoSkeleton } from './player/StreamVideo';

interface StreamOverviewProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const StreamOverview = ({ channel }: StreamOverviewProps) => {

    const { token, name, identity } = useStreamToken(channel.id);


    if (!token || !name || !identity) {
        return <StreamOverviewSkeleton />;
    }

    return (
        <LiveKitRoom
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
            token={token}
            className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-7'
        >
            <div className='order-1 col-span-1 flex flex-col lg:col-span-5'>
                <StreamVideo channel={channel} />
            </div>
            <div className='order-2 col-span-1 flex h-80 flex-col space-y-6 lg:col-span-2'>
                CHAT
            </div>
        </LiveKitRoom>
    )
}

export default StreamOverview


export const StreamOverviewSkeleton = () => {
    return (
        <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-7'>
            <div className='order-1 col-span-1 flex flex-col lg:col-span-5'>
                <StreamVideoSkeleton />
            </div>
            <div className='order-2 col-span-1 flex h-80 flex-col space-y-6 lg:col-span-2'>
            </div>
        </div>
    )
}