import { FindAllCategoriesQuery } from "@/graphql/generated/graphql";
import { FindAllCategoriesDocument } from "@/graphql/generated/graphql";
import { APP_URL } from "@/libs/constants/url.constants";
import { MetadataRoute } from "next";

// from (site)/categories/page.tsx
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { categories } = await getCategories();

    const sitemap: MetadataRoute.Sitemap = [
        {
            url: APP_URL,
            lastModified: new Date().toISOString(),
            priority: 1,
        },
        {
            url: APP_URL + '/streams',
            lastModified: new Date().toISOString(),
            priority: 0.9,
        },
        {
            url: APP_URL + '/categories',
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
    ]
    categories.forEach((category) => {
        sitemap.push({
            url: APP_URL + '/categories/' + category.slug,
            lastModified: new Date().toISOString(),
            priority: 0.7,
        })
    })
    return sitemap;
}