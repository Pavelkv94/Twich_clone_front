"use client"

import React, { useState } from 'react'
import AuthWrapper from '../AuthWrapper'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import { Button } from '@/components/ui/common/Button';
import { useResetPassMutation, useSetNewPassMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/common/Alert';
import { CircleCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { resetPasswordSchema } from '@/schemas/auth/reset-password.schema';
import { ResetPasswordSchema } from '@/schemas/auth/reset-password.schema';
import { newPasswordSchema } from '@/schemas/auth/new-password.schema';
import { NewPasswordSchema } from '@/schemas/auth/new-password.schema';
import { useParams, useRouter } from 'next/navigation';

export default function NewPasswordForm() {
    const t = useTranslations('auth.newPassword');
    const router = useRouter();
    const { token } = useParams<{ token: string }>();

    const form = useForm<NewPasswordSchema>({
        resolver: zodResolver(newPasswordSchema),
        defaultValues: {
            password: "",
            passwordRepeat: "",
        },
    });


    const [setNewPassword, { loading: isLoadingSetNewPassword }] = useSetNewPassMutation({
        onCompleted: () => {
            toast.success(t('successAlertTitle'));
            router.push('/account/login');
        },
        onError: (error) => {
            toast.error(t("errorMessage"));
        },
    });

    const { isValid } = form.formState;

    const onSubmit = (data: NewPasswordSchema) => {
        setNewPassword({
            variables: {
                data: {
                    password: data.password,
                    confirmPassword: data.passwordRepeat,
                    token: token
                }
            }
        });
    }

    return (
        <AuthWrapper heading={t('heading')} backButtonLabel={t('backButtonLabel')} backButtonHref="/account/login">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('passwordLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('passwordPlaceholder')} disabled={isLoadingSetNewPassword} />
                                </FormControl>
                                <FormDescription>
                                    {t('passwordDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="passwordRepeat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('passwordRepeatLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('passwordPlaceholder')} disabled={isLoadingSetNewPassword} />
                                </FormControl>
                                <FormDescription>
                                    {t('passwordDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <Button type="submit" disabled={!isValid || isLoadingSetNewPassword} className="w-full mt-2">{t('submitButton')}</Button>
                </form>
            </Form>

        </AuthWrapper>
    )
}