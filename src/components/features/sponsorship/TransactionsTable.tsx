"use client"

import { DataTable } from '@/components/ui/common/DataTable';
import { Skeleton } from '@/components/ui/common/Skeleton';
import Heading from '@/components/ui/elements/Heading'
import { FindMyTransactionsQuery, useFindMyTransactionsQuery } from '@/graphql/generated/graphql';
import { formatDate } from '@/utils/format-date';
import { ColumnDef } from '@tanstack/react-table';
import { useTranslations } from 'next-intl';
import React from 'react'

const TransactionsTable = () => {
    const t = useTranslations("dashboard.transactions");

    const { data, loading: isLoadingTransactions } = useFindMyTransactionsQuery();

    const transactions = data?.findMyTransactions ?? [];

    const columns: ColumnDef<FindMyTransactionsQuery['findMyTransactions'][number]>[] = [
        {
            header: t("columns.date"),
            accessorKey: "createdAt",
            cell: ({ row }) => formatDate(row.original.createdAt)
        },
        {
            header: t("columns.status"),
            accessorKey: "status",
            cell: ({ row }) => row.original.status
        },
        {
            header: t("columns.amount"),
            accessorKey: "amount",
            cell: ({ row }) => <div className="text-sm font-medium">{row.original.amount}</div>
        }
    ]

    return (
        <div className="ls:px-10">
            <Heading title={t("header.heading")} description={t("header.description")} size="lg" />
            <div className="mt-5 space-y-6">
                {isLoadingTransactions ? <Skeleton className="h-20 w-full rounded-xl" /> : <DataTable columns={columns} data={transactions} />}
            </div>
        </div>
    )
}

export default TransactionsTable

