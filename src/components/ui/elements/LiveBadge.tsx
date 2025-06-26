"use client"

import { useTranslations } from 'next-intl';
import React from 'react'

const LiveBadge = () => {
    const t = useTranslations("components.liveBadge");
    return (
        <div className='rounded-full bg-rose-500 px-2 p-0.5 text-center text-xs font-semibold uppercase text-white tracking-wide'>
            {t("text")}
        </div>
    )
}

export default LiveBadge