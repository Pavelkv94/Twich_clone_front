"use client"

import { Button } from '@/components/ui/common/Button';
import { DataTable } from '@/components/ui/common/DataTable';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/common/DropdownMenu';
import { Skeleton } from '@/components/ui/common/Skeleton';
import ChannelAvatar from '@/components/ui/elements/ChannelAvatar';
import ChannelVerified from '@/components/ui/elements/ChannelVerified';
import Heading from '@/components/ui/elements/Heading'
import { FindMyFollowersQuery, useFindMyFollowersQuery } from '@/graphql/generated/graphql';
import { formatDate } from '@/utils/format-date';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontalIcon, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

const FollowersTable = () => {
    const t = useTranslations("dashboard.followers");

    const { data, loading: isLoadingFollowers } = useFindMyFollowersQuery();

    const followers = data?.findMyFollowers ?? [];

    const columns: ColumnDef<FindMyFollowersQuery['findMyFollowers'][number]>[] = [
        {
            header: t("columns.date"),
            accessorKey: "createdAt",
            cell: ({ row }) => formatDate(row.original.createdAt)
        },
        {
            header: t("columns.user"),
            accessorKey: "follower",
            cell: ({ row }) => <div className="flex items-center gap-x-2">
                <ChannelAvatar channel={row.original.follower} size="sm" />
                <h2 className="text-sm font-medium">{row.original.follower.username}</h2>
                {row.original.follower.isVerified && <ChannelVerified size="sm" />}
            </div>
        },
        {
            header: t("columns.actions"),
            accessorKey: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8 p-0">
                            <MoreHorizontalIcon className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side='right'>
                        <Link href={`/${row.original.follower.username}`} target='_blank'>
                            <DropdownMenuItem>
                                <User className="size-4 mr-2" />
                                {t("columns.viewChannel")}
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    return (
        <div className="ls:px-10">
            <Heading title={t("header.heading")} description={t("header.description")} size="lg" />
            <div className="mt-5 space-y-6">
                {isLoadingFollowers ? <Skeleton className="h-20 w-full rounded-xl" /> : <DataTable columns={columns} data={followers} />}
            </div>
        </div>
    )
}

export default FollowersTable

