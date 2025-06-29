import CardContainer from '@/components/ui/elements/CardContainer'
import { FindCurrentSessionQuery, FindSessionsByUserQuery, useFindSessionsByUserQuery, useRemoveSessionByIdMutation } from '@/graphql/generated/graphql'
import { getBrowserIcon } from '@/utils/get-browser-icon'
import { useTranslations } from 'next-intl'
import React from 'react'
import SessionModal from './SessionModal'
import { Button } from '@/components/ui/common/Button'
import { toast } from 'sonner'
import ConfigmModal from '@/components/ui/elements/ConfigmModal'
import { TrashIcon } from 'lucide-react'

interface SessionItemProps {
    session: FindSessionsByUserQuery['findSessionsByUserId'][number]
    isCurrentSession?: boolean
}

const SessionItem = ({ session, isCurrentSession }: SessionItemProps) => {
    const t = useTranslations("dashboard.settings.sessions.sessionItem");

    const { refetch } = useFindSessionsByUserQuery();


    const [removeSession, { loading: removeSessionLoading }] = useRemoveSessionByIdMutation({
        onCompleted: () => {
            toast.success(t("successDeleteMessage"));
            refetch();
        },
        onError: () => {
            toast.error(t("errorDeleteMessage"));
        }
    });

    const browserIcon = getBrowserIcon(session.metadata.device.browser);

    return <CardContainer
        heading={`${session.metadata.device.browser} ${session.metadata.device.os}`}
        description={`${session.metadata.location.country}, ${session.metadata.location.city}`}
        Icon={browserIcon}
        rightContent={
            <div className='flex items-center gap-x-4'>
                {!isCurrentSession && (
                    <ConfigmModal
                        heading={t("confirmModal.heading")}
                        message={t("confirmModal.message")}
                        onConfirm={() => removeSession({ variables: { id: session.id } })}
                    >
                        <Button variant="ghost" size="icon" disabled={removeSessionLoading}>
                            <TrashIcon className="size-4" />
                        </Button>
                    </ConfigmModal>
                )}
                <SessionModal session={session}>
                    <Button>
                        {t("detailsButton")}
                    </Button>
                </SessionModal>

            </div>

        }
    />

}

export default SessionItem