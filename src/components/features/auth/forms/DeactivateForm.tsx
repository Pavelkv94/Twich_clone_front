"use client"

import React, { useState } from 'react'
import AuthWrapper from '../AuthWrapper'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import { Button } from '@/components/ui/common/Button';
import { useDeactivateAccountMutation, useLoginUserMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/common/InputOtp';
import { useAuth } from '@/hooks/useAuth';
import { DeactivateSchema } from '@/schemas/auth/deactivate.schema';
import { deactivateSchema } from '@/schemas/auth/deactivate.schema';

export default function DeactivateForm() {
    const t = useTranslations('auth.deactivate');
    const router = useRouter();
    const { exit } = useAuth();

    const [isShowConfirm, setIsShowConfirm] = useState(false);

    const form = useForm<DeactivateSchema>({
        resolver: zodResolver(deactivateSchema),
        defaultValues: {
            email: "",
            password: "",
            pin: "",
        },
    });


    const [deactivateAccount, { loading: isLoadingDeactivateAccount }] = useDeactivateAccountMutation({
        onCompleted: (data) => {
            exit();
            router.push('/dashboard/settings');
        },
        onError: (error) => {
            toast.error(t("errorMessage"));
        },
    });

    const { isValid } = form.formState;

    const onSubmit = (data: DeactivateSchema) => {
        deactivateAccount({
            variables: {
                input: data
            }
        });
    }

    return (
        <AuthWrapper heading={t('heading')} backButtonLabel={t('backButtonLabel')} backButtonHref="/dashboard/settings">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
                    {isShowConfirm ? <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('pinLabel')}</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field} >
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    {t('pinDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    /> : <><FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('emailLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('emailPlaceholder')} disabled={isLoadingDeactivateAccount} />
                                </FormControl>
                                <FormDescription>
                                    {t('emailDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>
                                            {t('passwordLabel')}
                                        </FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input {...field} placeholder={t('passwordPlaceholder')} type='password' disabled={isLoadingDeactivateAccount} />
                                    </FormControl>
                                    <FormDescription>
                                        {t('passwordDescription')}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                            )}
                        /></>}
                    <Button type="submit" disabled={!isValid || isLoadingDeactivateAccount} className="w-full mt-2">{t('submitButton')}</Button>
                </form>
            </Form>

        </AuthWrapper>
    )
}