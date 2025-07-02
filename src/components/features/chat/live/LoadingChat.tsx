import { Card } from '@/components/ui/common/Card'
import { Loader } from 'lucide-react'
import { useTranslations } from 'next-intl';
import React from 'react'

const LoadingChat = () => {
    const t = useTranslations('stream.chat');
    return (
        <Card className='lg:fixed flex h-[82%] w-full lg:w-[21.5%] flex-col overflow-y-auto xl:mt-0 items-center justify-center'>
            <Loader className='size-10 animate-spin text-muted-foreground' />
            <p className='mt-3 text-lg text-muted-foreground'>{t('loading')}</p>
        </Card>
    )
}

export default LoadingChat