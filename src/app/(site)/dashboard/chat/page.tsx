import ChatSettings from "@/components/features/chat/settings/ChatSettings";
import { NO_INDEX_NO_FOLLOW } from "@/libs/constants/seo.constants";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
    const t = await getTranslations("dashboard.chat.header");
    return {
        title: `${t("heading")} | Dashboard`,
        description: t("description"),
        ...NO_INDEX_NO_FOLLOW,
    }
}


export default function ChatPage() {
    return <ChatSettings />
}
