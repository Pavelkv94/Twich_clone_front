import { Button } from '@/components/ui/common/Button';
import { Card } from '@/components/ui/common/Card';
import { FormField } from '@/components/ui/common/Form';
import ChannelAvatar from '@/components/ui/elements/ChannelAvatar';
import { FindChannelByUsernameQuery, useRemoveStreamThumbnailMutation } from '@/graphql/generated/graphql';
import { useCurrent } from '@/hooks/useCurrent';
import { uploadFileSchema, UploadFileSchema } from '@/schemas/upload-file.schema';
import { getMediaSource } from '@/utils/get-media-source';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { ChangeEvent, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import ConfirmModal from '@/components/ui/elements/ConfigmModal';

interface ChangeStreamThumbnailProps {
    stream: FindChannelByUsernameQuery['findChannelByUsername']['stream'];
}

const ChangeStreamThumbnail = ({ stream }: ChangeStreamThumbnailProps) => {
    const t = useTranslations('stream.settings.thumbnail');

    const { user } = useCurrent();

    const inputRef = useRef<HTMLInputElement>(null);

    const form = useForm<UploadFileSchema>({
        resolver: zodResolver(uploadFileSchema),
        values: {
            file: getMediaSource(stream?.thumbnailUrl),
        },
    });

    //todo update use hook from graphql
    // const [updateStreamThumbnail, { loading: updateStreamThumbnailLoading }] = useUpdateStreamThumbnailMutation({
    //     onCompleted: () => {
    //         toast.success(t('successUpdateMessage'));
    //     },
    //     onError: () => {
    //         toast.error(t('errorUpdateMessage'));
    //     },
    // });

    const [removeStreamThumbnail, { loading: removeStreamThumbnailLoading }] = useRemoveStreamThumbnailMutation({
        onCompleted: () => {
            toast.success(t('successRemoveMessage'));
        },
        onError: () => {
            toast.error(t('errorRemoveMessage'));
        },
    });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            form.setValue('file', file);
            //updateStreamThumbnail({ variables: { input: { file } } });
        }
    };

    return (
        <FormProvider {...form}>
            <FormField
                control={form.control}
                name='file'
                render={({ field }) => (
                    <>
                        <div className='flex items-center space-x-6'>
                            {stream?.thumbnailUrl ? (
                                <Image
                                    src={field.value instanceof File ? URL.createObjectURL(field.value) : field.value || ''}
                                    alt={stream.title}
                                    width={190}
                                    height={80}
                                    className='rounded-lg aspect-video'
                                />
                            ) : (
                                <Card className='flex items-center justify-center h-28 w-full flex-col rounded-lg'>
                                    <ChannelAvatar channel={user!} />
                                </Card>
                            )}
                            <div className='flex items-center w-full gap-x-3'>
                                <input className='hidden' type='file' ref={inputRef} onChange={handleImageChange} />
                                <Button variant='outline' size='icon' onClick={() => inputRef.current?.click()} disabled={removeStreamThumbnailLoading}>{t('updateButton')}</Button>
                                {stream?.thumbnailUrl && (
                                    <ConfirmModal heading={t('confirmModal.heading')} message={t('confirmModal.message')} onConfirm={() => removeStreamThumbnail()}>
                                        <Button variant='outline' size='icon' disabled={removeStreamThumbnailLoading}>
                                            <Trash className='size-4' />
                                        </Button>
                                    </ConfirmModal>

                                )}
                            </div>
                        </div>
                        <p className='text-sm text-muted-foreground'>{t('info')}</p>
                    </>
                )}
            />
        </FormProvider>
    )
}

export default ChangeStreamThumbnail