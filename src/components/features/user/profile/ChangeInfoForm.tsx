"use client"

import { ChangeInfoSchema } from '@/schemas/user/change-info.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { changeInfoSchema } from '@/schemas/user/change-info.schema';
import { useTranslations } from 'next-intl';
import React from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form';
import { useCurrent } from '@/hooks/useCurrent';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { FormDescription, FormField, FormMessage } from '@/components/ui/common/Form';
import { FormControl, FormItem } from '@/components/ui/common/Form';
import { FormLabel } from '@/components/ui/common/Form';
import FormWrapper from '@/components/ui/elements/FormWrapper';
import { Input } from '@/components/ui/common/Input';
import { Separator } from '@/components/ui/common/Separator';
import { Textarea } from '@/components/ui/common/TextArea';
import { Button } from '@/components/ui/common/Button';
import { useChangeProfileInfoMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';

const ChangeInfoForm = () => {
    const t = useTranslations("dashboard.settings.profile.info");

    const { user, isLoadingProfile, refetchProfile } = useCurrent();

    const form = useForm<ChangeInfoSchema>({
        resolver: zodResolver(changeInfoSchema),
        values: {
            username: user?.username ?? "",
            displayName: user?.displayName ?? "",
            bio: user?.bio ?? "",
        }
    })

    const [updateProfileInfo, { loading: isLoadingUpdateProfileInfo, error: updateProfileInfoError }] = useChangeProfileInfoMutation({
        onCompleted: () => {
            refetchProfile();
            toast.success(t("successUpdateMessage"));
        },
        onError: (error) => {
            toast.error(t("errorUpdateMessage"));
        }
    });

    const { isValid, isDirty } = form.formState;

    const onSubmit = (data: ChangeInfoSchema) => {
        updateProfileInfo({
            variables: {
                input: data
            }
        });
    }

    return isLoadingProfile ? <ChangeInfoSkeleton /> : (
        <FormWrapper heading={t("heading")}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name='username' render={({ field }) => (
                        <FormItem className='px-5'>
                            <FormLabel>{t("usernameLabel")}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={t("usernamePlaceholder")} disabled={isLoadingUpdateProfileInfo} />
                            </FormControl>
                            <FormDescription>{t("usernameDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />
                    <FormField control={form.control} name='displayName' render={({ field }) => (
                        <FormItem className='px-5 pb-3'>
                            <FormLabel>{t("displayNameLabel")}</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder={t("displayNamePlaceholder")} disabled={isLoadingUpdateProfileInfo} />
                            </FormControl>
                            <FormDescription>{t("displayNameDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />
                    <FormField control={form.control} name='bio' render={({ field }) => (
                        <FormItem className='px-5 pb-3'>
                            <FormLabel>{t("bioLabel")}</FormLabel>
                            <FormControl>
                                <Textarea {...field} placeholder={t("bioPlaceholder")} disabled={isLoadingUpdateProfileInfo} />
                            </FormControl>
                            <FormDescription>{t("bioDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />
                    <div className='flex justify-end p-5'>
                        <Button type='submit' disabled={!isValid || !isDirty || isLoadingUpdateProfileInfo}>{t("submitButton")}</Button>
                    </div>
                </form>
            </FormProvider>
        </FormWrapper>
    )
}

export default ChangeInfoForm

export function ChangeInfoSkeleton() {
    return (
        <Skeleton className='h-52 w-full' />
    )
}