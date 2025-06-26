import { cn } from '@/utils/tw-merge'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { Check } from 'lucide-react'

const verifiedSizes = cva("", {
    variants: {
        size: {
            default: "size-4",
            sm: "size-3",
        }
    },
    defaultVariants: {
        size: "default",
    }
})

interface ChannelVerifiedProps extends VariantProps<typeof verifiedSizes> {


}

const ChannelVerified = ({ size }: ChannelVerifiedProps) => {
    return (
        <span className={cn('flex items-center justify-center rounded-full bg-primary p-0.5', verifiedSizes({ size }))}>
            <Check className={cn('stroke-[4px] text-white', size === 'sm' ? 'size-2' : 'size-[11px]')} />
        </span>
    )
}

export default ChannelVerified