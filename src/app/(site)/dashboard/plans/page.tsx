import PlansTable from "@/components/features/sponsorship/PlansTable";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
    const t = await getTranslations("dashboard.plans.header");
    return {
        title: `${t("heading")} | Dashboard`,
        description: t("description"),
        robots: {
            index: false,
            follow: false,
        },
    }
}


export default function PlansPage() {
    return <PlansTable />
}
