import { Dialog, DialogHeader, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/common/Dialog'
import { FindSessionsByUserQuery } from '@/graphql/generated/graphql'
import { formatDate } from '@/utils/format-date'
import { useTranslations } from 'next-intl'
import React, { PropsWithChildren } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

interface SessionModalProps {
    session: FindSessionsByUserQuery['findSessionsByUserId'][number]
}

const SessionModal = ({ children, session }: PropsWithChildren<SessionModalProps>) => {
    const t = useTranslations("dashboard.settings.sessions.sessionModal");


    return <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogTitle className='text-xl'>{t("heading")}</DialogTitle>
            <div className='flex items-center'>
                <span className='font-medium'>{t("device")}</span>
                <span className='text-muted-foreground ml-2'>{session.metadata.device.browser}, {' '} {session.metadata.device.os}</span>
            </div>
            <div className='flex items-center'>
                <span className='font-medium'>{t("location")}</span>
                <span className='text-muted-foreground ml-2'>{session.metadata.location.country}, {' '} {session.metadata.location.city}</span>
            </div>
            <div className='flex items-center'>
                <span className='font-medium'>{t("ipAddress")}</span>
                <span className='text-muted-foreground ml-2'>{session.metadata.ip}</span>
            </div>
            <div className='flex items-center'>
                <span className='font-medium'>{t("createdAt")}</span>
                <span className='text-muted-foreground ml-2'>{formatDate(session.createdAt)}</span>
            </div>
            <YMaps>
                <Map
                    defaultState={{
                        center: [session.metadata.location.latitude, session.metadata.location.longitude],
                        zoom: 5
                    }}
                    width='300px'
                    height='300px'
                />

            </YMaps>
        </DialogContent>
    </Dialog>
}

export default SessionModal