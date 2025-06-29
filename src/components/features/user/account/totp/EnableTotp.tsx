import { useEnableTotpMutation } from '@/graphql/generated/graphql';
import { Button } from '@/components/ui/common/Button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/common/Dialog';
import { FormDescription, FormItem, FormMessage } from '@/components/ui/common/Form';
import { FormControl } from '@/components/ui/common/Form';
import { FormLabel } from '@/components/ui/common/Form';
import { FormField } from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/common/InputOtp';
import { useGenerateTotpSecretQuery } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { enableTotpSchema } from '@/schemas/user/enable-totp';
import { EnableTotpSchema } from '@/schemas/user/enable-totp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const EnableTotp = () => {
    const t = useTranslations("dashboard.settings.account.twoFactor.enable");

    const [isOpen, setIsOpen] = useState(false)
    const { refetchProfile } = useCurrent()

    const { data, loading: isLoadingGenerateTotpSecret } = useGenerateTotpSecretQuery()
    const twoFactorAuth = data?.generateTotpSecret

    const form = useForm<EnableTotpSchema>({
        resolver: zodResolver(enableTotpSchema),
        defaultValues: {
            pin: "",
            secret: "",
        },
    })

    const [enableTotp, { loading: isLoadingEnableTotp }] = useEnableTotpMutation({
        onCompleted: () => {
            refetchProfile()
            toast.success(t("successMessage"))
            setIsOpen(false)
        },
        onError: () => {
            toast.error(t("errorMessage"))
        }
    })

    const isValid = form.formState.isValid

    const onSubmit = (data: EnableTotpSchema) => {
        enableTotp({
            variables: {
                input: {
                    pin: data.pin,
                    secret: twoFactorAuth?.secret || "",
                }
            }
        })
    }


    return <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <Button>
                {t("trigger")}
            </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
            <DialogHeader>
                <DialogTitle>{t("heading")}</DialogTitle>
            </DialogHeader>

            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <span className='text-sm text-muted-foreground'>{
                            twoFactorAuth?.qrCode ? t("qrInstruction") : ""
                        }</span>
                        <img src={twoFactorAuth?.qrCode} alt="QR Code" className='rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-center text-sm text-muted-foreground'>{twoFactorAuth?.secret ? t("secretCodeLabel") + twoFactorAuth?.secret : ""}</span>
                    </div>
                    <FormField control={form.control} name='pin' render={({ field }) => (
                        <FormItem className='flex flex-col justify-center max-sm:items-center'>
                            <FormLabel>{t("codeLabel")}</FormLabel>
                            <FormControl>
                                <InputOTP {...field} placeholder={t("codePlaceholder")} disabled={isLoadingGenerateTotpSecret} maxLength={6} >
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
                            <FormDescription>{t("codeDescription")}</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <DialogFooter>
                        <Button type='submit' disabled={!isValid || isLoadingGenerateTotpSecret || isLoadingEnableTotp}>{t("submitButton")}</Button>
                    </DialogFooter>
                </form>
            </FormProvider>
        </DialogContent>
    </Dialog>

}

export default EnableTotp