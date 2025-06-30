import ChatSettings from "@/components/features/chat/settings/ChatSettings";
import FollowersTable from "@/components/features/follow/FollowersTable";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
    const t = await getTranslations("dashboard.followers.header");
    return {
        title: `${t("heading")} | Dashboard`,
        description: t("description"),
        robots: {
            index: false,
            follow: false,
        },
    }
}


export default function FollowersPage() {
    return <FollowersTable />
}
