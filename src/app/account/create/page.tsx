import CreateAccountForm from "@/components/features/auth/forms/CreateAccountForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations('auth.register');
    return {
        title: t('heading'),
        description: t('description'),
    }
}

export default function CreateAccountPage() {
    return <CreateAccountForm />;
}