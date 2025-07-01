import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import { useConnectionState, useRemoteParticipant, useTracks } from '@livekit/components-react';
import { ConnectionState, Track } from 'livekit-client';
import React, { JSX } from 'react'
import OfflineStream from './OfflineStream';
import LoadingStream from './LoadingStream';
import StreamPlayer from './StreamPlayer';
import { Skeleton } from '@/components/ui/common/Skeleton';

interface StreamVideoProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const StreamVideo = ({ channel }: StreamVideoProps) => {
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(channel.id);

    const tracks = useTracks([
        Track.Source.Camera,
        Track.Source.Microphone,
    ]).filter((track) => track.participant.identity === channel.id);

    let content: JSX.Element;
    if (!participant && connectionState === ConnectionState.Connected) {
        content = <OfflineStream channel={channel} />
    } else if (!participant || tracks.length === 0) {
        content = <LoadingStream />
    } else {
        content = <StreamPlayer participant={participant} />
    }

    return (
        <div className='group relative mb-6 aspect-video rounded-lg'>
            {content}
        </div>
    )
}

export default StreamVideo


export const StreamVideoSkeleton = () => {
    return (
        <div className='mb-6 aspect-video'>
            <Skeleton className='h-full w-full rounded-lg' />
        </div>
    )
}