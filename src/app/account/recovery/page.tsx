import ResetPasswordForm from "@/components/features/auth/forms/ResetPasswordForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations('auth.resetPassword');
    return {
        title: t('heading'),
        description: t('description')
    }
}

export default function RecoveryPage() {
    return <ResetPasswordForm />;
}