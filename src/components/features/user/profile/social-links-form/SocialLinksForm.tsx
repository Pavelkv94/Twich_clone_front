"use client"

import { SocialLinksSchema } from '@/schemas/user/social-links.schema';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { socialLinksSchema } from '@/schemas/user/social-links.schema';
import { useCreateSocialLinkMutation, useFindSocialLinksQuery } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/common/Skeleton';
import FormWrapper from '@/components/ui/elements/FormWrapper';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import { Separator } from '@/components/ui/common/Separator';
import { Button } from '@/components/ui/common/Button';
import SocialLinksList from './SocialLinksList';

const SocialLinksForm = () => {
    const t = useTranslations("dashboard.settings.profile.socialLinks.createForm");

    const { refetch: refetchSocialLinks, loading: isLoadingSocialLinks } = useFindSocialLinksQuery();

    const form = useForm<SocialLinksSchema>({
        resolver: zodResolver(socialLinksSchema),
        values: {
            title: "",
            url: "",
        }
    })

    const [createSocialLink, { loading: isLoadingCreateSocialLink }] = useCreateSocialLinkMutation({
        onCompleted: () => {
            form.reset();
            refetchSocialLinks();
            toast.success(t("successUpdateMessage"));
        },
        onError: (error) => {
            toast.error(t("errorUpdateMessage"));
        }
    });

    const { isValid } = form.formState;

    const onSubmit = (data: SocialLinksSchema) => {
        createSocialLink({
            variables: {
                input: data
            }
        });
    }

    return isLoadingSocialLinks ? <SocialLinksSkeleton /> : (
        <FormWrapper heading={t("heading")}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name='title' render={({ field }) => (
                        <FormItem className='px-5'>
                            <FormLabel>{t("titleLabel")}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={t("titlePlaceholder")} disabled={isLoadingCreateSocialLink} />
                            </FormControl>
                            <FormDescription>{t("titleDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />
                    <FormField control={form.control} name='url' render={({ field }) => (
                        <FormItem className='px-5 pb-3'>
                            <FormLabel>{t("urlLabel")}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={t("titlePlaceholder")} disabled={isLoadingCreateSocialLink} />
                            </FormControl>
                            <FormDescription>{t("urlDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Separator className='my-3' />

                    <div className='flex justify-end p-5'>
                        <Button type='submit' disabled={!isValid || isLoadingCreateSocialLink}>{t("submitButton")}</Button>
                    </div>
                </form>
            </FormProvider>
            <SocialLinksList />
        </FormWrapper>
    )

}

export default SocialLinksForm


export function SocialLinksSkeleton() {
    return (
        <Skeleton className='h-72 w-full' />
    )
}