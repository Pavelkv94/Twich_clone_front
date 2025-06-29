import { cn } from '@/utils/tw-merge'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const headingSizes = cva("", {
    variants: {
        size: {
            default: "text-2xl",
            sm: "text-lg",
            lg: "text-4xl",
            xl: "text-5xl",
        }
    },
    defaultVariants: {
        size: "default",
    }
})

interface HeadingProps extends VariantProps<typeof headingSizes> {
    title: string,
    description?: string,
}

const Heading = ({ title, description, size }: HeadingProps) => {
    return (
        <div className='space-y-2'>
            <h1 className={cn('font-semibold text-foreground', headingSizes({ size }))}>{title}</h1>
            {description && <p className='text-muted-foreground'>{description}</p>}
        </div>
    )
}

export default Heading