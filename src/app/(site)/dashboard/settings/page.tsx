import UserSettings from "@/components/features/user/UserSettings";
import { NO_INDEX_NO_FOLLOW } from "@/libs/constants/seo.constants";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
    const { locale } = await params;
    const t = await getTranslations("dashboard.settings.header");
    return {
        title: `${t("heading")} | Dashboard`,
        description: t("description"),
        ...NO_INDEX_NO_FOLLOW,
    }
}


export default function SettingsPage() {
    return <UserSettings />
}
