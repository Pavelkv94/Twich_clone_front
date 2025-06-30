import { Button } from '@/components/ui/common/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/common/Dialog';
import { DialogTrigger } from '@/components/ui/common/Dialog';
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/common/Select';
import { Textarea } from '@/components/ui/common/TextArea';
import { useCreateIngressMutation, useCreateSponsorshipPlanMutation, useFindMySponsorhipPlansQuery } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { createPlanSchema } from '@/schemas/plan/create-plan.schema';
import { CreatePlanSchema } from '@/schemas/plan/create-plan.schema';
import { CreateIngressSchema, IngressType } from '@/schemas/stream/create-ingress.schema';
import { createIngressSchema } from '@/schemas/stream/create-ingress.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const CreatePlanForm = () => {
    const t = useTranslations("dashboard.plans.createForm");

    const [open, setOpen] = useState(false);
    const { refetchProfile } = useCurrent();

    const form = useForm<CreatePlanSchema>({
        resolver: zodResolver(createPlanSchema),
        defaultValues: {
            title: "",
            description: "",
            price: 0,
        },
    });
    const { refetch } = useFindMySponsorhipPlansQuery({});

    const [createPlan, { loading: createPlanLoading }] = useCreateSponsorshipPlanMutation({
        onCompleted: () => {
            toast.success(t("successMessage"));
            refetchProfile();
            refetch();
            form.reset();
        },
        onError: (error) => {
            toast.error(t("errorMessage"));
        },
    });

    const { isValid } = form.formState;

    const onSubmit = (data: CreatePlanSchema) => {
        createPlan({ variables: { input: data } });
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
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("titleLabel")}</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder={t("titlePlaceholder")} disabled={createPlanLoading} />
                                    </FormControl>
                                    <FormDescription>{t("titleDescription")}</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("descriptionLabel")}</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder={t("descriptionPlaceholder")} disabled={createPlanLoading} rows={4} />
                                    </FormControl>
                                    <FormDescription>{t("descriptionDescription")}</FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("priceLabel")}</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder={t("pricePlaceholder")}
                                            disabled={createPlanLoading}
                                            type="number"
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormDescription>{t("priceDescription")}</FormDescription>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={createPlanLoading || !isValid}>{t("submitButton")}</Button>
                        </div>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}

export default CreatePlanForm