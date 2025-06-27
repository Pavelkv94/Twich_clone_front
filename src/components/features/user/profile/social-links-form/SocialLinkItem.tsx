import { FindSocialLinksQuery, useFindSocialLinksQuery, useRemoveSocialLinkMutation, useUpdateSocialLinkMutation } from '@/graphql/generated/graphql'
import { SocialLinksSchema } from '@/schemas/user/social-links.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { socialLinksSchema } from '@/schemas/user/social-links.schema'
import { DraggableProvided } from '@hello-pangea/dnd'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { GripVertical, Pencil, Trash } from 'lucide-react'
import FormWrapper from '@/components/ui/elements/FormWrapper'
import { Button } from '@/components/ui/common/Button'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/common/Form'
import { Input } from '@/components/ui/common/Input'
import { toast } from 'sonner'

interface SocialLinkItemProps {
    link: FindSocialLinksQuery['socialLinks'][number]
    provided: DraggableProvided
}

const SocialLinkItem = ({ link, provided }: SocialLinkItemProps) => {
    const t = useTranslations("dashboard.settings.profile.socialLinks.editForm");

    const [editingId, setEditingId] = useState<string | null>(null);

    const { refetch: refetchSocialLinks } = useFindSocialLinksQuery();

    const form = useForm<SocialLinksSchema>({
        resolver: zodResolver(socialLinksSchema),
        values: {
            title: link.title ?? "",
            url: link.url ?? "",
        }
    })

    const { isValid, isDirty } = form.formState;

    const toggleEdit = (id: string | null) => {
        setEditingId(id);
    }

    const [updateSocialLink, { loading: isUpdatingSocialLink }] = useUpdateSocialLinkMutation({
        onCompleted: () => {
            toast.success(t("successUpdateMessage"));
            refetchSocialLinks();
        },
        onError: () => {
            toast.error(t("errorUpdateMessage"));
        }
    });

    const [deleteSocialLink, { loading: isDeletingSocialLink }] = useRemoveSocialLinkMutation({
        onCompleted: () => {
            refetchSocialLinks();
            toast.success(t("successDeleteMessage"));
        },
        onError: () => {
            toast.error(t("errorDeleteMessage"));
        }
    });

    const onSubmit = (data: SocialLinksSchema) => {
        updateSocialLink({ variables: { input: data } });
    }

    return (
        <div className='mb-4 flex items-center gap-x-2 rounded-mb border border-border bg-background text-sm' ref={provided.innerRef} {...provided.draggableProps}>
            <div className='rounded-1-md border-r border-r-border px-2 py-9 text-foreground transition' {...provided.dragHandleProps}>
                <GripVertical className='size-5' />
            </div>
            <div className='space-y-1 px-2'>
                {editingId === link.id ?
                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-x-6'>
                            <div className='w-96 space-y-2'>
                                <FormField control={form.control} name='title' render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} placeholder='Youtube' className='h-8' disabled={isUpdatingSocialLink || isDeletingSocialLink} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name='url' render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} placeholder='https://www.youtube.com' className='h-8' disabled={isUpdatingSocialLink || isDeletingSocialLink} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                            </div>
                            <div className='flex items-center gap-x-4'>
                                <Button variant='secondary' onClick={() => toggleEdit(null)}>{t("cancelButton")}</Button>
                                <Button type='submit' disabled={!isValid || isDirty || isUpdatingSocialLink || isDeletingSocialLink}>{t("submitButton")}</Button>
                            </div>
                        </form>
                    </FormProvider>
                    : <>
                        <h2 className='font-semibold text-foreground text-[17px]'>{link.title}</h2>
                        <p className='text-muted-foreground'>{link.url}</p>
                    </>
                }
            </div>
            <div className='flex items-center gap-x-2 ml-auto pr-4'>
                {editingId !== link.id && (
                    <Button variant='ghost' size='icon' onClick={() => toggleEdit(link.id)}>
                        <Pencil className='size-4 text-muted-foreground' />
                    </Button>
                )}
                <Button variant='ghost' size='icon' onClick={() => deleteSocialLink({ variables: { id: link.id } })}>
                    <Trash className='size-4 text-muted-foreground' />
                </Button>
            </div>
        </div>
    )
}

export default SocialLinkItem