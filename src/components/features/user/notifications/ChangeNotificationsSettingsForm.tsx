'use client'

import { FormField } from '@/components/ui/common/Form';
import ToggleCard, { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';
import { useChangeNotificationsSettingsMutation } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { ChangeNotificationsSettingsSchema } from '@/schemas/user/change-notifications-settings.schema';
import { changeNotificationsSettingsSchema } from '@/schemas/user/change-notifications-settings.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ChangeNotificationsSettingsForm = () => {
    const t = useTranslations("dashboard.settings.notifications");

    const { user, isLoadingProfile } = useCurrent()

    const form = useForm<ChangeNotificationsSettingsSchema>({
        resolver: zodResolver(changeNotificationsSettingsSchema),
        values: {
            siteNotifications: user?.notificationSettings?.siteNotification ?? false,
            telegramNotifications: user?.notificationSettings?.telegramNotification ?? false,
        },
    })

    const [changeNotificationsSettings, { loading }] = useChangeNotificationsSettingsMutation({
        onCompleted: (data) => {
            toast.success(t("successMessage"))

            if (data.changeNotificationSettings.telegramAuthToken) {
                window.open(`https://t.me/<bot_name>?start=${data.changeNotificationSettings.telegramAuthToken}`, "_blank")
            }
        },
        onError: () => {
            toast.error(t("errorMessage"))
        }
    })


    const onChange = (field: keyof ChangeNotificationsSettingsSchema, value: boolean) => {
        form.setValue(field, value)
        changeNotificationsSettings({
            variables: {
                input: {
                    siteNotification: field === "siteNotifications" ? value : form.getValues("siteNotifications"),
                    telegramNotification: field === "telegramNotifications" ? value : form.getValues("telegramNotifications"),
                }
            }
        })
    }


    return isLoadingProfile ? Array.from({ length: 2 }).map((_, index) => (
        <ToggleCardSkeleton key={index} />
    )) : (
        <FormProvider {...form}>
            <FormField
                control={form.control}
                name="siteNotifications"
                render={({ field }) => (
                    <ToggleCard
                        heading={t("siteNotifications.heading")}
                        description={t("siteNotifications.description")}
                        onChange={(value) => onChange("siteNotifications", value)}
                        value={field.value}
                    />
                )}
            />
            <FormField
                control={form.control}
                name="telegramNotifications"
                render={({ field }) => (
                    <ToggleCard
                        heading={t("telegramNotifications.heading")}
                        description={t("telegramNotifications.description")}
                        onChange={(value) => onChange("telegramNotifications", value)}
                        value={field.value}
                    />
                )}
            />
        </FormProvider>
    )
}

export default ChangeNotificationsSettingsForm


