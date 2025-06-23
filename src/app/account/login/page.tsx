import LoginForm from "@/components/features/auth/forms/LoginForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations('auth.login');
    return {
        title: t('heading'),
        description: t('description'),
    }
}

export default function LoginPage() {
    return <LoginForm />;
}