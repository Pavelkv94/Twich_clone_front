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
import { useChangeEmailMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { ChangeEmailSchema } from '@/schemas/user/change-email.schema';
import { changeEmailSchema } from '@/schemas/user/change-email.schema';

const ChangeEmailForm = () => {
    const t = useTranslations("dashboard.settings.account.email");

    const { user, isLoadingProfile, refetchProfile } = useCurrent();

    const form = useForm<ChangeEmailSchema>({
        resolver: zodResolver(changeEmailSchema),
        values: {
            email: user?.email ?? "",
        }
    })

    const [updateEmail, { loading: isLoadingUpdateEmail, error: updateEmailError }] = useChangeEmailMutation({
        onCompleted: () => {
            refetchProfile();
            toast.success(t("successUpdateMessage"));
        },
        onError: (error) => {
            toast.error(t("errorUpdateMessage"));
        }
    });

    const { isValid, isDirty } = form.formState;

    const onSubmit = (data: ChangeEmailSchema) => {
        updateEmail({
            variables: {
                input: {
                    email: data.email,
                }
            }
        });
    }

    return isLoadingProfile ? <ChangeEmailSkeleton /> : (
        <FormWrapper heading={t("heading")}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-y-3'>
                    <FormField control={form.control} name='email' render={({ field }) => (
                        <FormItem className='px-5'>
                            <FormLabel>{t("emailLabel")}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={t("emailPlaceholder")} disabled={isLoadingUpdateEmail} />
                            </FormControl>
                            <FormDescription>{t("emailDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />
                    <div className='flex justify-end p-5'>
                        <Button type='submit' disabled={!isValid || !isDirty || isLoadingUpdateEmail}>{t("submitButton")}</Button>
                    </div>
                </form>
            </FormProvider>
        </FormWrapper>
    )
}

export default ChangeEmailForm

export function ChangeEmailSkeleton() {
    return (
        <Skeleton className='h-64 w-full' />
    )
}