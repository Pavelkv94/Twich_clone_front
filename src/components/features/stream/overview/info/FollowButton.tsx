import { Button } from '@/components/ui/common/Button';
import { FindChannelByUsernameQuery, useFindMyFollowersQuery, useFindMyFollowingsQuery, useFollowChannelMutation, useUnfollowChannelMutation } from '@/graphql/generated/graphql';
import { useAuth } from '@/hooks/useAuth';
import { useCurrent } from '@/hooks/useCurrent';
import { Heart, HeartOff } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';
import ConfirmModal from '@/components/ui/elements/ConfigmModal';

interface FollowButtonProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const FollowButton = ({ channel }: FollowButtonProps) => {
    const t = useTranslations('stream.actions.follow');
    const router = useRouter()

    const { isAuthenticated } = useAuth();
    const { user, isLoadingProfile } = useCurrent();

    const { data, loading: followingsLoading, refetch: refetchFollowings } = useFindMyFollowingsQuery({
        skip: !isAuthenticated,
    });
    const [follow, { loading: followLoading }] = useFollowChannelMutation({
        onCompleted: () => {
            refetchFollowings();
            toast.success(t('successFollowMessage'));
        },
        onError: (error) => {
            toast.error(t('errorFollowMessage'));
        },
    });
    const [unfollow, { loading: unfollowLoading }] = useUnfollowChannelMutation({
        onCompleted: () => {
            refetchFollowings();
            toast.success(t('successUnfollowMessage'));
        },
        onError: (error) => {
            toast.error(t('errorUnfollowMessage'));
        },
    });

    const followings = data?.findMyFollowings;

    const isOwnerChannel = user?.id === channel.id;
    const isExistingFollow = followings?.some((following) => following.followingId === channel.id);

    if (isOwnerChannel) return null;
    return isExistingFollow ? (
        <ConfirmModal heading={t('confirmUnfollowHeading')} message={t('confirmUnfollowMessage')} onConfirm={() => {
            unfollow({ variables: { channelId: channel.id } });
        }}>
            <Button disabled={followingsLoading || unfollowLoading} >
                <HeartOff className='size-4' />
                {t('unfollowButton')}
            </Button>
        </ConfirmModal>
    ) : (
        <Button disabled={followingsLoading || followLoading} onClick={() => {
            if (isAuthenticated) {
                follow({ variables: { channelId: channel.id } });
            } else {
                router.push('/account/login');
            }
        }}>
            <Heart className='size-4' />
            {t('followButton')}
        </Button>
    )
}

export default FollowButton