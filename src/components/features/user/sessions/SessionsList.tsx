'use client'

import { useFindSessionsByUserQuery } from '@/graphql/generated/graphql';
import Heading from '@/components/ui/elements/Heading';
import { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';
import { useFindCurrentSessionQuery } from '@/graphql/generated/graphql';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'
import SessionItem from './SessionItem';

const SessionsList = () => {
    const t = useTranslations("dashboard.settings.sessions");

    const { data: currentSession, loading: loadingCurrentSession } = useFindCurrentSessionQuery();
    const currentSessionDate = currentSession?.findCurrentSession!;

    const { data: sessions, loading: loadingSessions } = useFindSessionsByUserQuery();
    const sessionsData = sessions?.findSessionsByUserId.filter((session) => session.id !== currentSessionDate.id);

    return <div className='space-y-6'>
        <Heading title={t("info.current")} size="sm" />
        {loadingCurrentSession ? (
            <ToggleCardSkeleton />
        ) : (
            <SessionItem session={currentSessionDate} isCurrentSession={true} />
        )}
        <Heading title={t("info.active")} size="sm" />
        {loadingSessions ? (
            Array.from({ length: 3 }).map((_, index) => (
                <ToggleCardSkeleton key={index} />
            ))
        ) : sessionsData && sessionsData.length ? (
            sessionsData?.map((session) => (
                <SessionItem key={session.createdAt} session={session} isCurrentSession={false} />
            ))
        ) : (
            <div className='text-center text-sm text-muted-foreground'>
                {t("info.noActiveSessions")}
            </div>
        )}
    </div>

}

export default SessionsList