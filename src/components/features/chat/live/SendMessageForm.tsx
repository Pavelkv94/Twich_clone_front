import { Button } from '@/components/ui/common/Button';
import { FormControl, FormField, FormItem } from '@/components/ui/common/Form';
import { Textarea } from '@/components/ui/common/TextArea';
import EmojiPicker from '@/components/ui/elements/EmojiPicker';
import { FindChannelByUsernameQuery, useSendMessageMutation } from '@/graphql/generated/graphql';
import { sendMessageSchema } from '@/schemas/chat/send-message.schema';
import { SendMessageSchema } from '@/schemas/chat/send-message.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendHorizonal } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface SendMessageFormProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
    isDisabled: boolean;
}

const SendMessageForm = ({ channel, isDisabled }: SendMessageFormProps) => {
    const t = useTranslations('stream.chat.sendMessage');

    const form = useForm<SendMessageSchema>({
        resolver: zodResolver(sendMessageSchema),
        defaultValues: {
            text: '',
        },
    })

    const [sendMessage, { loading: isSending }] = useSendMessageMutation(
        {
            onError: () => {
                toast.error(t('errorMessage'));
            }
        }
    );


    const { isValid } = form.formState;

    const onSubmit = (data: SendMessageSchema) => {
        sendMessage({
            variables: {
                input: {
                    streamId: channel.stream?.id ?? '',
                    text: data.text,
                }
            }
        });
        form.reset();
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex items-center gap-x-4 mt-3'>
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem className='w-60'>
                            <FormControl>
                                <div className='relative'>
                                    <Textarea
                                        {...field}
                                        placeholder={t('placeholder')}
                                        className='resize-none min-h-[40px] mr-8'
                                        rows={1}
                                        onInput={(e) => {
                                            const textarea = e.target as HTMLTextAreaElement;
                                            textarea.style.height = 'auto';
                                            textarea.style.height = `${textarea.scrollHeight}px`;
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                form.handleSubmit(onSubmit)();
                                            }
                                        }}
                                        disabled={isDisabled || isSending || !isValid}
                                    />
                                    <div className='absolute right-2 top-2 cursor-pointer'>
                                        <EmojiPicker
                                            onChange={(emoji: string) => field.onChange(`${field.value}${emoji}`)}
                                            isDisabled={isDisabled}
                                        />
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type='submit' size="icon" disabled={isDisabled || isSending || !isValid}>
                    <SendHorizonal className='size-4' />
                </Button>
            </form>
        </FormProvider>
    )
}

export default SendMessageForm