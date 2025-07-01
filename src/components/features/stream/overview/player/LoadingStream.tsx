import { Card } from '@/components/ui/common/Card';
import { Loader } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

const LoadingStream = () => {
    const t = useTranslations('stream.video');

    return (
        <Card className='relative flex h-full flex-col items-center justify-center'>
            <Loader className='size-12 animate-spin text-muted-foreground' />
            <p className='text-lg text-muted-foreground mt-3'>{t('loading')}</p>
        </Card>
    )
}

export default LoadingStream