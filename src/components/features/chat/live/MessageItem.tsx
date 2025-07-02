import { FindMessagesByStreamIdQuery } from '@/graphql/generated/graphql';
import { stringToColor } from '@/utils/color';
import { Medal } from 'lucide-react';
import React from 'react'

interface MessageItemProps {
    message: FindMessagesByStreamIdQuery['findMessagesByStreamId'][number];
    isSponsor: boolean;
}

const MessageItem = ({ message, isSponsor }: MessageItemProps) => {
    const color = stringToColor(message.user.username);
    const formattedTime = new Date(message.createdAt).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className='flex gap-2 rounded-md p-2 hover:bg-accent'>
            <p className='text-sm text-muted-foreground'>{formattedTime}</p>
            <div className='flex grow flex-wrap gap-1 items-baseline'>
                <p className='flex items-center whitespace-nowrap text-sm fond-semibold'>
                    <span className='truncate' style={{ color }}>{message.user.username}</span>
                    {isSponsor && <Medal className='ml-1 size-3.5' style={{ color }} />}
                </p>
                <p className='text-sm break-all'>{message.message}</p>
            </div>
        </div>
    )
}

export default MessageItem