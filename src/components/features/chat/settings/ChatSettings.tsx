'use client'

import { FormField } from '@/components/ui/common/Form';
import Heading from '@/components/ui/elements/Heading';
import ToggleCard, { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';
import { useUpdateChatSettingsMutation } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { ChangeChatSettingsSchema } from '@/schemas/stream/change-chat-settings.schema';
import { changeChatSettingsSchema } from '@/schemas/stream/change-chat-settings.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ChatSettings = () => {
    const t = useTranslations("dashboard.chat");

    const { user, isLoadingProfile } = useCurrent()

    const form = useForm<ChangeChatSettingsSchema>({
        resolver: zodResolver(changeChatSettingsSchema),
        values: {
            isChatEnabled: user?.stream?.isChatEnabled ?? false,
            isChatFollowersOnly: user?.stream?.isChatFollowersOnly ?? false,
            isChatPremiumFollowersOnly: user?.stream?.isChatPremiumFollowersOnly ?? false,
        },
    })

    const [changeChatSettings, { loading }] = useUpdateChatSettingsMutation({
        onCompleted: (data) => {
            toast.success(t("successMessage"))
        },
        onError: () => {
            toast.error(t("errorMessage"))
        }
    })


    const onChange = (field: keyof ChangeChatSettingsSchema, value: boolean) => {
        form.setValue(field, value)
        changeChatSettings({
            variables: {
                input: { ...form.getValues(), [field]: value }
            }
        })
    }


    return <div className="ls:px-10">
        <Heading title={t("header.heading")} description={t("header.description")} size="lg" />

        <div className="mt-5 space-y-6">
            {isLoadingProfile ? Array.from({ length: 3 }).map((_, index) => (
                <ToggleCardSkeleton key={index} />
            )) : (
                <FormProvider {...form}>
                    <FormField
                        control={form.control}
                        name="isChatEnabled"
                        render={({ field }) => (
                            <ToggleCard
                                heading={t("isChatEnabled.heading")}
                                description={t("isChatEnabled.description")}
                                onChange={(value) => onChange("isChatEnabled", value)}
                                value={field.value}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isChatFollowersOnly"
                        render={({ field }) => (
                            <ToggleCard
                                heading={t("isChatFollowersOnly.heading")}
                                description={t("isChatFollowersOnly.description")}
                                onChange={(value) => onChange("isChatFollowersOnly", value)}
                                value={field.value}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isChatPremiumFollowersOnly"
                        render={({ field }) => (
                            <ToggleCard
                                heading={t("isChatPremiumFollowersOnly.heading")}
                                description={t("isChatPremiumFollowersOnly.description")}
                                onChange={(value) => onChange("isChatPremiumFollowersOnly", value)}
                                value={field.value}
                            />
                        )}
                    />
                </FormProvider>)}
        </div>
    </div>

}

export default ChatSettings


