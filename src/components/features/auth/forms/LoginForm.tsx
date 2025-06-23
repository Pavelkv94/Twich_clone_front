"use client"

import React, { useState } from 'react'
import AuthWrapper from '../AuthWrapper'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/shared/Form';
import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';
import { useLoginUserMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { LoginSchema } from '@/schemas/auth/login.schema';
import { loginSchema } from '@/schemas/auth/login.schema';
import { useRouter } from 'next/navigation';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/shared/InputOtp';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function LoginForm() {
    const t = useTranslations('auth.login');
    const router = useRouter();
    const { auth } = useAuth();

    const [isShowTwoFactor, setIsShowTwoFactor] = useState(false);

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            login: "",
            password: "",
        },
    });


    const [loginUser, { loading: isLoadingLoginUser }] = useLoginUserMutation({
        onCompleted: (data) => {
            auth();
            router.push('/dashboard/settings');
        },
        onError: (error) => {
            if (error.message.includes("TOTP")) {
                setIsShowTwoFactor(true);
            } else {
                toast.error(error.message);
            }
        },
    });

    const { isValid } = form.formState;

    const onSubmit = (data: LoginSchema) => {
        loginUser({
            variables: {
                data: data
            }
        });
    }

    return (
        <AuthWrapper heading={t('heading')} backButtonLabel={t('backButtonLabel')} backButtonHref="/account/create">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
                    {isShowTwoFactor ? <FormField
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
                                    {t('loginDescription')}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    /> : <><FormField
                        control={form.control}
                        name="login"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('loginLabel')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('loginPlaceholder')} disabled={isLoadingLoginUser} />
                                </FormControl>
                                <FormDescription>
                                    {t('loginDescription')}
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
                                        <Link href="/account/recovery" className='text-sm ml-auto inline-block'>
                                            {t('forgotPasswordLabel')}
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <Input {...field} placeholder={t('passwordPlaceholder')} type='password' disabled={isLoadingLoginUser} />
                                    </FormControl>
                                    <FormDescription>
                                        {t('passwordDescription')}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>

                            )}
                        /></>}
                    <Button type="submit" disabled={!isValid || isLoadingLoginUser} className="w-full mt-2">{t('loginButton')}</Button>
                </form>
            </Form>

        </AuthWrapper>
    )
}