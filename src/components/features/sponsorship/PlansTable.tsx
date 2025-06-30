"use client"

import { useCurrent } from '@/hooks/useCurrent';
import { useTranslations } from 'next-intl';
import React from 'react'
import VerifiedChannelAlert from './VerifiedChannelAlert';
import Heading from '@/components/ui/elements/Heading';
import CreatePlanForm from './forms/CreatePlanForm';
import { FindMySponsorhipPlansQuery, FindMySponsorsQuery, useFindMySponsorhipPlansQuery, useFindMySponsorsQuery, useRemoveSponsorshipPlanMutation } from '@/graphql/generated/graphql';
import { ColumnDef } from '@tanstack/react-table';
import { formatDate } from '@/utils/format-date';
import { DataTable } from '@/components/ui/common/DataTable';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/common/DropdownMenu';
import { toast } from 'sonner';
import { Button } from '@/components/ui/common/Button';
import { MoreHorizontalIcon, Trash } from 'lucide-react';

const PlansTable = () => {
    const t = useTranslations("dashboard.plans");
    const { user } = useCurrent();

    const { data, loading: findMyPlansLoading, error: findMyPlansError, refetch: refetchPlans } = useFindMySponsorhipPlansQuery({});
    const plans = data?.findMyPlans || [];

    const columns: ColumnDef<FindMySponsorhipPlansQuery['findMyPlans'][number]>[] = [
        {
            header: t("columns.date"),
            accessorKey: "createdAt",
            cell: ({ row }) => formatDate(row.original.createdAt)
        },
        {
            header: t("columns.title"),
            accessorKey: "title",
            cell: ({ row }) => row.original.title
        },
        {
            header: t("columns.price"),
            accessorKey: "price",
            cell: ({ row }) => row.original.price
        },
        {
            header: t("columns.actions"),
            accessorKey: "actions",
            cell: ({ row }) => {
                const [removePlan, { loading: removePlanLoading }] = useRemoveSponsorshipPlanMutation({
                    onCompleted: () => {
                        refetchPlans();
                        toast.success(t("columns.successRemoveMessage"));
                    },
                    onError: (error) => {
                        toast.error(t("columns.errorRemoveMessage"));
                    },
                });
                return <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8 p-0">
                            <MoreHorizontalIcon className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side='right'>
                        <DropdownMenuItem onClick={() => removePlan({ variables: { planId: row.original.id } })} disabled={removePlanLoading}>
                            <Trash className="size-4 mr-2" />
                            {t("columns.remove")}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            }

        }
    ]

    return user?.isVerified ? <div className="ls:px-10">
        <div className="block items-center justify-between space-y-3 lg:flex lg:space-y-0">
            <Heading title={t("header.heading")} description={t("header.description")} size="lg" />
            <CreatePlanForm />
        </div>
        <div className="mt-5 space-y-6">
            {findMyPlansLoading ? <Skeleton className="h-20 w-full rounded-xl" /> : <DataTable columns={columns} data={plans} />}
        </div>
    </div> : <VerifiedChannelAlert />

}

export default PlansTable