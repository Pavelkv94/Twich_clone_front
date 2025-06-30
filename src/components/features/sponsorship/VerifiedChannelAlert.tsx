import { Alert } from "@/components/ui/common/Alert";
import { ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

const VerifiedChannelAlert = () => {
    const t = useTranslations("dashboard.plans.alert");

    return <div className="flex h-[75vh] items-center flex-col w-full justify-center">
        <ShieldAlert className="size-20 text-muted-foreground" />
        <h1 className="mt-6 text-2xl font-bold">{t("heading")}</h1>
        <p className="mt-3 text-muted-foreground w-full items-center lg:w-[60%] text-center">{t("description")}</p>
    </div>
}

export default VerifiedChannelAlert