import DeactivateForm from '@/components/features/auth/forms/DeactivateForm'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'

async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("auth.deactivate")
    return {
        title: t("heading"),
        description: t("description"),
    }
}


const DeactivatePage = () => {
    return <DeactivateForm />

}

export default DeactivatePage