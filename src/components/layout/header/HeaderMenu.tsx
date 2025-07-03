'use client'

import { Button } from '@/components/ui/common/Button'
import { useAuth } from '@/hooks/useAuth'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import ProfileMenu from './ProfileMenu'

const HeaderMenu = () => {
    const t = useTranslations("layout.header.headerMenu")

    const { isAuthenticated } = useAuth();

    return (
        <div className='ml-auto flex items-center gap-x-4'>
            {
                isAuthenticated ? <ProfileMenu /> : <>
                    <Link href="/account/login">
                        <Button variant="secondary" className='cursor-pointer hover:opacity-80'>{t("login")}</Button>
                    </Link>
                    <Link href="/account/create">
                        <Button className='cursor-pointer hover:opacity-80'>{t("register")}</Button>
                    </Link>
                </>
            }

        </div>
    )
}

export default HeaderMenu