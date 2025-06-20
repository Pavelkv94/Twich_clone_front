import CreateAccountForm from "@/components/features/auth/forms/CreateAccountForm";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
    title: "Create Account",
    description: "Create a new account",
}

async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations('auth.register');
    return {
        title: t('heading'),
        description: t('description'),
    }
}

export default function CreateAccountPage() {
    return <CreateAccountForm />;
}