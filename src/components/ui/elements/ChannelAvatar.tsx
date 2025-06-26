import { FindProfileQuery } from '@/graphql/generated/graphql'
import { cn } from '@/utils/tw-merge'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../common/Avatar'
import { getMediaSource } from '@/utils/get-media-source'

const avatarSizes = cva("", {
    variants: {
        size: {
            default: "size-9",
            sm: "size-7",
            lg: "size-14",
        }
    },
    defaultVariants: {
        size: "default",
    }
})

interface ChannelAvatarProps extends VariantProps<typeof avatarSizes> {
    channel: Pick<FindProfileQuery['getMe'], 'avatar' | 'username'>,
    isLive?: boolean,
}

const ChannelAvatar = ({ channel, isLive, size }: ChannelAvatarProps) => {
    return (
        <div className='relative'>
            <Avatar className={cn(avatarSizes({ size }), isLive && 'ring-2 ring-rose-500')}>
                <AvatarImage src={getMediaSource(channel.avatar)} className='object-cover' />
                <AvatarFallback>{channel.username.charAt(0)}</AvatarFallback>
            </Avatar>

        </div>
    )
}

export default ChannelAvatar