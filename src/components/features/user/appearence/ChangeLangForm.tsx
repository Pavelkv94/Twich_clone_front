"use client"

import { FormField } from '@/components/ui/common/Form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/common/Select'
import CardContainer from '@/components/ui/elements/CardContainer'
import { setLanguage } from '@/libs/i18n/language'
import { changeLangSchema } from '@/schemas/user/change-lang.schema'
import { ChangeLangSchema } from '@/schemas/user/change-lang.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocale, useTranslations } from 'next-intl'
import React, { useTransition } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const languages = {
    ru: 'Русский',
    en: 'English'
}

const ChangeLangForm = () => {
    const t = useTranslations("dashboard.settings.appearence.language")

    const [isPending, startTransition] = useTransition();
    const locale = useLocale();

    const form = useForm<ChangeLangSchema>({
        resolver: zodResolver(changeLangSchema),
        values: {
            language: locale as ChangeLangSchema["language"],
        },
    })

    const onSubmit = async (value: ChangeLangSchema) => {
        startTransition(async () => {
            try {
                await setLanguage(value.language)
            } catch (error) {
                toast.error(t("errorMessage"));
            }
        })
    }

    return <CardContainer heading={t("heading")} description={t("description")} rightContent={
        <FormProvider {...form}>
            <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                    <Select onValueChange={value => {
                        field.onChange(value);
                        form.handleSubmit(onSubmit)();
                    }} value={field.value}>
                        <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder={t("selectPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(languages).map(([key, value]) => (
                                <SelectItem key={key} value={key} disabled={isPending}>{value}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            />
        </FormProvider>

    } />

}

export default ChangeLangForm