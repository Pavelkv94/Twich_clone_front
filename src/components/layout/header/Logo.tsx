'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LogoImage from '@/components/images/LogoImage'

const Logo = () => {
    const t = useTranslations("layout.header.logo")
    return (
        <Link href="/" className='flex items-center gap-x-4 transition-opacity hover:opacity-75'>
            <LogoImage />
            <div className='hidden lg:block leading-tight'>
                <h2 className='text-lg font-semibold tracking-wider text-accent-foreground'>
                    {t("title")}
                </h2>
                <p className='text-sm text-muted-foreground'>
                    {t("description")}
                </p>

            </div>
        </Link>
    )
}

export default Logo