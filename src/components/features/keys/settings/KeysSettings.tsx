"use client"

import Heading from '@/components/ui/elements/Heading';
import { useCurrent } from '@/hooks/useCurrent';
import { useTranslations } from 'next-intl';
import React from 'react'
import InstructionModal from './InstructionModal';
import CreateIngressForm from './forms/CreateIngressForm';
import StreamUrl from './forms/StreamUrl';
import { Skeleton } from '@/components/ui/common/Skeleton';
import StreamKey from './forms/StreamKey';

const KeysSettings = () => {
    const t = useTranslations("dashboard.keys.header");

    const { user, isLoadingProfile } = useCurrent();

    return (
        <div className="lg:px-10">
            <div className="block items-center justify-between space-y-3 lg:flex lg:space-y-0">
                <Heading title={t("heading")} description={t("description")} size="lg" />
                <div className="flex items-center gap-x-4">
                    <InstructionModal />
                    <CreateIngressForm />
                </div>
            </div>
            <div className="mt-5 space-y-6">
                {isLoadingProfile ?
                    Array.from({ length: 2 }).map((_, index) => <Skeleton key={index} className="h-20 w-full rounded-xl" />) :
                    <>
                        <StreamUrl value={user?.stream?.serverUrl ?? null} />
                        <StreamKey value={user?.stream?.streamKey ?? null} />
                    </>}
            </div>
        </div>
    )
}

export default KeysSettings