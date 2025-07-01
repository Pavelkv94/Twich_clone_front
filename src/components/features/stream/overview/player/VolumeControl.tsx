import { Button } from '@/components/ui/common/Button';
import { Slider } from '@/components/ui/common/Slider';
import Hint from '@/components/ui/elements/Hint';
import { Volume1, Volume2, VolumeX } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

interface VolumeControlProps {
    volume: number;
    onVolumeChange: (value: number) => void;
    onMute: () => void;
}

const VolumeControl = ({ volume, onVolumeChange, onMute }: VolumeControlProps) => {
    const t = useTranslations('stream.video.player');

    const isMuted = volume === 0;
    const isAboveHalf = volume > 50;

    let Icon = Volume1;
    if (isMuted) {
        Icon = VolumeX;
    } else if (isAboveHalf) {
        Icon = Volume2;
    }

    const handleVolumeChange = (value: number[]) => {
        onVolumeChange(value[0]);
    }

    return (
        <div className='flex items-center gap-2'>
            <Hint label={t('volume.label')} asChild>
                <Button variant='ghost' size='icon' onClick={onMute} className='text-white hover:bg-white/10'>
                    <Icon className='size-6' />
                </Button>
            </Hint>
            <Slider
                value={[volume]}
                onValueChange={handleVolumeChange}
                className='w-32 cursor-pointer'
                max={100}
                step={1}
            />
        </div>
    )
}

export default VolumeControl