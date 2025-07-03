"use client"

import { Button } from '@/components/ui/common/Button';
import { FormField } from '@/components/ui/common/Form';
import { Skeleton } from '@/components/ui/common/Skeleton';
import ChannelAvatar from '@/components/ui/elements/ChannelAvatar';
import ConfigmModal from '@/components/ui/elements/ConfigmModal';
import FormWrapper from '@/components/ui/elements/FormWrapper';
import { useChangeProfileAvatarMutation, useRemoveProfileAvatarMutation } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { UploadFileSchema } from '@/schemas/upload-file.schema';
import { uploadFileSchema } from '@/schemas/upload-file.schema';
import { getMediaSource } from '@/utils/get-media-source';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash2Icon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ChangeAvatarForm = () => {
    const t = useTranslations("dashboard.settings.profile.avatar");

    const { user, isLoadingProfile, refetchProfile } = useCurrent();

    const inputRef = useRef<HTMLInputElement>(null);

    const form = useForm<UploadFileSchema>({
        resolver: zodResolver(uploadFileSchema),
        values: {
            file: user?.avatar ?? undefined
        }
    })

    const [changeAvatar, { loading: changeAvatarLoading }] = useChangeProfileAvatarMutation({
        onCompleted: () => {
            refetchProfile();
            toast.success(t("successUpdateMessage"));
        },
        onError: () => {
            toast.error(t("errorUpdateMessage"));
        }
    });

    const [removeAvatar, { loading: removeAvatarLoading }] = useRemoveProfileAvatarMutation({
        onCompleted: () => {
            refetchProfile();
            toast.success(t("successRemoveMessage"));
        },
        onError: () => {
            toast.error(t("errorRemoveMessage"));
        }
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            form.setValue("file", file);
            changeAvatar({ variables: { file: file } });
        }
    }

    const handleRemoveAvatar = () => {
        form.setValue("file", undefined);
        removeAvatar();
    }

    return isLoadingProfile ? <ChangeAvatarSkeleton /> : (
        <FormWrapper heading={t("heading")}>
            <FormProvider {...form}>
                    <FormField control={form.control} name='file' render={({ field }) => (
                        <div className='px-5 pb-5'>
                            <div className='w-full items-center space-x-6 lg:flex'>
                                <ChannelAvatar channel={{
                                    username: user?.username ?? "",
                                    avatar: field.value instanceof File ? URL.createObjectURL(field.value) : field.value
                                }} size='xl' />
                                <div className='space-y-3'>
                                    <div className='flex items-center gap-x-3'>
                                        <input type="file" ref={inputRef} className='hidden' onChange={handleFileChange} />
                                    <Button variant='secondary' onClick={() => inputRef.current?.click()} disabled={changeAvatarLoading || removeAvatarLoading}>
                                            {t("updateButton")}
                                        </Button>
                                        {!user?.avatar && (
                                            <ConfigmModal heading={t("confirmModal.heading")} message={t("confirmModal.message")} onConfirm={handleRemoveAvatar}>
                                                <Trash2Icon className='size-4' />
                                            </ConfigmModal>
                                        )}
                                    </div>
                                    <p className='text-sm text-muted-foreground'>{t("info")}</p>



                                </div>
                            </div>
                        </div>
                )} />
            </FormProvider>


        </FormWrapper>
    )
}

export default ChangeAvatarForm

export function ChangeAvatarSkeleton() {
    return (
        <Skeleton className='h-52 w-full' />
    )
}