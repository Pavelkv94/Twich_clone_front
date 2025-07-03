import CategoriesList from "@/components/features/category/CategoriesList";
import { FindAllCategoriesDocument, FindAllCategoriesQuery } from "@/graphql/generated/graphql";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


async function getCategories() {
    try {
        const query = FindAllCategoriesDocument.loc?.source.body;
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            next: {
                revalidate: 30,
            },
        });
        const data = await response.json();
        return {
            categories: data.data.findAllCategories as FindAllCategoriesQuery['findAllCategories'],
        }
    } catch (error) {
        console.error(error);
        return {
            categories: [],
        }
    }
}

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
    const t = await getTranslations("categories");
    return {
        title: `${t("heading")} | Categories`,
    }
}

export default async function CategoriesPage() {
    const t = await getTranslations("categories");

    const { categories } = await getCategories();

    return (
        <div className="space-y-10">
            <CategoriesList heading={t("heading")} categories={categories} />
        </div>
    );
}
