import { FindChannelByUsernameQuery, FindMessagesByStreamIdQuery, useChatMessageAddedSubscription, useFindMessagesByStreamIdQuery, useFindSponsorsByChannelQuery } from '@/graphql/generated/graphql';
import React, { useEffect, useState } from 'react'
import MessageItem from './MessageItem';

interface MessagesListProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const MessagesList = ({ channel }: MessagesListProps) => {
    const { data, loading } = useFindMessagesByStreamIdQuery({
        variables: {
            streamId: channel.stream?.id ?? '',
        },
    });

    const [messages, setMessages] = useState<FindMessagesByStreamIdQuery['findMessagesByStreamId']>([]);

    const { data: newMessageData } = useChatMessageAddedSubscription({
        variables: {
            streamId: channel.stream?.id ?? '',
        },
    });

    const { data: sponsorsData } = useFindSponsorsByChannelQuery({
        variables: {
            channelId: channel.id,
        },
    });

    const sponsors = sponsorsData?.findSponsorsByChannel;

    const sponsorIds = new Set(sponsors?.map(sponsor => sponsor.user.id));



    useEffect(() => {
        if (data && data.findMessagesByStreamId) {
            setMessages(data.findMessagesByStreamId);
        }
    }, [data]);

    useEffect(() => {
        if (newMessageData && newMessageData.chatMessageAdded) {
            const newMessage = newMessageData.chatMessageAdded;
            setMessages(prev => [newMessage, ...prev]);
        }
    }, [newMessageData]);


    return (
        <div className='flex flex-col-reverse h-full flex-1 overflow-y-auto'>
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} isSponsor={sponsorIds.has(message.user.id)} />
            ))}
        </div>
    )
}

export default MessagesList