'use client'

import { Card } from '@/components/ui/common/Card';
import ChannelAvatar from '@/components/ui/elements/ChannelAvatar';
import LiveBadge from '@/components/ui/elements/LiveBadge';
import { getRandomColor } from '@/utils/color';
import { getMediaSource } from '@/utils/get-media-source';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import img from './1.jpg'

interface StreamThumbnailProps {
    url: string | null | undefined;
    user: any;
    isLive?: boolean;
}

const StreamThumbnail = ({ url, user, isLive }: StreamThumbnailProps) => {
    const [randomColor, setRandomColor] = useState('');
    const [imgSrc, setImgSrc] = useState(getMediaSource(url) || img);

    useEffect(() => {
        setRandomColor(getRandomColor());
    }, []);

    return (
        <div className="group relative aspect-video cursor-pointer rounded-xl">
            <div className='absolute inset-0 flex items-center justify-center rounded-xl opcity-0 transition-opacity group-hover:opacity-100' style={{ backgroundColor: randomColor }} />
            {url ?
                <Image
                    src={imgSrc}
                    alt={user.username}
                    fill
                    className='rounded-xl object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => setImgSrc(img)}
                /> :
                <Card className='h-full w-full flex items-center justify-center gap-y-4 rounded-lg transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
                    <ChannelAvatar channel={user} isLive={isLive} />
                </Card>}
            {isLive && <div className='absolute top-2 right-2 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
                <LiveBadge />
            </div>}
        </div>
    )
}

export default StreamThumbnail