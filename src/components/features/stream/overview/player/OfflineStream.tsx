import React, { CSSProperties } from 'react'
import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/common/Card';
import { WifiOff } from 'lucide-react';
import { getMediaSource } from '@/utils/get-media-source';


interface OfflineStreamProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const OfflineStream = ({ channel }: OfflineStreamProps) => {
    const t = useTranslations('stream');

    const backgroundStyle: CSSProperties = {
        backgroundImage: `url(${getMediaSource(channel.stream?.thumbnailUrl)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <Card className='flex flex-col items-center justify-center h-full' style={backgroundStyle}>
            {channel.stream?.thumbnailUrl &&
                <div className='absolute inset-0 z-0 rounded-lg bg-black opacity-60' />
            }
            <WifiOff className='z-10 size-12 text-muted-foreground' />
            <p className='z-10 text-lg text-white mt-3'>{channel.displayName} {t('info.offline')}</p>
        </Card>
    )
}

export default OfflineStream

