import { Button } from '@/components/ui/common/Button';
import { useDisableTotpMutation } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { useTranslations } from 'next-intl';
import React from 'react'
import { toast } from 'sonner';
import ConfigmModal from '@/components/ui/elements/ConfigmModal';

const DisableTotp = () => {
    const t = useTranslations("dashboard.settings.account.twoFactor.disable");

    const { refetchProfile } = useCurrent()

    const [disableTotp, { loading: isLoadingDisableTotp }] = useDisableTotpMutation({
        onCompleted: () => {
            refetchProfile()
            toast.success(t("successMessage"))
        },
        onError: () => {
            toast.error(t("errorMessage"))
        }
    })

    return <ConfigmModal heading={t("heading")} message={t("message")} onConfirm={() => disableTotp()}>
        <Button variant='secondary' disabled={isLoadingDisableTotp}>
            {t("submitButton")}
        </Button>
    </ConfigmModal >

}

export default DisableTotp