import { FindRandomStreamsQuery } from '@/graphql/generated/graphql';
import Link from 'next/link';
import React from 'react'
import StreamThumbnail from './StreamThumbnail';
import ChannelAvatar from '@/components/ui/elements/ChannelAvatar';
import ChannelVerified from '@/components/ui/elements/ChannelVerified';

interface StreamCardProps {
    stream: FindRandomStreamsQuery['findRandomStreams'][number];
}

const StreamCard = ({ stream }: StreamCardProps) => {
    return (
        <div className="h-full w-full">
            <Link href={`/${stream.user.username}`}>
                <StreamThumbnail url={stream.thumbnailUrl} user={stream.user} isLive={stream.isLive} />
                <h2 className='mt-3 text-base font-semibold truncate text-foreground hover:text-primary'>{stream.title}</h2>
            </Link>
            <div className='flex mt-3 gap-x-2'>
                <ChannelAvatar channel={stream.user} isLive={stream.isLive} />
                <div className='flex flex-col overflow-hidden text-sm'>
                    <h2 className='flex items-center gap-x-2 font-semibold text-foreground'>
                        {stream.user.username}
                        {stream.user.isVerified && <ChannelVerified />}
                    </h2>
                    {stream.category && <Link href={`/category/${stream.category.slug}`}
                        className='text-muted-foreground'>
                        {stream.category.title}
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default StreamCard