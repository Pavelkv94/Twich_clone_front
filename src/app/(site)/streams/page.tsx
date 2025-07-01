import StreamsContent from "@/components/features/stream/list/StreamsContent";
import { FindAllStreamsDocument, FindAllStreamsQuery } from "@/graphql/generated/graphql";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

async function getAllStreams() {
    try {
        const query = FindAllStreamsDocument.loc?.source.body;
        const variables = {
            filters: {}
        };
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
            streams: data.data.findAllStreams as FindAllStreamsQuery['findAllStreams'],
        }
    } catch (error) {
        console.error(error);
        return {
            streams: [],
        }
    }
}

export const generateMetadata = async (props: { searchParams: Promise<{ searchTerm: string }> }): Promise<Metadata> => {
    const t = await getTranslations("streams");
    const { searchTerm } = await props.searchParams;
    return {
        title: `${t("heading")} | ${searchTerm ? t("searchHeading") + `: ${searchTerm}` : t("heading")}`,
    }
}

export default async function StreamsPage() {
    const { streams } = await getAllStreams();

    return (
        <div className="space-y-10">
            <StreamsContent streams={streams} />
        </div>
    );
}
