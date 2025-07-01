import { FindChannelByUsernameQuery, FindRandomStreamsQuery } from '@/graphql/generated/graphql';
import React from 'react'

interface StreamOverviewProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const StreamOverview = ({ channel }: StreamOverviewProps) => {
    return (
        <div>StreamOverview</div>
    )
}

export default StreamOverview