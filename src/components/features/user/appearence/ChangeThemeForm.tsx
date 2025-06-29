"use client"


import { FormField } from '@/components/ui/common/Form'
import ToggleCard from '@/components/ui/elements/ToggleCard'
import { changeThemeSchema } from '@/schemas/user/change-theme.schema'
import { ChangeThemeSchema } from '@/schemas/user/change-theme.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const ChangeThemeForm = () => {
    const t = useTranslations("dashboard.settings.appearence.theme")

    const { theme, setTheme } = useTheme();

    const form = useForm<ChangeThemeSchema>({
        resolver: zodResolver(changeThemeSchema),
        values: {
            theme: theme === "dark" ? "dark" : "light",
        },
    })

    const onChange = (value: boolean) => {
        const newValue = value ? "dark" : "light";
        setTheme(newValue);
        form.setValue("theme", newValue);
        toast.success(t("successMessage"));
    }

    return <FormProvider {...form}>
        <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
                <ToggleCard
                    heading={t("heading")}
                    description={t("description")}
                    onChange={onChange}
                    value={field.value === "dark"}
                >
                    {field.value}
                </ToggleCard>
            )}
        />

    </FormProvider>

}

export default ChangeThemeForm