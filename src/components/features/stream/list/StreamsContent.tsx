"use client"

import { FindAllStreamsQuery, useFindAllStreamsQuery } from '@/graphql/generated/graphql';
import React, { useEffect, useState } from 'react'
import StreamsList from './StreamsList';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import Heading from '@/components/ui/elements/Heading';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StreamCardSkeleton } from './StreamCard';

interface StreamsContentProps {
    streams: FindAllStreamsQuery['findAllStreams'];
}

const StreamsContent = ({ streams }: StreamsContentProps) => {
    const t = useTranslations("streams");

    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");

    const [streamsList, setStreamsList] = useState<FindAllStreamsQuery['findAllStreams']>(streams || []);

    const [hasMore, setHasMore] = useState(true);

    const { data, fetchMore } = useFindAllStreamsQuery({
        variables: {
            filters: {
                searchTerm,
                take: 12,
                skip: 0
            }
        },
        fetchPolicy: "network-only",
    })

    useEffect(() => {
        if (data?.findAllStreams) {
            setStreamsList(data.findAllStreams);
            setHasMore(data.findAllStreams.length === 12);
        }
    }, [data, searchTerm]);

    async function loadMore() {
        if (!hasMore) return;

        setTimeout(async () => {
            const { data: newData } = await fetchMore({
                variables: {
                    filters: {
                        searchTerm,
                        take: 12,
                        skip: streamsList.length
                    }
                }
            })
            if (newData?.findAllStreams) {
                setStreamsList(prev => [...prev, ...newData.findAllStreams]);
            } else {
                setHasMore(false);
            }
        }, 500)
    }

    return <>
        <Heading title={searchTerm ? t("searchHeading") + `: ${searchTerm}` : t("heading")} />
        <InfiniteScroll
            dataLength={streamsList.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {Array.from({ length: 12 }).map((_, index) => (
                    <StreamCardSkeleton key={index} />
                ))}
            </div>}
        >
            <StreamsList streams={streamsList} />
        </InfiniteScroll>
    </>
}

export default StreamsContent