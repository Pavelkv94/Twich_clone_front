import { Button } from '@/components/ui/common/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/common/Dialog';
import { DialogTrigger } from '@/components/ui/common/Dialog';
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/common/Form';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/common/Select';
import { useCreateIngressMutation } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { CreateIngressSchema, IngressType } from '@/schemas/stream/create-ingress.schema';
import { createIngressSchema } from '@/schemas/stream/create-ingress.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const CreateIngressForm = () => {
    const t = useTranslations("dashboard.keys.createModal");

    const [open, setOpen] = useState(false);
    const { user, isLoadingProfile, refetchProfile } = useCurrent();

    const form = useForm<CreateIngressSchema>({
        resolver: zodResolver(createIngressSchema),
        defaultValues: {
            ingressType: IngressType.RTMP,
        },
    });

    const [createIngress, { loading: createIngressLoading }] = useCreateIngressMutation({
        onCompleted: () => {
            toast.success(t("successMessage"));
            refetchProfile();
            form.reset();
        },
        onError: (error) => {
            toast.error(t("errorMessage"));
        },
    });

    const { isValid } = form.formState;

    const onSubmit = (data: CreateIngressSchema) => {
        createIngress({ variables: { ingressType: data.ingressType } });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary">{t("trigger")}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("heading")}</DialogTitle>
                </DialogHeader>
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="ingressType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("ingressTypeLabel")}</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={value => {
                                                field.onChange(Number(value));
                                            }}
                                            defaultValue={field.value.toString()}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder={t("selectPlaceholder")} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={IngressType.RTMP.toString()} disabled={createIngressLoading}>rtmp</SelectItem>
                                                <SelectItem value={IngressType.WHIP.toString()} disabled={createIngressLoading}>whip</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>{t("ingressTypeDescription")}</FormDescription>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={createIngressLoading || !isValid}>{t("submitButton")}</Button>
                        </div>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}

export default CreateIngressForm