import { Button } from '@/components/ui/common/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/common/Dialog';
import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { Pencil, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import ChangeStreamThumbnail from './ChangeStreamThumbnail';
import ChangeStreamInfo from './ChangeStreamInfo';

interface StreamSettingsProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const StreamSettings = ({ channel }: StreamSettingsProps) => {
    const t = useTranslations('stream.settings');
    const { user } = useCurrent();

    const isOwnerChannel = user?.id === channel.id;

    const [isOpen, setIsOpen] = useState(false);

    if (!isOwnerChannel) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant='ghost' size='icon'>
                    <Pencil className='size-5' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t('heading')}</DialogTitle>
                </DialogHeader>
                <ChangeStreamThumbnail stream={channel.stream} />
                <ChangeStreamInfo stream={channel.stream} />
            </DialogContent>
        </Dialog>
    )
}

export default StreamSettings