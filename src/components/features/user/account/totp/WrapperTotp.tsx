"use client"

import { Skeleton } from '@/components/ui/common/Skeleton';
import CardContainer from '@/components/ui/elements/CardContainer';
import { useCurrent } from '@/hooks/useCurrent';
import { useTranslations } from 'next-intl'
import React from 'react'
import DisableTotp from './DisableTotp';
import EnableTotp from './EnableTotp';

const WrapperTotp = () => {
    const t = useTranslations("dashboard.settings.account.twoFactor");

    const { user, isLoadingProfile, refetchProfile } = useCurrent();


    return isLoadingProfile ? <WrapperTotpSkeleton /> : (
        <CardContainer heading={t("heading")} description={t("description")} rightContent={<div className='flex items-center gap-x-4'>
            {!user?.isTotpEnabled ? <EnableTotp /> : <DisableTotp />}
        </div>}>


        </CardContainer>
    )
}

export default WrapperTotp

export function WrapperTotpSkeleton() {
    return (
        <Skeleton className='h-24 w-full' />
    )
}