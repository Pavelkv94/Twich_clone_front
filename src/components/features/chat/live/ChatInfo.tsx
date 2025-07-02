import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import { useAuth } from '@/hooks/useAuth';
import { Info } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

interface ChatInfoProps {
    isOwnerChannel: boolean;
    isFollowed: boolean;
    isSponsor: boolean;
    isChatEnabled: boolean;
    isChatFollowersOnly: boolean;
    isChatPremiumFollowersOnly: boolean;
}

const ChatInfo = ({ isOwnerChannel, isFollowed, isSponsor, isChatEnabled, isChatFollowersOnly, isChatPremiumFollowersOnly }: ChatInfoProps) => {
    const t = useTranslations('stream.chat.info');

    const { isAuthenticated } = useAuth();

    let message = '';

    if (!isAuthenticated) {
        message = t('authRequired');
    } else if (!isChatEnabled) {
        message = t('chatDisabled');
    } else if (isChatPremiumFollowersOnly && !isSponsor) {
        message = t('premiumFollowersOnly');
    } else if (isChatFollowersOnly && !isFollowed) {
        message = t('followersOnly');
    } else {
        return null
    }

    return (
        <div className='mt-2 flex h-10 w-full items-center rounded-md gap-x-2 border bg-accent px-3 text-muted-foreground'>
            <Info className='size-4' />
            <p className='text-sm font-semibold'>{message}</p>
        </div>
    )
}

export default ChatInfo