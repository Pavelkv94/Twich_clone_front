import { Button } from '@/components/ui/common/Button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/common/Form';
import { Input } from '@/components/ui/common/Input';
import { Select, SelectItem, SelectValue } from '@/components/ui/common/Select';
import { Separator } from '@/components/ui/common/Separator';
import { FindChannelByUsernameQuery, useChangeStreamInfoMutation, useFindAllCategoriesQuery } from '@/graphql/generated/graphql';
import { changeStreamInfoSchema, ChangeStreamInfoSchema } from '@/schemas/stream/change-stream-info.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SelectContent, SelectTrigger } from '@radix-ui/react-select';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ChangeStreamInfoProps {
    stream: FindChannelByUsernameQuery['findChannelByUsername']['stream'];
}

const ChangeStreamInfo = ({ stream }: ChangeStreamInfoProps) => {
    const t = useTranslations('stream.settings.info');

    const { data } = useFindAllCategoriesQuery();

    const categories = data?.findAllCategories ?? [];

    const form = useForm<ChangeStreamInfoSchema>({
        resolver: zodResolver(changeStreamInfoSchema),
        values: {
            title: stream?.title ?? '',
            categoryId: stream?.category?.id ?? '',
        },
    });

    const [changeStreamInfo, { loading: changeStreamInfoLoading }] = useChangeStreamInfoMutation({
        onCompleted: () => {
            toast.success(t('successUpdateMessage'));
        },
        onError: () => {
            toast.error(t('errorUpdateMessage'));
        },
    });

    const { isValid, isSubmitting } = form.formState;

    const onSubmit = (data: ChangeStreamInfoSchema) => {
        changeStreamInfo({ variables: { input: data } });
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-y-3'>
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem className='pb-3'>
                            <FormLabel>{t('titleLabel')}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={t('titlePlaceholder')} disabled={changeStreamInfoLoading} />
                            </FormControl>
                            <FormDescription>{t('titleDescription')}</FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem className='py-3'>
                            <FormLabel>{t('categoryLabel')}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('categoryPlaceholder')} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className='p-0'>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.id}>
                                            {category.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>{t('categoryDescription')}</FormDescription>
                        </FormItem>
                    )}
                />
                <div className='flex items-center justify-end pt-5'>
                    <Button type='submit' disabled={changeStreamInfoLoading || !isValid || isSubmitting}>{t('submitButton')}</Button>
                </div>
            </form>
        </FormProvider>

    )
}

export default ChangeStreamInfo