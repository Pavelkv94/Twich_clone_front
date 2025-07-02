import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import React from 'react'
import FollowButton from './FollowButton';
import SupportButton from './SupportButton';
import ShareActions from './ShareActions';
import { Skeleton } from '@/components/ui/common/Skeleton';
import StreamSettings from '../../settings/StreamSettings';

interface StreamActionsProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const StreamActions = ({ channel }: StreamActionsProps) => {
    return (
        <div className='mt-5 lg:flex items-center lg:space-y-0 space-x-3 space-y-4 lg:margin-top-0'>
            <FollowButton channel={channel} />
            {channel.isVerified && channel.sponsorshipPlans && <SupportButton channel={channel} />}
            <StreamSettings channel={channel} />
            <ShareActions channel={channel} />
        </div>
    )
}

export default StreamActions


export const StreamActionsSkeleton = () => {
    return (
        <div className='mt-6 lg:mt-0'>
            <div className='gap-x-4 items-center space-y-4 lg:flex lg:space-y-0'>
                <Skeleton className='h-10 w-44 rounded-full' />
                <Skeleton className='size-10 rounded-full' />
            </div>

        </div>
    )
}