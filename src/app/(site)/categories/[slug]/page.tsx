import CategoryOverview from "@/components/features/category/CategoryOverview";
import { FindCategoryBySlugDocument, FindCategoryBySlugQuery } from "@/graphql/generated/graphql";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


async function getCategoryBySlug(slug: string) {
    try {
        const query = FindCategoryBySlugDocument.loc?.source.body;
        const variables = { slug };
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, variables }),
            next: {
                revalidate: 30,
            },
        });
        const data = await response.json();
        return {
            category: data.data.findCategoryBySlug as FindCategoryBySlugQuery['findCategoryBySlug'],
        }
    } catch (error) {
        console.error(error);
        return {
            category: null,
        }
    }
}

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> => {
    const t = await getTranslations("categories");
    const { slug } = await params;
    const { category } = await getCategoryBySlug(slug);
    return {
        title: `${t("heading")} | ${category?.title}`,
        description: category?.description,
        //todo for seo - images processing
        // openGraph: {
        //     images: [{
        //         url: params.category.thumbnailUrl,
        //         alt: params.category.title,
        //     }],
        // }
    }
}

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;

    const t = await getTranslations("categories");
    const { category } = await getCategoryBySlug(slug);

    return (
        <div className="space-y-10">
            {category && <CategoryOverview category={category} />}
        </div>
    );
}
