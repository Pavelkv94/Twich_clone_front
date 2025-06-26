"use client"

import React, { useState } from 'react'
import AuthWrapper from '../AuthWrapper'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import { Button } from '@/components/ui/common/Button';
import { useResetPassMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/common/Alert';
import { CircleCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { resetPasswordSchema } from '@/schemas/auth/reset-password.schema';
import { ResetPasswordSchema } from '@/schemas/auth/reset-password.schema';

export default function ResetPasswordForm() {
    const t = useTranslations('auth.resetPassword');
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useForm<ResetPasswordSchema>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: "",
        },
    });


    const [resetPassword, { loading: isLoadingResetPassword }] = useResetPassMutation({
        onCompleted: () => {
            setIsSuccess(true);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const { isValid } = form.formState;

    const onSubmit = (data: ResetPasswordSchema) => {
        resetPassword({
            variables: {
                data: data
            }
        });
    }

    return (
        <AuthWrapper heading={t('heading')} backButtonLabel={t('backButtonLabel')} backButtonHref="/account/login">
            {isSuccess ? <Alert>
                <CircleCheck size={4} />
                <AlertTitle>{t('successAlertTitle')}</AlertTitle>
                <AlertDescription>{t('successAlertDescription')}</AlertDescription>
            </Alert> : <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('emailLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('emailPlaceholder')} disabled={isLoadingResetPassword} />
                                </FormControl>
                                <FormDescription>
                                    {t('emailDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />

                    <Button type="submit" disabled={!isValid || isLoadingResetPassword} className="w-full mt-2">{t('submitButton')}</Button>
                </form>
            </Form>}

        </AuthWrapper>
    )
}