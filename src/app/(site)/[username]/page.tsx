import StreamOverview from "@/components/features/stream/overview/StreamOverview";
import EmptyState from "@/components/ui/elements/EmptyState";
import { FindChannelByUsernameDocument, FindChannelByUsernameQuery } from "@/graphql/generated/graphql";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


async function getChannelByUsername(username: string) {
    try {
        const query = FindChannelByUsernameDocument.loc?.source.body;
        const variables = { username };
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
            channel: data.data.findChannelByUsername as FindChannelByUsernameQuery['findChannelByUsername'],
        }
    } catch (error) {
        console.error(error);
        return {
            category: null,
        }
    }
}

export const generateMetadata = async ({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> => {
    const { username } = await params;
    const { channel } = await getChannelByUsername(username);
    return {
        title: channel?.displayName,
        description: channel?.bio || channel?.displayName,
        //todo for seo - images processing
        // openGraph: {
        //     images: [{
        //         url: getMediaSource(channel.avatar),
        //         alt: channel.displayName,
        //     }],
        // }
    }
}

export default async function ChannelPage(props: { params: Promise<{ username: string }> }) {
    const { username } = await props.params;

    const { channel } = await getChannelByUsername(username);

    if (!channel) {
        return <EmptyState />;
    }

    return <StreamOverview channel={channel} />
}
