import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/common/Card';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { FindChannelByUsernameQuery, useFindMyFollowingsQuery, useFindSponsorsByChannelQuery } from '@/graphql/generated/graphql';
import { useAuth } from '@/hooks/useAuth';
import { useConnectionState, useRemoteParticipant } from '@livekit/components-react';
import { ConnectionState } from 'livekit-client';
import { MessageSquare, MessageSquareOff } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'
import LoadingChat from './LoadingChat';
import SendMessageForm from './SendMessageForm';
import MessagesList from './MessagesList';
import ChatInfo from './ChatInfo';
import { useCurrent } from '@/hooks/useCurrent';

interface LiveChatProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
    isChatEnabled: boolean;
    isChatFollowersOnly: boolean;
    isChatPremiumFollowersOnly: boolean;
}

const LiveChat = ({ channel, isChatEnabled, isChatFollowersOnly, isChatPremiumFollowersOnly }: LiveChatProps) => {
    const t = useTranslations('stream.chat');

    const { isAuthenticated } = useAuth();
    const { user, isLoadingProfile } = useCurrent();
    const { data: followingsData, loading: isLoadingFollowings } = useFindMyFollowingsQuery({ skip: !isAuthenticated });
    const followings = followingsData?.findMyFollowings;

    const { data: sponsorsData, loading: isLoadingSponsors } = useFindSponsorsByChannelQuery({
        variables: {
            channelId: channel.id,
        },
    });
    const sponsors = sponsorsData?.findSponsorsByChannel;

    const isOwnerChannel = user?.id === channel.id;

    const isFollower = followings?.some(following => following.followingId === channel.id) ?? false;
    const isSponsor = sponsors?.some(sponsor => sponsor.user.id === user?.id) ?? false;

    const connectionState = useConnectionState()
    const participants = useRemoteParticipant(channel.id)

    const isOnline = participants && connectionState === ConnectionState.Connected;
    const isDisabled =
        !isOnline ||
        !isAuthenticated ||
        !isChatEnabled ||
        (isChatFollowersOnly && !isFollower && !isOwnerChannel) ||
        (isChatPremiumFollowersOnly && !isSponsor && !isOwnerChannel);

    if (connectionState === ConnectionState.Connecting || isLoadingProfile || isLoadingFollowings || isLoadingSponsors) {
        return <LoadingChat />
    }


    return <Card className='lg:fixed flex h-[82%] w-full lg:w-[21.5%] flex-col overflow-y-auto xl:mt-0'>
        <CardHeader className='border-b py-2'>
            <CardTitle className='text-lg text-center'>
                {t('heading')}
            </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col h-full overflow-y-auto p-4'>
            {isOnline ? (
                <>
                    <MessagesList channel={channel} />
                    <ChatInfo
                        isOwnerChannel={isOwnerChannel}
                        isFollowed={isFollower}
                        isSponsor={isSponsor}
                        isChatEnabled={isChatEnabled}
                        isChatFollowersOnly={isChatFollowersOnly}
                        isChatPremiumFollowersOnly={isChatPremiumFollowersOnly}
                    />
                    <SendMessageForm channel={channel} isDisabled={isDisabled} />
                </>
            ) : (
                <div className='flex h-full flex-col items-center justify-center'>
                    <MessageSquareOff className='size-10 text-muted-foreground' />
                    <h2 className='mt-3 text-xl font-medium'>{t('unavailable')}</h2>
                    <p className='mt-1 w-full text-center text-muted-foreground'>{t('unavailableMessage')}</p>
                </div>
            )}
        </CardContent>
    </Card>
}

export default LiveChat



export const LiveChatSkeleton = () => {
    return <Skeleton className='fixed my-8 flex h-[82%] w-[21.5%] flex-col xl:mt-0' />
}