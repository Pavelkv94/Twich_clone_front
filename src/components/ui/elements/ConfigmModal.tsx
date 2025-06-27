import { useTranslations } from 'next-intl'
import React, { PropsWithChildren } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogFooter, AlertDialogDescription, AlertDialogTitle, AlertDialogContent, AlertDialogHeader } from '../common/AlertDialog'
import { AlertDialogTrigger } from '../common/AlertDialog'

interface ConfigmModalProps {
    heading: string
    message: string
    onConfirm: () => void
}

const ConfigmModal = ({ children, heading, message, onConfirm }: PropsWithChildren<ConfigmModalProps>) => {
    const t = useTranslations("components.configmModal")
    return (
        <AlertDialog>
            <AlertDialogTrigger>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{heading}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {message}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t("cancelButton")}</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>{t("confirmButton")}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ConfigmModal