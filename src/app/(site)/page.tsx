import CategoriesList from "@/components/features/category/CategoriesList";
import StreamsList from "@/components/features/stream/list/StreamsList";
import { FindRandomCategoriesDocument, FindRandomCategoriesQuery, FindRandomStreamsDocument, FindRandomStreamsQuery } from "@/graphql/generated/graphql";
import { getTranslations } from "next-intl/server";

async function getRandomStreams() {
  try {
    const query = FindRandomStreamsDocument.loc?.source.body;
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
      streams: data.data.findRandomStreams as FindRandomStreamsQuery['findRandomStreams'],
    }
  } catch (error) {
    console.error(error);
    return {
      streams: [],
    }
  }
}

async function getRandomCategories() {
  try {
    const query = FindRandomCategoriesDocument.loc?.source.body;
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
      categories: data.data.findRandomCategories as FindRandomCategoriesQuery['findRandomCategories'],
    }
  } catch (error) {
    console.error(error);
    return {
      categories: [],
    }
  }
}

export default async function HomePage() {
  const t = await getTranslations("home");

  const { streams } = await getRandomStreams();
  const { categories } = await getRandomCategories();

  return (
    <div className="space-y-10">
      <StreamsList heading={t("streamsHeading")} streams={streams} />
      <CategoriesList heading={t("categoriesHeading")} categories={categories} />
    </div>
  );
}
