import { Button } from '@/components/ui/common/Button';
import Hint from '@/components/ui/elements/Hint';
import { Minimize2 } from 'lucide-react';
import { Maximize } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

interface FullScreenControlProps {
    isFullScreen: boolean;
    onFullScreen: () => void;
}

const FullScreenControl = ({ isFullScreen, onFullScreen }: FullScreenControlProps) => {
    const t = useTranslations('stream.video.player.fullscreen');

    const Icon = isFullScreen ? Maximize : Minimize2;

    return (
        <div className='flex items-center justify-center gap-4'>
            <Hint label={isFullScreen ? t('close') : t('open')} asChild>
                <Button variant='ghost' size='icon' onClick={onFullScreen} className='text-white hover:bg-white/10'>
                    <Icon className='size-6' />
                </Button>
            </Hint>
        </div>
    )
}

export default FullScreenControl