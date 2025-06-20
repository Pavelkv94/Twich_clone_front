"use client"

import React, { useState } from 'react'
import AuthWrapper from '../AuthWrapper'
import { CreateAccountSchema } from '@/schemas/auth/create-account.schema';
import { createAccountSchema } from '@/schemas/auth/create-account.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/shared/Form';
import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';
import { useCreateUserMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/shared/Alert';
import { CircleCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CreateAccountForm() {
    const t = useTranslations('auth.register');
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useForm<CreateAccountSchema>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });


    const [createUser, { loading: isLoadingCreateUser }] = useCreateUserMutation({
        onCompleted: () => {
            setIsSuccess(true);
        },
        onError: (error) => {
            toast.error(t('errorMessage'));
        },
    });

    const { isValid } = form.formState;

    const onSubmit = (data: CreateAccountSchema) => {
        createUser({
            variables: {
                input: data
            }
        });
    }

    return (
        <AuthWrapper heading="Register Account" backButtonLabel="Already have an account? Login" backButtonHref="/account/login">
            {isSuccess ? <Alert>
                <CircleCheck size={4} />
                <AlertTitle>{t('successAlertTitle')}</AlertTitle>
                <AlertDescription>{t('successAlertDescription')}</AlertDescription>
            </Alert> : <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('usernameLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('usernamePlaceholder')} disabled={isLoadingCreateUser} />
                                </FormControl>
                                <FormDescription>
                                    {t('usernameDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('emailLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('emailPlaceholder')} disabled={isLoadingCreateUser} />
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
                                <FormLabel>{t('passwordLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('passwordPlaceholder')} type='password' disabled={isLoadingCreateUser} />
                                </FormControl>
                                <FormDescription>
                                    {t('passwordDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <Button type="submit" disabled={!isValid || isLoadingCreateUser} className="w-full mt-2">{t('createButton')}</Button>
                </form>
            </Form>}

        </AuthWrapper>
    )
}