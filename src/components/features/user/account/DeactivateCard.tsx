import { Button } from '@/components/ui/common/Button';
import CardContainer from '@/components/ui/elements/CardContainer';
import ConfigmModal from '@/components/ui/elements/ConfigmModal';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React from 'react'

const DeactivateCard = () => {
    const t = useTranslations("dashboard.settings.account.deactivation");
    const router = useRouter()

    return (
        <CardContainer heading={t("heading")} description={t("description")} rightContent={
            <div className='flex items-center gap-x-4'>
                <ConfigmModal heading={t("confirmModal.heading")} message={t("confirmModal.message")} onConfirm={() => router.push("/account/deactivate")}>
                    <Button variant='secondary'>{t("deactivateButton")}</Button>
                </ConfigmModal>
            </div>

        } />
    )
}

export default DeactivateCard