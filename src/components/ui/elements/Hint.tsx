import React, { PropsWithChildren } from 'react'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '../common/Tooltip';
import { Tooltip } from '../common/Tooltip';

interface HintProps {
    label: string;
    asChild?: boolean;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

const Hint = ({ label, asChild, side, align, children }: PropsWithChildren<HintProps>) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
                <TooltipContent side={side} align={align} className='bg-[#1f2128] text-white dark:text-[#1f2128] dark:bg-white'>
                    <p className='font-semibold'>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default Hint