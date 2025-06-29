"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { useCurrent } from '@/hooks/useCurrent';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { FormDescription, FormField, FormMessage } from '@/components/ui/common/Form';
import { FormControl, FormItem } from '@/components/ui/common/Form';
import { FormLabel } from '@/components/ui/common/Form';
import FormWrapper from '@/components/ui/elements/FormWrapper';
import { Input } from '@/components/ui/common/Input';
import { Separator } from '@/components/ui/common/Separator';
import { Button } from '@/components/ui/common/Button';
import { useChangePasswordMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { changePasswordSchema } from '@/schemas/user/change-password.schema';
import { ChangePasswordSchema } from '@/schemas/user/change-password.schema';

const ChangePasswordForm = () => {
    const t = useTranslations("dashboard.settings.account.password");

    const { isLoadingProfile, refetchProfile } = useCurrent();

    const form = useForm<ChangePasswordSchema>({
        resolver: zodResolver(changePasswordSchema),
        values: {
            password: "",
            newPassword: "",
        }
    })

    const [updatePassword, { loading: isLoadingUpdatePassword }] = useChangePasswordMutation({
        onCompleted: () => {
            refetchProfile();
            form.reset();
            toast.success(t("successUpdateMessage"));
        },
        onError: (error) => {
            toast.error(t("errorUpdateMessage"));
        }
    });

    const { isValid } = form.formState;

    const onSubmit = (data: ChangePasswordSchema) => {
        updatePassword({
            variables: {
                input: {
                    password: data.password,
                    newPassword: data.newPassword,
                }
            }
        });
    }

    return isLoadingProfile ? <ChangePasswordSkeleton /> : (
        <FormWrapper heading={t("heading")}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-y-3'>
                    <FormField control={form.control} name='password' render={({ field }) => (
                        <FormItem className='px-5'>
                            <FormLabel>{t("currentPasswordLabel")}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={t("currentPasswordPlaceholder")} disabled={isLoadingUpdatePassword} type='password' />
                            </FormControl>
                            <FormDescription>{t("currentPasswordDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />
                    <FormField control={form.control} name='newPassword' render={({ field }) => (
                        <FormItem className='px-5'>
                            <FormLabel>{t("newPasswordLabel")}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={t("newPasswordPlaceholder")} disabled={isLoadingUpdatePassword} type='password' />
                            </FormControl>
                            <FormDescription>{t("newPasswordDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />
                    <div className='flex justify-end p-5'>
                        <Button type='submit' disabled={!isValid || isLoadingUpdatePassword}>{t("submitButton")}</Button>
                    </div>
                </form>
            </FormProvider>
        </FormWrapper>
    )
}

export default ChangePasswordForm

export function ChangePasswordSkeleton() {
    return (
        <Skeleton className='h-96 w-full' />
    )
}